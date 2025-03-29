<script setup>
import { ref } from 'vue'

const animateLinkedin = ref(false)

function goLinkedin() {
  animateLinkedin.value = true

  setTimeout(() => {
    // window.open('https://www.linkedin.com/in/aesppal/', '_blank')
    animateLinkedin.value = false
  }, 1500)
}
</script>

<template>
  <div
    @click="goLinkedin()"
    class="linkedin-element hover-element flex align-items-center mb-3 w-max"
  >
    <div class="pi pi-linkedin text-primary text-lg"></div>
    <h3 class="text-white m-0 pl-5" style="transform: translateY(1px)">Alejandro Espino</h3>
  </div>
</template>

<style lang="scss" scoped>
.linkedin-element {
  position: relative;

  .pi-linkedin {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }

  &:hover {
    .pi-linkedin {
      animation: linkedin-animation 0.5s ease-in-out forwards;

      @keyframes linkedin-animation {
        0% {
          transform: translateY(-50%) rotate(0deg);
        }
        100% {
          transform: translateY(-50%) rotate(360deg);
        }
      }
    }
  }
}
</style>
