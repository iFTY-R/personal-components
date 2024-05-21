<script setup>
import { computed, reactive, ref } from 'vue';
import { getMeituanTokens, runMeituanTask, updateEnv } from "@/api/qinglong.js";
import FormDialog from "@/views/meituanTokenManage/FormDialog.vue";
import VXETable from "vxe-table";
import TaskLogDialog from "@/views/meituanTokenManage/TaskLogDialog.vue";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useTimestamp } from "@vueuse/core";
import { useQinglongStore } from '@/stores/qinglong.js';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const qinglongStore = useQinglongStore();

const refVxeGrid = ref();

const gridOptions = reactive({
  border: true,
  keepSource: true,
  showOverflow: true,
  //  height: 530,
  loading: false,
  columnConfig: {
    resizable: true,
  },
  toolbarConfig: {
    enabled: true,
    refresh: true,
    custom: true,
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  pagerConfig: {
    enabled: false,
    total: 0,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100, 200, 500],
  },
  editConfig: {
    trigger: 'manual',
    mode: 'row',
    showStatus: true,
  },
  columns: [
    { type: 'seq', width: 60 },
    {
      field: 'name',
      title: '姓名',
      editRender: { autofocus: '.vxe-input--inner' },
      slots: { edit: 'name_edit' },
      width: 150,
    },
    {
      field: 'token',
      title: 'Token',
      editRender: { autofocus: '.vxe-input--inner' },
      slots: { edit: 'token_edit' },
    },
    {
      field: 'token',
      title: '手机号码',
      slots: { default: 'token_default' },
      width: 110,
    },
    { title: '操作', width: 100, slots: { default: 'operate' } },
  ],
  proxyConfig: {
    ajax: {
      // eslint-disable-next-line no-unused-vars
      query({ page, sort, sorts, filters, form }) {
        refTaskLogDialog.value.getLogByTaskId(qinglongStore.config.taskMeiTuanId);
        return getMeituanTokens();
      },
    },
  },
});

const gridEvents = {};

const editRowEvent = (row) => {
  refFormDialog.value.toggleDialog(true, { ...row });
};

const handleRowAdd = () => {
  refFormDialog.value.toggleDialog(true);
}

const refFormDialog = ref(null);

const handleFormSuccess = () => {
  refVxeGrid.value.commitProxy('query');
}
const handleFormSubmit = (row) => {
  const { tableData } = refVxeGrid.value.getTableData();

  // const temp = tableData.filter(v => v.name === row.name);
  // if (temp.length > 1) {
  //   VXETable.modal.message({ content: '名字重复', status: 'error' });
  //   return;
  // }

  console.log(row);

  const data = tableData.reduce((pre, v) => {

    let name = v.name;
    let token = v.token;
    if (row.id === v.id) {
      name = row.name;
      token = row.token;
    }

    pre.id = v.metaData.id;
    pre.name = v.metaData.name;
    if (!pre.remarks) {
      pre.remarks = name;
      pre.value = token;
    } else {
      pre.remarks += `，${ name }`;
      pre.value += `\n${ token }`;
    }
    return pre;
  }, {})

  if (!row.id) {
    data.remarks += `，${ row.name }`;
    data.value += `\n${ row.token }`;
  }

  updateEnv(data).then(() => {
    refFormDialog.value.toggleDialog(false);
    VXETable.modal.message({ content: '保存成功', status: 'success' });
    handleFormSuccess();
  })
  console.log(tableData, data);
}

const loading = ref({
  runTask: false,
});
const handleRunTask = () => {
  runMeituanTask().then(() => {
    loading.value.runTask = true;
    VXETable.modal.message({ content: '运行成功', status: 'success' });
    handleGetTaskLog();
  });
}

const taskInfo = ref({});
const accountsInfo = ref([]);
const handleRunTaskSuccess = (data, __taskInfo) => {
  accountsInfo.value = data;
  loading.value.runTask = false;
  taskInfo.value = __taskInfo;
}

function getPhoneById(row) {
  const item = accountsInfo.value.find(v => +v.accountNumber === +row.id);
  row.isValid = item && item.phoneNumber && item.phoneNumber.length > 0;
  return item ? item.phoneNumber : '';
}


const refTaskLogDialog = ref(null);
const handleGetTaskLog = () => {
  refTaskLogDialog.value.toggleDialog(true, qinglongStore.config.taskMeiTuanId);
}

const { timestamp } = useTimestamp({ controls: true })
const currentTimeStr = computed(() => dayjs(timestamp.value).format('YYYY-MM-DD HH:mm:ss'));
</script>

<template>
  <div class="">
    <div>
      <div class="">
        <template v-if="taskInfo.last_execution_time">
          <span>最后运行时间：</span>
          <a-tag bordered color="green">
            {{ dayjs(+`${ taskInfo.last_execution_time }000`).format('YYYY-MM-DD HH:mm:ss') }}
          </a-tag>
          ，
        </template>
        <span> 下次运行时间：</span>
        <a-tag bordered color="pinkpurple">
          {{ dayjs(taskInfo.nextRunTime).format('YYYY-MM-DD HH:mm:ss') }}
        </a-tag>
        <span> ，当前时间：</span>
        <a-tag>{{ currentTimeStr }}</a-tag>
      </div>
      <vxe-grid
        ref="refVxeGrid"
        v-bind="gridOptions"
        v-on="gridEvents"
      >
        <template #toolbar_buttons>
          <vxe-button content="新增" @click="handleRowAdd"/>
          <vxe-button status="primary" :loading="loading.runTask" content="运行任务" @click="handleRunTask"/>
          <vxe-button status="warning" content="查看日志" @click="handleGetTaskLog"/>
        </template>
        <template #operate="{ row }">
          <vxe-button content="编辑" @click="editRowEvent(row)"></vxe-button>
        </template>

        <template #name_edit="{ row, column }">
          <vxe-input v-model="row[column.field]"></vxe-input>
        </template>
        <template #token_edit="{ row, column }">
          <vxe-input v-model="row[column.field]"></vxe-input>
        </template>

        <template #token_default="{row, column}">
          <template v-if="getPhoneById(row)">
            <a-badge status="success" :text="getPhoneById(row)"/>
          </template>
          <template v-else>
            <a-badge status="danger" text="失效"/>
          </template>
        </template>
      </vxe-grid>
    </div>

    <FormDialog ref="refFormDialog" @submit="handleFormSubmit"/>
    <TaskLogDialog ref="refTaskLogDialog" @onSuccess="handleRunTaskSuccess"/>
  </div>
</template>
