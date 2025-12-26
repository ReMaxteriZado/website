<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const showReadMore = computed(() => store.state.showReadMore)

watch(
  () => showReadMore.value,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="read-more" :class="{ animate: showReadMore }">
    <div class="read-more-item"></div>
    <div class="read-more-item"></div>
    <div class="read-more-item"></div>
    <div class="read-more-item"></div>
    <div class="read-more-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat in ex quia necessitatibus
      rerum similique quis quibusdam veritatis nisi tenetur dicta iste qui quas, ea blanditiis amet
      quisquam. Quod.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.read-more {
  .read-more-item {
    position: fixed;
    left: 0;
    width: 0;
    height: 100vh;
    z-index: $read-more-z-index;
    height: calc(100vh / 4);
    background-color: black;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 25%;
    }

    &:nth-child(3) {
      top: 50%;
    }

    &:nth-child(4) {
      top: 75%;
    }
  }

  &.animate {
    @keyframes animate {
      from {
        width: 0;
      }

      to {
        width: 100vw;
      }
    }

    .read-more-item {
      animation: animate 0.5s forwards;

      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }
    }
  }

  .read-more-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    z-index: $read-more-z-index + 1;
  }
}
</style>
