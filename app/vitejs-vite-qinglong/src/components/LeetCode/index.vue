<script setup>
// 刷新页面
import { onMounted, ref } from "vue";

defineOptions({
  name: 'LeetCode',
})

// 设置颜色
var colors = ['#05FF00', '#00BFFF', '#FF4500', '#FFA500', '#C202C2'];
var lightBackgroundColors = ['#013600', '#002E3D', '#3E1100', '#342100', '#3C003C']
var colorIndex = getColorIndex();

function getColorIndex() {
  return Math.floor(Math.random() * colors.length);
}

// 设置字母
var letters = 'LeetCode LeetCode LeetCode LeetCode LeetCode LeetCode LeetCode';
letters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
letters = letters.split('');

const myCanvas = ref(null);
onMounted(() => {
  // 初始化画布
  var canvas = myCanvas.value,
      ctx = canvas.getContext('2d');

  // 设置画布的宽度和高度
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  // 设置列数
  var fontSize = 10,
      columns = canvas.width / fontSize;

  // 设置下落位置
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // 绘制函数
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colors[colorIndex];
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  // 循环动画
  setInterval(draw, 30);

  setOtherTheme();
})

function setOtherTheme() {
  var light = document.querySelector('.light');
  light.style.background = colors[colorIndex];

  // 设置呼吸灯的背景颜色
  var lightWrapper = document.querySelector('.light-wrapper');
  lightWrapper.style.backgroundColor = lightBackgroundColors[colorIndex];
}

function refreshPage() {
  colorIndex = getColorIndex();
  setOtherTheme();
}
</script>

<template>
  <div class="w-full h-full">

    <div class="module-content">
      <div class="nav">
        <svg width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M18.402 24.0713C19.0817 23.3498 20.1821 23.3516 20.8597 24.0755C21.5373 24.7994 21.5355 25.9712 20.8557 26.6928L17.8372 29.8969C15.0524 32.853 10.5114 32.8959 7.67959 29.9965C7.66322 29.9798 6.4023 28.6655 2.24264 24.3294C-0.524687 21.4449 -0.800379 16.8292 1.80375 13.8651L6.65911 8.33841C9.24366 5.39632 14.0079 5.07477 16.963 7.61522L21.3728 11.4065C22.1196 12.0485 22.2363 13.2137 21.6334 14.009C21.0304 14.8043 19.9363 14.9285 19.1895 14.2865L14.7797 10.4952C13.2342 9.1666 10.5308 9.34906 9.19728 10.8671L4.34185 16.3939C3.0741 17.8368 3.21294 20.1614 4.67393 21.6843C7.72846 24.8684 10.0825 27.3222 10.0853 27.325C11.5575 28.8324 13.938 28.8099 15.3835 27.2755L18.402 24.0713Z"
              fill="#FFA116"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.0689 20.8649C10.1091 20.8649 9.33105 20.0363 9.33105 19.0142C9.33105 17.9921 10.1091 17.1635 11.0689 17.1635H23.8857C24.8455 17.1635 25.6235 17.9921 25.6235 19.0142C25.6235 20.0363 24.8455 20.8649 23.8857 20.8649H11.0689Z"
                fill="#B3B3B3"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.4695 0.586335C14.1252 -0.160054 15.225 -0.199051 15.9258 0.499232C16.6267 1.19751 16.6634 2.36865 16.0076 3.11504L4.34191 16.3939C3.07411 17.8368 3.21295 20.1614 4.67384 21.6843L10.0613 27.3003C10.7471 28.0153 10.7589 29.187 10.0875 29.9174C9.41608 30.6478 8.31579 30.6603 7.62991 29.9453L2.24247 24.3293C-0.524689 21.4446 -0.80038 16.829 1.80386 13.8651L13.4695 0.586335Z"
                fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M36.0845 24.4286C36.7611 22.5048 37.3071 20.1941 37.6663 17.4693C37.8591 16.0071 38.0724 13.8629 38.3067 11.0332H46.192C46.2024 11.0332 46.2128 11.0334 46.2231 11.0338C46.6693 11.0521 47.0171 11.4514 46.9999 11.9257L46.5231 25.1043C46.5064 25.5658 46.1497 25.9307 45.7152 25.9307H43.5288C42.9334 25.9307 42.4508 26.4438 42.4508 27.0767C42.4508 27.7096 42.9334 28.2227 43.5288 28.2227H46.4932C47.6839 28.2227 48.6492 27.1965 48.6492 25.9307L49.1882 11.0332C49.1882 9.76742 48.2229 8.74129 47.0322 8.74129H38.4895C38.5978 7.33629 38.7103 5.79715 38.8269 4.12356C38.8709 3.49239 38.4252 2.94283 37.8315 2.89607C37.2378 2.84931 36.7208 3.32307 36.6768 3.95424C36.5553 5.69733 36.4385 7.29314 36.3262 8.74129H32.7489C32.1535 8.74129 31.6709 9.25435 31.6709 9.88725C31.6709 10.5201 32.1535 11.0332 32.7489 11.0332H36.1423C35.9178 13.7245 35.714 15.765 35.5312 17.1512C35.1936 19.7123 34.686 21.8605 34.0651 23.6259C33.7397 24.551 33.406 25.3059 33.0845 25.9018C32.9762 26.1025 32.8787 26.2675 32.7944 26.3981C32.75 26.4669 32.7241 26.5039 32.719 26.5105C32.3448 27.0027 32.4167 27.7242 32.8797 28.1221C33.3427 28.52 34.0215 28.4435 34.3957 27.9513C34.5223 27.7848 34.7157 27.4851 34.9547 27.0421C35.3345 26.3381 35.7181 25.4703 36.0845 24.4286ZM64.28 24.2019V10.3416H73.9674C74.8706 10.3416 75.5989 11.1089 75.5989 12.0502V22.9576C75.5989 23.899 74.8706 24.6662 73.9674 24.6662H70.8516C69.9484 24.6662 69.2201 23.899 69.2201 22.9576V13.7795C69.2201 13.1466 68.7375 12.6336 68.1422 12.6336C67.5468 12.6336 67.0642 13.1466 67.0642 13.7795V22.9576C67.0642 25.1694 68.762 26.9581 70.8516 26.9581H73.9674C76.057 26.9581 77.7548 25.1694 77.7548 22.9576V12.0502C77.7548 9.83844 76.057 8.04972 73.9674 8.04972H64.28V4.61183C64.28 3.97893 63.7974 3.46586 63.202 3.46586C62.6067 3.46586 62.124 3.97893 62.124 4.61183V8.04972H58.3511C57.7557 8.04972 57.2731 8.56278 57.2731 9.19568C57.2731 9.82858 57.7557 10.3416 58.3511 10.3416H62.124V17.1864L58.4897 18.7318C57.9369 18.9669 57.6681 19.6338 57.8892 20.2214C58.1103 20.8091 58.7376 21.0949 59.2904 20.8598L62.124 19.6549V24.2019C62.124 25.7171 60.9241 26.9581 59.4291 26.9581C58.8337 26.9581 58.3511 27.4712 58.3511 28.1041C58.3511 28.737 58.8337 29.25 59.4291 29.25C62.1018 29.25 64.28 26.9972 64.28 24.2019Z"
                fill="white"/>
        </svg>


      </div>
      <div class="content-wrapper">

        <div class="hero-wrapper">
          <div class="title-wrapper">
            <h1 class="title">系统正在维护中</h1>
            <div class="light-wrapper">
              <div class="light"></div>
            </div>
          </div>

          <p class="subtitle">
                    <span>
                        我们正在码不停题中，很快回来，请耐心等待。
                    </span>
          </p>
        </div>

        <div class="button-wrapper">
          <button class="round-button" @click="refreshPage">更换主题</button>
        </div>

      </div>
      <div class="copyright">
        <p>© 2023 领扣网络（上海）有限公司</p>
      </div>
    </div>
    <canvas ref="myCanvas" id="myCanvas"></canvas>
  </div>
