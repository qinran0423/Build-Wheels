import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { myWebpack } from "../src/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url))

const webpackConfig = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  }
}
myWebpack(webpackConfig)
