import { parse as parseBabel } from "@babel/parser"
import rawTraverse from "@babel/traverse"
import { transformFromAst } from "@babel/core"

const traverse = rawTraverse.default
export function parse(source) {
  const dependencies = []
  const ast = parseBabel(source, {
    sourceType: "module"
  })

  traverse(ast, {
    ImportDeclaration: function ({ node }) {
      dependencies.push(node.source.value)
    }
  })

  const { code } = transformFromAst(ast, null, {
    presets: ["env"]
  })

  return {
    code,
    dependencies
  }
}
