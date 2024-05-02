'use strict'
window.onload = () => {
  class WuJie extends HTMLElement {
    constructor() {
      super()
      // shadowDom 样式隔离，不会去影响外层的样式
      let dom = this.attachShadow({ mode: 'open' })
      let template = document.querySelector('#wujie')
      dom.appendChild(template.content.cloneNode(true))
      console.log(this.getAttr('age'), this.getAttr('url'))
    }
    getAttr(attr) {
      return this.getAttribute(attr)
    }
    // 生命周期自动触发，有东西插入时
    connectedCallback() {
      console.log('类似于 Vue 的 mounted')
    }
    // 生命周期卸载
    disconnectedCallback() {
      console.log('类似于 Vue 的 destroy')
    }
    attributeChangeCallback(name, oldValue, newValue) {
      console.log('类似于 Vue 的 watch，有属性发生变化 自动触发')
    }
  }
  // name 不能使用 大小驼峰。
  window.customElements.define('wu-jie', WuJie) // 挂在完成
}
