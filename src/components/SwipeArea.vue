<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const startX = ref(0)
const endX = ref(0)
const threshold = 50 // Mínima distancia para considerar el gesto

const startSwipe = (event) => {
  startX.value = event.touches[0].clientX
}

const endSwipe = (event) => {
  endX.value = event.changedTouches[0].clientX
  if (endX.value - startX.value > threshold) {
    store.commit('setAdminSidebarVisible', !store.state.adminSidebarVisible)
  }
}
</script>

<template>
  <div class="swipe-area" @touchstart="startSwipe" @touchend="endSwipe"></div>
</template>

<style scoped>
.swipe-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
}
</style>
