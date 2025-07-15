import swc from '@swc/core'

function loadIndex() {
  const res = swc.transformFileSync('../test.js', {
    jsc: {
      target: 'es5',
      parser: {
        syntax: 'ecmascript',
      },
    },
  })
  console.log(res.code)
}

function loadReact() {
  const res = swc.transformFileSync('../app.jsx', {
    jsc: {
      target: 'es5',
      parser: {
        syntax: 'ecmascript',
        jsx: true,
      },
    },
  })
  console.log(res.code)
}

loadReact()
