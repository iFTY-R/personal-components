import type { plugin } from 'wujie'
type lifecycle = (appWindow: Window) => any
interface Props {
	name: string
	url: string
	html?: string
	loading?: HTMLElement
	sync?: boolean
	prefix?: {
		[key: string]: string
	}
	alive?: boolean
	props?: {
		[key: string]: any
	}
	fiber?: boolean
	degrade?: boolean
	attrs?: {
		[key: string]: any
	}
	degradeAttrs?: {
		[key: string]: any
	}
	replace?: (codeText: string) => string
	fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
	plugins: Array<plugin>
	beforeLoad?: lifecycle
	beforeMount?: lifecycle
	afterMount?: lifecycle
	beforeUnmount?: lifecycle
	afterUnmount?: lifecycle
	activated?: lifecycle
	deactivated?: lifecycle
}
export { Props }
