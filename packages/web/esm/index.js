import { coreAdd } from '@mono/core'
import { isString } from '@mono/shared'
export const webAdd = (a, b) => coreAdd(a, b)
export const webIsString = (param) => isString(param)