</template>

<style>
:root {
  --background-color: #00000074;
  --primary-text-color: #F5F5F5;
  --secondary-text-color: rgba(255, 255, 255, 0.60);
  --reverse-text-color: #000000;
}
</style>
<style scoped>
.module-content {
  //background-color: var(--background-color);
  display: flex;
  width: 100vw;
  height: 100vh;

  padding-top: 64px;
  padding-bottom: 64px;

  flex-direction: column;
  justify-content: space-between;

  position: relative;
}

.nav {
  width: 100vw;
  color: white;
  text-align: start;
  padding-left: 10vw;

}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 32px;
  padding-left: 10vw;
}

.title {
  color: var(--primary-text-color);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
}

.subtitle {
  color: var(--secondary-text-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  text-align: center;
}

span {
  vertical-align: middle;
}

.hero-wrapper {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 8px;
  padding-right: 12px;
}

.title-wrapper {
  display: flex;
  gap: 4px;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.round-button {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  border: none;
  border-radius: 13px;
  background-color: rgb(29, 29, 29);
  transition: background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);

  //color: var(--reverse-text-color);
  cursor: pointer;
  color: var(--primary-text-color);

}

.round-button:hover {
  background-color: #333333;
}

.round-button:active {
  background-color: #3e3e3e;
}

.text-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  border-radius: 24px;
  background-color: transparent;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;

  cursor: pointer;
}

.copyright {
  width: 100%;
  color: var(--primary-text-color);
  text-align: start;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  padding-left: 10vw;

}

/*模拟设备重启呼吸灯*/

.light {
  width: 70%;
  height: 70%;
  background: radial-gradient(circle, rgb(13, 255, 0) 20%, #00ff6e 80%, rgba(4, 255, 0, 0.2) 100%);
  border-radius: 50%;
  animation: breathing 0.5s infinite;
}

.light-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: #006703;
  width: 20px;
  height: 20px;
}

@keyframes breathing {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

#myCanvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  display: block;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 26px;
  }

  .subtitle {
    font-size: 14px;
  }

  .light-wrapper {
    width: 12px;
    height: 12px;
  }
}

</style>
