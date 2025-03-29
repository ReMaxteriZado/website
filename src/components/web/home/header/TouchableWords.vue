<script setup>
const words = ['FRONTEND', 'DEVELOPER']
</script>

<template>
  <div class="touchable-header">
    <div class="words-containter">
      <template v-for="(word, index) in words" :key="index">
        <div class="word">{{ word }}</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  .touchable-header {
    display: none;
    height: 100vh;
  }

  @media (pointer: coarse) {
    .touchable-header {
      display: block;
    }
  }

  .words-containter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);

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
}
</style>
