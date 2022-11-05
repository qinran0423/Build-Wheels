import { Compilation } from "./compilation.js"
import { createBundleCode } from "./createBundleCode.js"
import fs from "fs"
import path from "path"
export class Compiler {
  constructor(config) {
    const { entry, output } = config
    this._entry = entry
    this._output = output
  }

  run() {
    // 创建了一个compilation对象
    this._compilation = new Compilation({ entry: this._entry })
    this._compilation.make()
    const code = createBundleCode(this._compilation.graph)

    const outPath = path.join(this._output.path, "./bundle.js")

    fs.writeFileSync(outPath, code)
  }
}
