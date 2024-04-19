<script setup lang="tsx">
defineOptions({
  name: 'ExportExpose',
})

export const foo: string = 'foo',
  bar = 10
export let baz: string | undefined
export const { a, b, c } = { a: 1, b: 2, c: 3 }

export function fn() {
  return a + b + c;
}

export var qux = fn()

export class A {
}

defineRender(() => {
  return (
    <div>
      <h1>export-expose</h1>
    </div>
  )
})
</script>

<style scoped>

</style>
