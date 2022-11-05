import fs from "fs"
import { parse } from "./parser.js"
import path from "path"

let ID = 0
export class Compilation {
  constructor({ entry }) {
    this._entry = entry
    this.graph = []
  }

  make() {
    function _buildModule(fileName) {
      let sourceCode = fs.readFileSync(fileName, { encoding: "utf-8" })

      const { code, dependencies } = parse(sourceCode)
      return {
        code,
        dependencies,
        fileName,
        mapping: {},
        id: ID++
      }
    }

    const moduleQueue = []
    const entryModule = _buildModule(this._entry)
    moduleQueue.push(entryModule)
    this.graph.push(entryModule)

    while (moduleQueue.length > 0) {
      const currentModule = moduleQueue.shift()
      currentModule.dependencies.forEach((dependence) => {
        const childPath = path.resolve(
          path.dirname(currentModule.fileName),
          dependence
        )

        const childModule = _buildModule(childPath)
        currentModule.mapping[dependence] = childModule.id
        moduleQueue.push(childModule)
        this.graph.push(childModule)
      })
    }
  }
}
