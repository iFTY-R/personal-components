import type { PropType } from 'vue'
declare const wujie: import('vue').DefineComponent<
	{
		width: {
			type: StringConstructor
			default: string
		}
		height: {
			type: StringConstructor
			default: string
		}
		name: {
			type: StringConstructor
			default: string
			required: true
		}
		loading: {
			type: {
				new (): HTMLElement
				prototype: HTMLElement
			}
			default: undefined
		}
		url: {
			type: StringConstructor
			default: string
			required: true
		}
		sync: {
			type: BooleanConstructor
			default: undefined
		}
		prefix: {
			type: ObjectConstructor
			default: undefined
		}
		alive: {
			type: BooleanConstructor
			default: undefined
		}
		props: {
			type: ObjectConstructor
			default: undefined
		}
		attrs: {
			type: ObjectConstructor
			default: undefined
		}
		replace: {
			type: PropType<((codeText: string) => string) | undefined>
			default: undefined
		}
		fetch: {
			type: PropType<((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) | undefined>
			default: undefined
		}
		fiber: {
			type: BooleanConstructor
			default: undefined
		}
		degrade: {
			type: BooleanConstructor
			default: undefined
		}
		plugins: {
			type: PropType<import('wujie').plugin[]>
			default: null
		}
		beforeLoad: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		beforeMount: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		afterMount: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		beforeUnmount: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		afterUnmount: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		activated: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
		deactivated: {
			type: PropType<((appWindow: Window) => any) | undefined>
			default: null
		}
	},
	() => import('vue').VNode<
		import('vue').RendererNode,
		import('vue').RendererElement,
		{
			[key: string]: any
		}
	>,
	unknown,
	{},
	{},
	import('vue').ComponentOptionsMixin,
	import('vue').ComponentOptionsMixin,
	{},
	string,
	import('vue').PublicProps,
	Readonly<
		import('vue').ExtractPropTypes<{
			width: {
				type: StringConstructor
				default: string
			}
			height: {
				type: StringConstructor
				default: string
			}
			name: {
				type: StringConstructor
				default: string
				required: true
			}
			loading: {
				type: {
					new (): HTMLElement
					prototype: HTMLElement
				}
				default: undefined
			}
			url: {
				type: StringConstructor
				default: string
				required: true
			}
			sync: {
				type: BooleanConstructor
				default: undefined
			}
			prefix: {
				type: ObjectConstructor
				default: undefined
			}
			alive: {
				type: BooleanConstructor
				default: undefined
			}
			props: {
				type: ObjectConstructor
				default: undefined
			}
			attrs: {
				type: ObjectConstructor
				default: undefined
			}
			replace: {
				type: PropType<((codeText: string) => string) | undefined>
				default: undefined
			}
			fetch: {
				type: PropType<((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) | undefined>
				default: undefined
			}
			fiber: {
				type: BooleanConstructor
				default: undefined
			}
			degrade: {
				type: BooleanConstructor
				default: undefined
			}
			plugins: {
				type: PropType<import('wujie').plugin[]>
				default: null
			}
			beforeLoad: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			beforeMount: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			afterMount: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			beforeUnmount: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			afterUnmount: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			activated: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
			deactivated: {
				type: PropType<((appWindow: Window) => any) | undefined>
				default: null
			}
		}>
	>,
	{
		props: Record<string, any>
		replace: ((codeText: string) => string) | undefined
		fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) | undefined
		plugins: import('wujie').plugin[]
		beforeLoad: ((appWindow: Window) => any) | undefined
		beforeMount: ((appWindow: Window) => any) | undefined
		afterMount: ((appWindow: Window) => any) | undefined
		beforeUnmount: ((appWindow: Window) => any) | undefined
		afterUnmount: ((appWindow: Window) => any) | undefined
		activated: ((appWindow: Window) => any) | undefined
		deactivated: ((appWindow: Window) => any) | undefined
		width: string
		height: string
		name: string
		loading: HTMLElement
		url: string
		sync: boolean
		prefix: Record<string, any>
		alive: boolean
		attrs: Record<string, any>
		fiber: boolean
		degrade: boolean
	},
	{}
>
export default wujie
