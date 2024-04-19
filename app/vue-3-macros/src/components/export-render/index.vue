<script setup lang="tsx">
defineOptions({
  name: 'ExportRender',
})

const count = defineProp<number>();
const msg = defineProp<string>();

const increment = defineEmit('increment')

const handleCountClick = () => {
  increment();
}

export default () => (<div>
  <h1>export-render</h1>
  <div>ok</div>
  <div>{ msg.value }</div>
  <div onClick={ handleCountClick }>{ count.value }</div>
</div>)
</script>

<style scoped>

</style>
