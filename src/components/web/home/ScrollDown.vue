<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const text = document.querySelector('.text p')

  text.innerHTML = text.innerText
    .split('')
    .map((char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`)
    .join('')
})
</script>

<template>
  <div class="scroll-down bg-blue-500">
    <div class="circle">
      <div class="text">
        <p>
          <template v-for="n in 5" :key="n">Scroll down&nbsp;</template>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --radius: 35vmin;
  --frame-size: calc(var(--radius) / 3);
  --d-outer: calc(var(--radius) * 2);
}

.scroll-down {
  position: absolute;
  top: 100%;
  right: 4rem;
  transform: translateY(-50%);
  height: 10rem;
  aspect-ratio: 1;

  .circle {
    position: relative;
    width: var(--d-outer);
    height: var(--d-outer);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotateText 10s linear infinite;
  }
  @keyframes rotateText {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .text p span {
    position: absolute;
    left: 50%;
    font-size: 1.2em;
    transform-origin: 0 var(--radius);
  }
}
</style>
