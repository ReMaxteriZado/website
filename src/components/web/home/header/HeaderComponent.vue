<script setup>
import GoLinkedin from '@/components/web/home/header/GoLinkedin.vue'
import TouchableWords from '@/components/web/home/header/TouchableWords.vue'
import NonTouchableWords from '@/components/web/home/header/NonTouchableWords.vue'
import ParticlesAnimation from '@/components/web/home/header/ParticlesAnimation.vue'
</script>

<template>
  <header id="header">
    <ParticlesAnimation id="header-particles-js" />

    <div class="non-touchable-header flex-column justify-content-center pl-5">
      <GoLinkedin />
      <NonTouchableWords />
    </div>

    <div class="touchable-header flex-column justify-content-center pl-5">
      <TouchableWords />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100vh;
  background-color: black;

  .non-touchable-header {
    display: flex;
    height: 100%;
  }

  .touchable-header {
    display: none;
    height: 100%;
  }

  @media (pointer: coarse) {
    .non-touchable-header {
      display: none;
    }

    .touchable-header {
      display: block;
    }
  }
}
</style>
