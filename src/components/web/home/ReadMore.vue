<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

import ParticlesAnimation from '@/components/web/home/header/ParticlesAnimation.vue'

defineProps({
  getImageUrl: {
    type: Function,
    required: true,
  },
})

const store = useStore()
const readMore = computed(() => store.state.readMore)

function closeReadMore() {
  document.body.style.overflow = ''
  store.commit('setReadMore', null)
}

watch(
  () => readMore.value,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="read-more" :class="{ animate: readMore }">
    <div class="read-more-particles">
      <ParticlesAnimation id="read-more-particles-js" />
    </div>
    <div v-for="n in 4" :key="n" class="read-more-item"></div>
    <div v-if="readMore?.description" class="read-more-content">
      <img :src="getImageUrl(readMore.image, true)" width="150px" :alt="readMore.label" />
      <div class="my-5">{{ readMore.description }}</div>
      <div class="close-read-more hover-element hover-element-without-bg" @click="closeReadMore">
        <div>Close</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.read-more {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  visibility: hidden;
  z-index: $read-more-z-index;

  .read-more-particles {
    width: 100%;
    height: 100%;
    z-index: $read-more-z-index + 1;
    position: absolute;
    opacity: 0;
  }

  .read-more-item {
    z-index: $read-more-z-index;
    height: calc(100vh / 4);
    background-color: black;
    position: absolute;
    width: 0;

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

  .read-more-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    z-index: $read-more-z-index + 1;
    opacity: 0;
    line-height: 2.5rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .close-read-more {
    background-color: white;
    z-index: $read-more-z-index + 1;
    opacity: 0;
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
    width: 10rem;
    padding: 0.5rem 1rem;
    position: relative;
  }

  &.animate {
    visibility: visible;

    @keyframes animate {
      from {
        width: 0;
      }

      to {
        width: 100vw;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .read-more-item {
      animation: animate 1s forwards;

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

    .read-more-content,
    .close-read-more,
    .read-more-particles {
      animation: fadeIn 0.5s forwards;
      animation-delay: 1.2s;
    }
  }
}
</style>
