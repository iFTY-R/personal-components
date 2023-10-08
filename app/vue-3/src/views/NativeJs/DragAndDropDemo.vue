<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

const slider = ref();

const startPoint = ref(0);
const isDown = ref(false);

const premitiveX = ref(0);

function onMouseDown(e) {
  isDown.value = true;
  const style = window.getComputedStyle(slider.value);
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

function onMouseUp(e) {
  isDown.value = false;
}

function onMouseMove(e) {
  if (!isDown.value) return;
  const { clientX } = e;
  const moveDistance = clientX - startPoint.value;
  const offset = premitiveX.value + moveDistance;
  console.log('offset', offset);
  slider.value.style.transform = `translateX(${ offset }px)`;
}

onMounted(() => {
  document.body.addEventListener("mouseup", onMouseUp);
})
onBeforeMount(() => {
  document.body.removeEventListener("mousemove", onMouseMove);
})
</script>

<template>
  <div class="flex items-center">
    <div class="w-500px h-200px bg-black flex relative">
      <div
          ref="slider"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          class="w-100px h-full bg-blue border-blue border-4 c-red cursor-pointer select-none"
      >
        <span class="text-50px">滑块</span>
      </div>
    </div>
  </div>
</template>
<style></style>
