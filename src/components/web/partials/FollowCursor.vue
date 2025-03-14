<script setup>
// Move cursor to follow mouse
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)

const moveCursor = (e) => {
  cursor.value.style.transform = `translate(calc(${e.clientX}px - 3rem / 2), calc(${e.clientY}px - 3rem / 2))`
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<template>
  <div ref="cursor" class="cursor"></div>
</template>

<style lang="scss" scoped>
.cursor {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: rgba($primary, 0.5);
  cursor: none;
}
</style>
