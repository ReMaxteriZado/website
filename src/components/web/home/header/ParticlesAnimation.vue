<script setup>
// https://github.com/VincentGarreau/particles.js/
import { onMounted } from 'vue'

onMounted(() => {
  // eslint-disable-next-line no-undef
  const particlesJsDom = document.getElementById('particles-js')

  const interval = setInterval(() => {
    if (!particlesJsDom) return

    clearInterval(interval)

    // eslint-disable-next-line no-undef
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          push: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  })
})
</script>

<template>
  <div id="particles-js">
    <canvas class="particles-js-canvas-el"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
