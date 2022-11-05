import fs from "fs"
import path from "path"
import ejs from "ejs"
import { fileURLToPath } from "url"

function dirname() {
  return path.dirname(fileURLToPath(import.meta.url))
}

export function createBundleCode(data) {
  const template = fs.readFileSync(path.join(dirname(), "./bundle.ejs"), {
    encoding: "utf-8"
  })

  const content = data.map((asset) => {
    const { code, id, mapping } = asset
    return {
      code,
      id,
      mapping
    }
  })

  let code = ejs.render(template, { content })

  return code
}
