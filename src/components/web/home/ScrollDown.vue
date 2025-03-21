<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const text = document.querySelector('.text')

  if (text) {
    text.innerHTML = text.innerText
      .split('')
      .map((char, i) => `<span style="transform:rotate(${i * 6}deg)">${char}</span>`)
      .join('')

    let lastScrollTop = 0
    let currentRotation = 0
    let rotationMultiplier = 1

    // Rotate text by default
    setInterval(() => {
      text.style.transform = `rotate(${currentRotation}deg)`
      currentRotation += 0.3 * rotationMultiplier
    }, 1000 / 60)

    window.addEventListener('scroll', () => {
      increaseRotation()
    })

    text.addEventListener('click', () => {
      rotationMultiplier += 50

      setTimeout(() => {
        rotationMultiplier = 1
      }, 100)
    })

    let interval = null

    text.addEventListener('mousedown', () => {
      touchOrMouseDown()
    })

    text.addEventListener('touchstart', () => {
      touchOrMouseDown()
    })

    text.addEventListener('mouseup', () => {
      resetRotation()
    })

    text.addEventListener('touchend', () => {
      resetRotation()
    })

    text.addEventListener('mouseleave', () => {
      resetRotation()
    })

    function touchOrMouseDown() {
      interval = setInterval(() => {
        if (rotationMultiplier > 50) return
        rotationMultiplier += 3
      }, 50)
    }

    function resetRotation() {
      clearInterval(interval)
      rotationMultiplier = 1
    }

    function increaseRotation() {
      let currentScroll = window.scrollY

      if (currentScroll > lastScrollTop) {
        currentRotation += 1 * rotationMultiplier
        text.style.transform = `rotate(${currentRotation}deg)`
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
    }
  }
})
</script>

<template>
  <div class="scroll-down hover-element">
    <div class="ring"></div>
    <div class="rotating-text">
      <div class="text">
        <p>
          <template v-for="n in 4" :key="n">&nbsp;&nbsp;Scroll down&nbsp;&nbsp;</template>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$max-size: 300px;
$rotating-size: 15px;

.scroll-down {
  position: absolute;
  top: 100%;
  right: 4rem;
  transform: translateY(-50%);
  border-radius: 100%;
  width: $max-size;
  height: $max-size;

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 40px solid;
    border-color: $primary;
  }

  .rotating-text {
    width: calc($max-size - $rotating-size);
    height: calc($max-size - $rotating-size);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      font-family: consolas;
      color: white;
      font-size: 17px;
      transition: all 0.2s ease-out;

      :deep(span) {
        position: absolute;
        left: 50%;
        font-size: 1.2em;
        transform-origin: 0 calc(($max-size - $rotating-size) / 2);
      }
    }
  }

  @media (max-width: $md) {
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: $xs) {
    transform: translate(-50%, -10%);
  }
}
</style>
