import Webfont from "webfont";
import {GlyphData, InitialOptions, GlyphMetadata, Format} from "webfont/dist/src/types/index";
import Deepmerge from "deepmerge";
import {isPlainObject} from "is-plain-object";
import fs from "fs";
import path from "path";
import {colorCyan, colorMagenta, colorRed} from "./utils";
import {Result} from "webfont/dist/src/types/Result";
import script from "./script";

export type customInitialOptions = InitialOptions & {
  files: string | string[],
  formats: Array<Format>,
  fontName: string,
  sort: boolean
}

const defaultOptions: customInitialOptions = {
  files: "./icons/**/*.svg",
  fontName: "",
  formats: ["woff2", "woff"],
  sort: true,
}
class Graphicer {
  private readonly outDir: string;
  private options: customInitialOptions;
  private readonly inputDir: string;
  private readonly outputFormats: Array<Format>
  private style: string;
  constructor(inputOption: Partial<customInitialOptions>, outDir: string, css: boolean) {
    this.outDir = outDir;
    this.inputDir = typeof inputOption.files === "string" ? inputOption.files.replace("/**/*.svg", "") : inputOption.files![0].replace("/**/*.svg", "");
    this.options = Deepmerge(defaultOptions, inputOption, {
      isMergeableObject: isPlainObject
    }) as customInitialOptions;
    this.outputFormats =this.options.formats;
    this.options.formats = this.options.formats!.concat(["woff2"]);
    this.style = "";
    this.createWebfontFile().then(() => {
      if (css) {
          this.createStyleSheet()
      }
    })
  }

  createWebfontFile = async() => {
    const prefixOutDir = path.resolve(this.outDir)
    const fonts = await Webfont(this.options)
    const metaDatum = [] as Array<{
      path?: string,
      name: string,
      unicode?: Array<string>,
      renamed?: boolean,
      width?: number,
      height?: number,
      color?: string
    }>;
    if (fonts.glyphsData) {
      for (let i = 0; i < fonts.glyphsData.length; i++) {
          const meta = fonts.glyphsData[i].metadata as GlyphMetadata
          metaDatum.push(meta)
      }
    }
    this.createHTMLFile(metaDatum);

    for (const format of this.outputFormats) {
      const fontData = fonts[format];
      if (fontData) {
        const outputFile = path.join(prefixOutDir, `${this.options.fontName}.${format}`)
        this.diggerDirectory(outputFile)
        fs.writeFileSync(outputFile, fontData);
      } else {
        console.log(colorRed("Cannot create Webfont File.\nPlease Check Setting or SVG File."))
      }
    }
    const outputFile = path.join(this.inputDir,"/example/", `${this.options.fontName}.woff2`)
    this.diggerDirectory(outputFile)
    fs.writeFileSync(outputFile, fonts.woff2!);
  }

  createCache = (inputDir: string) => {
    fs.writeFileSync(``, "", "utf-8");
  }

  createHTMLFile = async(metadata: Array<{
    path?: string,
    name?: string,
    unicode?: Array<string>,
    renamed?: boolean,
    width?: number,
    height?: number,
    color?: string
  }>) => {
    const fontTypes = [];
    for (const data of metadata) {
      fontTypes.push(data.name)
      this.style = this.style + `.${data.name}::after {content:"${data.name}"}\n`;
    }
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Mr.Graphicer</title>
      <script>window.fontdata=${JSON.stringify({
      fontName: this.options.fontName,
      fontTypes
    })}</script>
      <style>
      @font-face {
        font-family: "${this.options.fontName}";
        src: url("./${this.options.fontName}.woff2");
      }
</style>
    </head>
    <body>
      <div id="app"></div>
      <script src="./bundle.js"></script>
    </body>
  </html>
  `
    const outputHTMLPath = path.join(this.inputDir,"example/index.html")
    const createDir = `${outputHTMLPath.replace("index.html", "")}`
    this.diggerDirectory(createDir)
    fs.writeFileSync(outputHTMLPath,html, "utf-8")
    fs.writeFileSync(outputHTMLPath.replace("index.html", "bundle.js"),script, "utf-8")
  }

  createStyleSheet = () => {
    fs.writeFileSync(path.join(this.outDir, "icon-font.css"), this.style, "utf-8")
  }


  diggerDirectory = async(pathName: string) => {
    const ex = path.extname(pathName)
    const fileDir = pathName.split('/').filter((val) => {
      if (val !== '' && !val.includes(ex)) return val
    })
    let outPutDir = '/'
    for (const innerDir of fileDir) {
      outPutDir = path.join(outPutDir, innerDir)
      if (!fs.existsSync(outPutDir)) {
        await fs.mkdirSync(outPutDir)
      }
    }
  }
}



export default Graphicer;