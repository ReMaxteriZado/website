<script setup>
import GoLinkedin from './GoLinkedin.vue'
const words = ['FRONTEND', 'DEVELOPER']
</script>

<template>
  <div class="words-containter">
    <template v-for="(word, index) in words" :key="index">
      <div class="word">{{ word }}</div>
    </template>
    <GoLinkedin />
  </div>
</template>

<style lang="scss" scoped>
.words-containter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: $touchable-words-z-index;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

  .word {
    font-size: 6rem;
    font-weight: 700;
    color: white;
  }
}

@media (max-width: $md) {
  .words-containter {
    .word {
      font-size: 5rem;
    }
  }
}

@media (min-width: $lg) {
  .words-containter {
    transform: translate(-50%, -50%);

    .word {
      font-size: 6rem;
    }
  }
}
</style>
