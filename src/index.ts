import { program } from "commander";
import Graphicer, {customInitialOptions} from "./createIcons";
import path from "path";

interface optsInterface {
  input: string,
  output: string,
  name: string,
  format: string,
  css: boolean
}

program
  .option("-i, --input <value>", "Input Directory.", "./icons")
  .option("-o,--output <value>", "Output Directory.", "./")
  .option("-n, --name <value>", "Icon font name.", "icon-font")
  .option("-f, --format <value>", "Icon file format. ex) ttf,woff,woff2", "ttf,eot,woff,woff2")
  .option("-c, --css", "output css file.", false)

program.parse();

const opts = program.opts() as optsInterface;

const targetDirFiles = path.resolve(path.join(opts.input, "/**/*.svg"))
console.log(targetDirFiles)

const options: Partial<customInitialOptions> = {
  files: targetDirFiles as string,
  fontName: opts.name,
  formats: opts.format.split(",") as Array<"woff" | "woff2" | "svg" | "eot">,
}

new Graphicer(options, opts.output, opts.css)