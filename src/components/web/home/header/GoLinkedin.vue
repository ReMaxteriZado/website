<script setup>
import { ref } from 'vue'

const linkedinAnimation = ref(false)

function goLinkedin() {
  window.open('https://www.linkedin.com/in/aesppal/', '_blank')
}

function mouseEnter() {
  linkedinAnimation.value = 'linkedin-animation-enter'
}

function mouseLeave() {
  linkedinAnimation.value = 'linkedin-animation-leave'
}
</script>

<template>
  <div
    @click="goLinkedin()"
    class="linkedin-element hover-element flex align-items-center mb-3 w-max"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    :class="[linkedinAnimation]"
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

  &.linkedin-animation-enter {
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

  &.linkedin-animation-leave {
    .pi-linkedin {
      animation: linkedin-animation-leave 0.5s ease-in-out forwards;

      @keyframes linkedin-animation-leave {
        0% {
          transform: translateY(-50%) rotate(360deg);
        }
        100% {
          transform: translateY(-50%) rotate(0deg);
        }
      }
    }
  }
}
</style>
