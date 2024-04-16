<script setup>
import { nextTick, ref } from "vue";
import { getTaskById, getTaskLogById } from "@/api/qinglong.js";
import CronParser from "cron-parser";

const emit = defineEmits(['onSuccess']);

const dialogState = ref(false);
const loading = ref(false);
const info = ref('');

const taskId = ref('');

const taskInfo = ref({});
const toggleDialog = async (mode, id) => {
  dialogState.value = !!mode;
  if (id) {
    taskId.value = id;

    getLogByTaskId(id);
  }
}

function getLogByTaskId(id) {
  if (!id) return;
  loading.value = true;
  const dooooooo = async () => {
    info.value = await getTaskLogById(id);
    refDiv.value && handleScrollBottom(refDiv.value);

    taskInfo.value = await getTaskById(id);
    console.log(taskInfo.value);
    if (taskInfo.value.status) {
      const accountsInfo = getAccountInfoByLog(info.value);

      taskInfo.value.nextRunTime = getCronNextExecutionTime(taskInfo.value.schedule)

      emit('onSuccess', accountsInfo, taskInfo.value);
      loading.value = false;
      __intervalNum && clearInterval(__intervalNum);
    }
  }

  let __intervalNum = null;
  try {
    dooooooo();
    __intervalNum = setInterval(() => {
      dooooooo();
    }, 1000);
  } catch (e) {
    __intervalNum && clearInterval(__intervalNum);
  }
}

const refDiv = ref(null);

const handleHide = () => {
  info.value = '';
  taskId.value = '';
  taskInfo.value = {};
}

defineExpose({
  toggleDialog,
  getLogByTaskId,
})

function getCronNextExecutionTime(cronExpression) {
  try {
    const interval = CronParser.parseExpression(cronExpression);
    return interval.next().toDate();
  } catch (error) {
    console.error('无法解析Cron表达式：', cronExpression, error.message);
  }
}

function getAccountInfoByLog(inputString) {
  const accountRegex = /-{3,}\s*账号\[(\d+)\]\s*-{3,}\s*([\s\S]+?)(?=(?:-{3,}|$))/g;
  let accountMatches;
  const accounts = [];

  while ((accountMatches = accountRegex.exec(inputString)) !== null) {
    const accountNumber = accountMatches[1];
    const accountInfo = accountMatches[2].trim();

    if (accountInfo.includes("登录成功")) {
      // 成功的账号
      // console.log(`账号[${ accountNumber }] 登录成功`);

      // 使用正则表达式提取手机号
      const phoneNumberMatch = /\[([\d]{11})\]/.exec(accountInfo);
      const phoneNumber = phoneNumberMatch ? phoneNumberMatch[1] : null;

      // console.log(`账号[${ accountNumber }] 手机号: ${ phoneNumber }`);

      // 在这里可以处理成功账号的逻辑，包括存储手机号等
      accounts.push({ accountNumber, accountInfo, phoneNumber });
    } else {
      // 失败的账号
      // console.log(`账号[${ accountNumber }] 获取账号信息失败, ck可能失效`);

      // 在这里可以处理失败账号的逻辑
      accounts.push({ accountNumber, accountInfo });
    }
  }

  // accounts 数组包含了所有账号的信息，其中的每个对象有账号序号、账号信息和手机号
  // console.log(accounts);
  return accounts;
}


// 滚动到顶部
function handleScrollTop(elem) {
  nextTick(() => {
    elem.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 滚动到底部
function handleScrollBottom(elem) {
  nextTick(() => {
    elem.scrollTo({ top: elem.scrollHeight, behavior: 'smooth' });
  });
}

</script>

<template>
  <div>
    <vxe-modal
      v-model="dialogState" title="任务日志" width="750"
      :position="{top: '3%'}"
      min-width="600" min-height="300" resize destroy-on-close
      mask-closable
      @hide="handleHide"
    >
      <template #title>
        <div>任务日志
          <vxe-button v-if="loading" :loading="loading" type="text" icon="vxe-icon-refresh"/>
        </div>
      </template>
      <template #default>
        <div ref="refDiv" class="max-h-[80vh] overflow-y-auto">
          <div> {{ info }}</div>
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<style scoped>

</style>
