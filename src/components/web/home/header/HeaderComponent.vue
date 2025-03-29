<script setup>
import GoLinkedin from './GoLinkedin.vue'
import TouchableWords from './TouchableWords.vue'
import NonTouchableWords from './NonTouchableWords.vue'
</script>

<template>
  <header>
    <div class="non-touchable-header flex-column justify-content-center pl-5">
      <GoLinkedin />
      <NonTouchableWords />
    </div>
    <TouchableWords />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;

  .non-touchable-header {
    display: flex;
    height: 100vh;
  }

  @media (pointer: coarse) {
    .non-touchable-header {
      display: none;
    }
  }
}
</style>
