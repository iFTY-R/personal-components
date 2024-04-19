/*
* pnpm 9，.eslintignore 不再支持，支持 eslint.config.cjs
*  */
module.exports = [
  {
    // # 优化点：去掉该文件后，esm 下文件不会爆红
    ignores: [
      "/node_modules",
      "/dist",
      "/doc",
      "**/dist",
      "**/build",
      "**/esm",
      "**/node_modules",
      "tsconfig.json",
      "/script",
      "/utils/rollup",
      "**/rollups",
      "/utils/eslint-config",
      "commitlint.config.js",
      "jest.config.cjs",
      // # "rollup.config.js",
    ],
  }
]

