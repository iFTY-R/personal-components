<script setup lang="tsx">
import { ref } from "vue";

defineOptions({
  name: 'Demo',
})

defineProps<{
  msg: string
}>()

const count = ref(0);

let modelCount = defineModel<number>({ default: 0 })


const { modelValue2, count2 } = defineModels<{
  modelValue2: string
  count2: ModelOptions<
    number,
    { defaultValue: 10; deep: true; passive: true }
  >
}>()

const CustomInput = ({ msg }: { msg: string }) => (<input type="text" value={ msg } />)

</script>

<template>
  <div class="flex flex-col gap-4 mt-20px border border-solid border-amber-600 p-10px">
    <div class="border border-solid border-indigo-600">
      <div>demo：{{ count }}</div>
      <input type="number" $="count">
    </div>
    <div class="border border-solid border-indigo-600">
      <div>defineModel demo：{{ modelCount }}</div>
      <input type="number" $="modelCount">
    </div>
    <div class="border border-solid border-indigo-600">
      <div>defineModels demo count2：{{ count2 }}</div>
      <input type="number" $="count2">
      <div>defineModels demo modelValue：{{ modelValue2 }}</div>
      <input type="text" $="modelValue2">
    </div>
    <div class="border border-solid border-indigo-600">
      <div>shortBind demo</div>
      <input type="text" :value="msg">
      <CustomInput :msg />
    </div>
  </div>
</template>

<style scoped>

</style>
