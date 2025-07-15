import { defineComponent, getCurrentInstance, h, onBeforeUnmount, onMounted, watch } from 'vue'
import { bus, startApp } from 'wujie'

const wujie = defineComponent({
	props: {
		width: { type: String, default: '' },
		height: { type: String, default: '' },
		name: { type: String, default: '', required: true },
		loading: { type: HTMLElement, default: undefined },
		url: { type: String, default: '', required: true },
		sync: { type: Boolean, default: undefined },
		prefix: { type: Object, default: undefined },
		alive: { type: Boolean, default: undefined },
		props: { type: Object, default: undefined },
		attrs: { type: Object, default: undefined },
		replace: { type: Function, default: undefined },
		fetch: { type: Function, default: undefined },
		fiber: { type: Boolean, default: undefined },
		degrade: { type: Boolean, default: undefined },
		plugins: { type: Array, default: null },
		beforeLoad: { type: Function, default: null },
		beforeMount: { type: Function, default: null },
		afterMount: { type: Function, default: null },
		beforeUnmount: { type: Function, default: null },
		afterUnmount: { type: Function, default: null },
		activated: { type: Function, default: null },
		deactivated: { type: Function, default: null },
	},
	setup(props, { emit }) {
		const instance = getCurrentInstance()
		const init = () => {
			startApp({
				name: props.name,
				url: props.url,
				el: instance === null || instance === void 0 ? void 0 : instance.refs.wujie,
				loading: props.loading,
				alive: props.alive,
				fetch: props.fetch,
				props: props.props,
				attrs: props.attrs,
				replace: props.replace,
				sync: props.sync,
				prefix: props.prefix,
				fiber: props.fiber,
				degrade: props.degrade,
				plugins: props.plugins,
				beforeLoad: props.beforeLoad,
				beforeMount: props.beforeMount,
				afterMount: props.afterMount,
				beforeUnmount: props.beforeUnmount,
				afterUnmount: props.afterUnmount,
				activated: props.activated,
				deactivated: props.deactivated,
			})
		}
		watch([props.name, props.url], () => {
			init()
		})
		const handlerEmit = (event, ...args) => {
			emit(event, ...args)
		}
		onMounted(() => {
			bus.$onAll(handlerEmit)
			init()
		})
		onBeforeUnmount(() => {
			bus.$offAll(handlerEmit)
		})
		return () =>
			h('div', {
				style: {
					width: props.width,
					height: props.height,
				},
				ref: 'wujie',
			})
	},
})
wujie.install = (app) => {
	app.component('WujieVue', wujie)
}
export default wujie
