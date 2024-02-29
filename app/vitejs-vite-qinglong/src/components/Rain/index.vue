<template>
  <canvas ref="rainCanvas"/>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';

const rainCanvas = ref(null);

defineOptions({
  name: 'Rain',
})

onMounted(() => {
  const canvas = rainCanvas.value;
  const ctx = canvas.getContext('2d');
  
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  
  const resizeListener = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeListener);
  
  const particles = [];
  const particleCount = 500;
  
  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = Math.random() * 5 + 2;
      this.length = Math.random() * 20 + 10;
      this.opacity = Math.random() * 0.5 + 0.5;
    }
    
    update() {
      this.y += this.speed;
      if (this.y > h) {
        this.y = 0 - this.length;
        this.speed = Math.random() * 5 + 2;
      }
    }
    
    draw() {
      const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(1, `rgba(255, 255, 255, ${ this.opacity })`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + this.length);
      ctx.stroke();
    }
  }
  
  function init() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  
  init();
  animate();
  
  onUnmounted(() => {
    window.removeEventListener('resize', resizeListener);
  });
});
</script>

<style scoped>
canvas {
  display: block;
}

body {
  margin: 0;
  overflow: hidden;
}
</style>
