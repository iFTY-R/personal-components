import babel from '@babel/core'
import presetEnv from '@babel/preset-env'
import presetReact from '@babel/preset-react'
import fs from 'fs'

function loadIndex() {
  const code = fs.readFileSync('./test.js', 'utf-8')
  // const res = babel.transform(code)
  // console.log(res.code)
  //

  const res = babel.transform(code, {
    presets: [
      [
        presetEnv,
        {
          // usage：按需引入，不会引入所有的 polyfill；entry：引入所有的 polyfill
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: [],
  })

  console.log(res.code)
}

function loadReact() {
  const code = fs.readFileSync('./app.jsx', 'utf-8')
  const res = babel.transform(code, {
    presets: [
      [
        presetEnv,
        {
          // usage：按需引入，不会引入所有的 polyfill；entry：引入所有的 polyfill
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      presetReact,
    ],
    plugins: [],
  })
  console.log(res.code)
}

// loadReact()

function customPlugin() {}

function loadPlugin() {
  const code = `
  const a = (param = 1) => 1 + param;
`

  // types 包含 ast 节点的所欲方法
  const transformFunction = ({ types: t }) => {
    return {
      name: 'transform-arrow-function',
      visitor: {
        // 匹配箭头函数
        ArrowFunctionExpression(path) {
          const node = path.node
          const arrowFunction = t.functionExpression(
            null,
            node.params,
            t.blockStatement([t.returnStatement(node.body)]),
            node.async,
          )
          path.replaceWith(arrowFunction)
        },
      },
    }
  }
  const res = babel.transform(code, {
    plugins: [transformFunction],
  })

  console.log(res.code)
  /* 将输出
  const a = function (param = 1) {
  return 1 + param;
};
   */
}

loadPlugin()
