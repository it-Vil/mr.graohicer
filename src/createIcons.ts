import Webfont from "webfont";
import {GlyphData, InitialOptions} from "webfont/dist/src/types/index";
import Deepmerge from "deepmerge";
import {isPlainObject} from "is-plain-object";
import fs from "fs";
import path from "path";
import {colorCyan, colorMagenta, colorRed} from "./utils";
import {Result} from "webfont/dist/src/types/Result";
import script from "./script";

const defaultOptions: InitialOptions = {
  files: "./icons/**/*.svg",
  fontName: "",
  formats: [],
  sort: true,
}


const createWebfontFile = async(inputOption: Partial<InitialOptions>, outDir: string) => {
  const options = Deepmerge(defaultOptions, inputOption, {
    isMergeableObject: isPlainObject
  }) as InitialOptions;
  const prefixOutDir = path.resolve(outDir)
  const fonts = await Webfont(options)
  const metaDatum = [] as Array<{
    path: string,
    name: string,
    unicode: Array<string>,
    renamed: boolean,
    width: number,
    height: number,
    color: string
  }>;
  if (fonts.glyphsData) {
    for (let i = 0; i < fonts.glyphsData.length; i++) {
      if (fonts.glyphsData[i].metadata) {
        // @ts-ignore
        metaDatum.push(fonts.glyphsData[i].metadata)
      }
    }
  }
  // @ts-ignore
  createHTMLFile(metaDatum, options.fontName, options.files);

  for (const format of options.formats!) {
    const fontData = fonts[format];
    if (fontData) {
      fs.writeFileSync(path.join(prefixOutDir, `${options.fontName}.${format}`), fontData);
    } else {
      console.log(colorRed("Cannot create Webfont File.\nPlease Check Setting or SVG File."))
    }
  }
}

const createCache = (inputDir: string) => {
  fs.writeFileSync(``, "", "utf-8");
}

const createHTMLFile = async(metadata: Array<{
  path?: string,
  name?: string,
  unicode?: Array<string>,
  renamed?: boolean,
  width?: number,
  height?: number,
  color?: string
}>, fontName: string, inputDir: string) => {
  const fontTypes = [];
  for (const data of metadata) {
    fontTypes.push(data.name)
  }
  const windowObject = {
    fontName,
    fontTypes
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
      <script>window.fontdata=${JSON.stringify(windowObject)}</script>
      <style>
      @font-face {
        font-family: "${fontName}";
        src: url("./${fontName}.woff2");
      }
</style>
    </head>
    <body>
      <div id="app"></div>
      <script src="./bundle.js"></script>
    </body>
  </html>
  `
  const outputHTMLPath = path.join(inputDir.replace("/**/*.svg", ""),"example/index.html")
  const createDir = `${outputHTMLPath.replace("index.html", "")}`
  if (!fs.existsSync(`${createDir}`)) {
    fs.mkdirSync(`${outputHTMLPath.replace("index.html", "")}`)
  }
  fs.writeFileSync(outputHTMLPath,html, "utf-8")
  fs.writeFileSync(outputHTMLPath.replace("index.html", "bundle.js"),script, "utf-8")
}

const diggerDirectory = async(pathName: string) => {
  const ex = path.extname(pathName)
  console.log(pathName)
  const fileDir = pathName.split('/').filter((val) => {
    if (val !== '' && !val.includes(ex)) return val
  })
  console.log(fileDir)
  let outPutDir = '/'
  for (const innerDir of fileDir) {
    outPutDir = path.join(outPutDir, innerDir)
    if (!fs.existsSync(outPutDir)) {
      await fs.mkdirSync(outPutDir)
    }
  }
}



export default createWebfontFile;