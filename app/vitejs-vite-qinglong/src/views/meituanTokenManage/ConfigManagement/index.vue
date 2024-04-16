<script setup>

import { ref } from 'vue';
import FormDialog from '@/views/meituanTokenManage/ConfigManagement/FormDialog.vue';
import { useQinglongStore } from '@/stores/qinglong.js';
import VXETable from 'vxe-table';

const qinglongStore = useQinglongStore();

defineOptions({
  name: 'ConfigManagement',
})

const refFormDialog = ref(null);
const handleShowConfigDialog = () => {
  refFormDialog.value.toggleDialog(true);
}

const handleConfigChange = () => {
  VXETable.modal.message({
    message: '即将刷新页面，请等待！',
    status: 'warning',
  })
  setTimeout(() => {
    location.reload();
  }, 3000)
}
</script>

<template>
  <div>
    <div class="flex items-center gap-5">
      <vxe-button status="primary" content="主机配置" @click="handleShowConfigDialog"/>
      <a-tag bordered color="orangered">
        {{ qinglongStore.config.baseUrl }}
      </a-tag>
    </div>
    <FormDialog ref="refFormDialog" @submit="handleConfigChange"/>
  </div>
</template>

<style scoped>

</style>
