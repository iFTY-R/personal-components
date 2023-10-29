<!--
拖拽 界面交互 File
  原生 Input
  拖拽API
上传 网络通信
-->
<script setup>
import { onMounted, ref } from 'vue';

defineOptions({
  name: "DragAndDropUpload",
})

const refSelect = ref(null);
const refSelectFile = ref(null);
const refImg = ref(null);


function validateFile(file) {
  const isLt2M = file.size / 1024 / 1024 < 20;
  if (!isLt2M) {
    alert('Image must smaller than 2MB!');
    return false;
  }
  return true;
}

function showArea(type) {

}

function changeHandler() {
  if (refSelectFile.value.files.length === 0) {
    return;
  }
  const file = refSelectFile.value.files[0];

  if (!validateFile(file)) {
    return;
  }

  // 切换界面
  showArea('progress');
  // 显示预览图
  const reader = new FileReader();
  reader.onload = (e) => {
    refImg.value.src = e.target.result;
    refImg.value.style.display = 'block';
  }
  reader.readAsDataURL(file);


}

onMounted(() => {
  refSelect.value.onclick = () => {
    refSelectFile.value.click();
  }
  refSelectFile.value.onchange = changeHandler;
})

</script>

<template>
  <div>
    <div class="m-auto w-150px h-150px">
      <div ref="refSelect"
           class="flex h-full w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-6">
        <input ref="refSelectFile" type="file" class="hidden">
        <img ref="refImg" class="absolute h-full w-full" style="display: none;" alt="Preview Image">
        <div class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
