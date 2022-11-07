import { program } from "commander";
import createIcons from "./createIcons";
import path from "path";
import {InitialOptions} from "webfont/dist/src/types/index";

program
  .option("-i, --input <value>", "Input Directory.", "./icons")
  .option("-o,--output <value>", "Output Directory.", "./")
  .option("-n, --name <value>", "Icon font name.", "icon-font")
  .option("-f, --format <value>", "Icon file format. ex) ttf,woff,woff2", "ttf,eot,woff,woff2")

program.parse();

const opts = program.opts() as Record<string, string>;

const targetDirFiles = opts.input + "/**/*.svg"

const options: Partial<InitialOptions> = {
  files: targetDirFiles,
  fontName: opts.name,
  formats: opts.format.split(",") as Array<"woff" | "woff2" | "svg" | "eot">,
}

createIcons(options, opts.output).then()