// https://www.cnblogs.com/tbfboke/p/16737485.html
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
