<script setup>
import { reactive, ref } from "vue";

const emit = defineEmits(['submit'])

const dialogState = ref(false);
const selectRow = ref(null);
const refVxeForm = ref(null);
const submitLoading = ref(false);
const formData = ref({
  name: '',
  token: '',
});
const formRules = reactive({
  name: [
    { required: true, message: '请输入名称' },
    { min: 1, max: 5, message: '长度在 3 到 5 个字符' }
  ],
});
const submitEvent = () => {
  emit('submit', { ...formData.value });
}
const resetEvent = () => {
  formData.value = selectRow.value || {};
}

const toggleDialog = (mode, row) => {
  dialogState.value = !!mode;
  selectRow.value = row ? row : null;
  if (row) {
    formData.value = row;
  }
}

const handleHide = () => {
  selectRow.value = null;
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
        v-model="dialogState" :title="selectRow ? '编辑&保存' : '新增&保存'" width="750"
        min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close
        mask-closable
        @hide="handleHide"
    >
      <template #default>
        <vxe-form
            ref="refVxeForm" :data="formData" :rules="formRules" title-align="right" title-width="100"
            @reset="resetEvent"
            @submit="submitEvent"
        >
          <vxe-form-item field="name" title="姓名" :span="10" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-input v-model.trim="data[property]" placeholder="请输入名称"/>
            </template>
          </vxe-form-item>
          <vxe-form-item field="token" title="Token" :span="24" :item-render="{}">
            <template #default="{ data, property }">
              <vxe-textarea v-model.trim="data[property]" placeholder="请输入 Token" :autosize="{minRows: 2, maxRows: 4}"/>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="reset">重置</vxe-button>
              <vxe-button status="primary" type="submit">提交</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<style scoped>

</style>
