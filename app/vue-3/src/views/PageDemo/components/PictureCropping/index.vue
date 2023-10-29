<!--
1. 图像预览 dataurl
2. 交互
3. 上传
File <-- blob <-- canvas

-->
<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'PictureCropping'
})

const refPreviewImg = ref(null);
const refCanvas = ref(null);

function fileChangeHandler(e) {
  const file = e.target.files[0];
  console.log(file);

  const render = new FileReader();
  render.onload = (e) => {
    refPreviewImg.value.src = e.target.result;
  }
  render.readAsDataURL(file);

}

// 获取裁剪后的 file 对象
function handleCut() {
  const cutInfo = {
    x: 2000,
    y: 2000,
    oWidth: 1000,
    oHeight: 1000,
    width: 200,
    height: 200,
  }
  const cvs = refCanvas.value;
  const ctx = cvs.getContext('2d');
  cvs.width = cutInfo.width;
  cvs.height = cutInfo.height;
  ctx.drawImage(refPreviewImg.value,
      cutInfo.x, cutInfo.y,
      cutInfo.oWidth, cutInfo.oHeight,
      0, 0,
      cutInfo.width, cutInfo.height
  );
  cvs.toBlob((blob) => {
    const file = new File([blob], 'cut.png', {
      type: 'image/png',
    });
    console.log(file);
  })

}
</script>

<template>
  <div>
    <input type="file" @change="fileChangeHandler">
    <div class="h-100px">
      <img ref="refPreviewImg" alt="" class="h-full">
    </div>
    <button @click="handleCut">点击获取裁剪数据</button>
    <canvas ref="refCanvas"></canvas>
  </div>
</template>

<style scoped>

</style>
