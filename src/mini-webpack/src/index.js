import { Compiler } from "./compiler.js"

export function myWebpack(config) {
  const compiler = new Compiler(config)
  compiler.run()
}
