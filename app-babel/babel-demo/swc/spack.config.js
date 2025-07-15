import { config } from '@swc/core/spack'
import path from 'path'

export default config({
  entry: {
    web: path.join(new URL('.', import.meta.url).pathname, '../test.js'),
  },
  output: {
    path: path.join(new URL('.', import.meta.url).pathname, './dist'),
    name: 'test.js',
  },
})
