<script setup lang="ts">
  import { ref } from 'vue';

  const slider = ref<HTMLDivElement>();

  const startPoint = ref<number>(0);
  const isDown = ref<boolean>(false);

  const premitiveX = ref<number>(0);

  function onMouseDown(e: any) {
    isDown.value = true;
    const style = window.getComputedStyle(slider.value!);
    const { transform } = style;
    if (transform !== 'none') {
      const matrixArr = transform.replace(/[^0-9\-,]/g, '').split(',');
      console.log('matrixArr', matrixArr);
      premitiveX.value = parseInt(matrixArr[4]);
    } else {
      premitiveX.value = 0;
    }
    const { clientX } = e;
    startPoint.value = clientX;
  }

  function onMosueUp(e: any) {
    isDown.value = false;
  }

  function onMouseMove(e: any) {
    if (!isDown.value) return;
    const { clientX } = e;
    const moveDistance = clientX - startPoint.value;
    const offset = premitiveX.value + moveDistance;
    console.log('offset', offset);
    slider.value!.style.transform = `translateX(${offset}px)`;
  }
</script>

<template>
  <div @mouseup="onMosueUp" class="w-100vw h-100vh bg-blue flex items-center">
    <div class="w-500px h-200px bg-black flex ml-100px relative">
      <div
              ref="slider"
              @mousedown="onMouseDown"
              @mousemove="onMouseMove"
              class="w-100px h-full border-blue border-4 c-red"
      >
        <span class="text-50px">滑块</span>
      </div>
    </div>
  </div>
</template>
<style></style>
