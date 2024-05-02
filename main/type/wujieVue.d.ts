import type { DefineComponent, Plugin } from 'vue'
import { bus, destroyApp, preloadApp, setupApp } from 'wujie'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare const WujieVue: DefineComponent &
  Plugin & {
    bus: typeof bus
    setupApp: typeof setupApp
    preloadApp: typeof preloadApp
    destroyApp: typeof destroyApp
  }
