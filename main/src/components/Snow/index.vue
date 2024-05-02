<template>
  <div>
    <canvas ref="snowCanvas" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineOptions({
  name: 'Snow',
})

const snowCanvas = ref(null);

onMounted(() => {
  const canvas = snowCanvas.value;
  const ctx = canvas.getContext("2d");
  
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  const resizeCanvas = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resizeCanvas);
  
  const snowflakes = [];
  const snowCount = 120;
  
  const snowflakeImage = new Image();
  snowflakeImage.src = "/images/snow.png"; // 雪花图标的路径
  
  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = Math.random() * 1 + 0.5;
      // this.angle = Math.random() * Math.PI * 2;
      this.image = snowflakeImage;
    }
    
    update() {
      this.y += this.speed;
      // this.x += Math.sin(this.angle) * 1
      if (this.y > h) {
        this.y = 0;
        this.x = Math.random() * w;
        // this.speed = Math.random() * 1 + 0.5;
        // this.angle = Math.random() * Math.PI * 2;
      }
    }
    
    draw() {
      ctx.drawImage(
          this.image,
          this.x - this.image.width / 3,
          this.y - this.image.height / 3
      );
    }
  }
  
  function init() {
    for (let i = 0; i < snowCount; i++) {
      snowflakes.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, w, h);
    snowflakes.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  
  snowflakeImage.onload = function () {
    init();
    animate();
  };
  snowflakeImage.onerror = function () {
    console.error("图像加载失败");
  };
  
  onUnmounted(() => {
    window.removeEventListener("resize", resizeCanvas);
  });
});
</script>
