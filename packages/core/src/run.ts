import { interval } from 'rxjs'

console.log('core start')
interval(2000).subscribe((res) => {
  console.log('core', res)
})
