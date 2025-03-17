<script setup>
import { onMounted } from 'vue'

const words = ['Frontend', 'Developer']
const splittedWords = words.map((word) => word.split(''))

onMounted(() => {
  const letters = document.querySelectorAll('.letter')

  letters.forEach((letter) => {
    letter.addEventListener('mouseover', () => {
      console.log('🚀 ~ HeaderComponent.vue ~ mouseover:')
      letter.classList.add('hovered')
    })
  })
})
</script>

<template>
  <header class="flex align-items-center pl-5">
    <div class="title-container hover-element flex flex-column gap-5 border-round">
      <template v-for="(word, index) in splittedWords" :key="index">
        <div class="title font-bold uppercase flex">
          <div v-for="(letter, index2) in word" :key="index2" class="letter">
            {{ letter }}
          </div>
        </div>
      </template>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100vh;

  .title {
    font-size: 8rem;

    .letter {
      color: white;

      &.hovered {
        animation: typing 0.3s ease forwards;

        @keyframes typing {
          to {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
