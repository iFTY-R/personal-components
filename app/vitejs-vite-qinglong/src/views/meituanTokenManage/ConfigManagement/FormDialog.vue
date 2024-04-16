<script setup>
import { isReactive, reactive, ref, toRaw } from "vue";
import { useQinglongStore } from '@/stores/qinglong.js';
import VXETable from 'vxe-table';


const qinglongStore = useQinglongStore();

const emit = defineEmits(['submit'])

const dialogState = ref(false);
const refVxeForm = ref(null);
const submitLoading = ref(false);
const formData = ref({
  baseUrl: '',
  clientId: '',
  clientSecret: '',
  taskMeiTuanId: '',
});
const formRules = reactive({
  baseUrl: [
    { required: true, message: '请输入青龙面板地址' },
    { min: 1, message: '长度需大于 1 个字符' }
  ],
  clientId: [
    { required: true, message: '请输入应用 Client ID' },
    { min: 1, message: '长度需大于 1 个字符' }
  ],
  clientSecret: [
    { required: true, message: '请输入应用 Client Secret' },
    { min: 1, message: '长度需大于 1 个字符' }
  ],
  taskMeiTuanId: [
    { required: true, message: '请输入 Task ID' },
    { min: 1, message: '长度需大于 1 个字符' }
  ],
});
const submitEvent = () => {
  qinglongStore.config = { ...formData.value };
  // 配置成功
  VXETable.modal.message({
    message: '配置成功',
    status: 'success',
  })
  dialogState.value = false;
  emit('submit', { ...formData.value });
}
const resetEvent = () => {
  formData.value = {};
}

const toggleDialog = (mode) => {
  dialogState.value = !!mode;
  if (mode) {
    formData.value = { ...qinglongStore.config };
  }
}

const handleHide = () => {
  refVxeForm.value.reset();
  formData.value = {};
}

defineExpose({
  toggleDialog,
})

</script>

<template>
  <div>
    <vxe-modal
      v-model="dialogState" title="主机配置" width="750"
      min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close
      mask-closable
      @hide="handleHide"
    >
      <template #default>
        <vxe-form
          ref="refVxeForm" :data="formData" :rules="formRules" title-align="right" title-width="120"
          @reset="resetEvent"
          @submit="submitEvent"
        >
          <vxe-form-item field="baseUrl" title="青龙地址" :span="24" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-input v-model.trim="data[property]" placeholder="请输入青龙面板地址"/>
            </template>
          </vxe-form-item>
          <vxe-form-item field="clientId" title="Client ID" :span="24" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-input v-model.trim="data[property]" placeholder="请输入应用 Client ID"/>
            </template>
          </vxe-form-item>
          <vxe-form-item field="clientSecret" title="Client Secret" :span="24" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-input v-model.trim="data[property]" placeholder="请输入应用 Client Secret"/>
            </template>
          </vxe-form-item>
          <vxe-form-item field="taskMeiTuanId" title="Task ID" :span="24" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-input v-model.trim="data[property]" placeholder="请输入 Task ID"/>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="reset">重置</vxe-button>
              <vxe-button status="primary" type="submit">保存</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<style scoped>

</style>
