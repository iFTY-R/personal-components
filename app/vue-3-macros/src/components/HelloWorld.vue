<script setup lang="tsx">
import { onMounted, ref } from 'vue'
import ExportExpose from '@/components/export-expose/index.vue';
import ExportRender from '@/components/export-render/index.vue';
import Demo from '@/components/Demo.vue';

// defineProps<{ msg: string }>()

const props = withDefaults(
  defineProps<{
    msg?: string
  }>(),
  { msg: '你好' },
)

/*
const props = defineProps<{
  msg?: string
}>().withDefaults({
  msg: '你好',
})
*/

/* const foo = defineProp<string>()
const msg = defineProp<string>('msg', { default: '你好' }) */

/* export let msg: string; */


const emit = defineEmits<{
  increment: [value: number]
  decrement: []
}>()
emit('increment', 1)
emit('decrement')

const count = ref(0)

const message = ref('');

const handleCountClick = () => {
  count.value++
}

const refExportExpose: any = ref<InstanceType<typeof ExportExpose>>();

const refButton = ref();

onMounted(() => {
  // console.log(refButton.value);
  // console.log(refExportExpose.value.qux)
})

defineRender(() => {
  return (
    <div>
      <h1>{ props.msg }</h1>

      <div class="card">
        <button ref={ refButton } type="button" onClick={ () => count.value++ }>count is { count.value }</button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>


      </div>

      <div class="flex flex-col gap-4">
        <div class="border border-solid border-indigo-600">
          <div class="bg-red">
            { refExportExpose.value?.foo }
            <div class="color-cyan">{ refExportExpose.value?.fn() }</div>
          </div>
          <ExportExpose ref={ refExportExpose } />
        </div>
        <div class="border border-solid border-indigo-600">
          <ExportRender msg={ props.msg } count={ count.value } onIncrement={ handleCountClick } />
        </div>
      </div>
      <Demo
        v-model={count.value} v-model:count2={count.value}  v-model:modelValue2={message.value}
        msg={props.msg}
      />
    </div>
  )
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
