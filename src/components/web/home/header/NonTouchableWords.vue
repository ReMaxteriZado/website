<script setup>
import { onMounted } from 'vue'

const words = ['FRONTEND', 'DEVELOPER']
const splittedWords = words.map((word) => word.split(''))

onMounted(() => {
  // Split words into letters
  const letters = words.join('').split('')

  // Remove duplicates
  const uniqueLetters = [...new Set(letters)]

  uniqueLetters.forEach((letter) => {
    let width = 0

    switch (letter) {
      case 'F':
        width = 93
        break
      case 'R':
        width = 110
        break
      case 'O':
        width = 128.001
        break
      case 'N':
        width = 116
        break
      case 'T':
        width = 118
        break
      case 'E':
        width = 94
        break
      case 'D':
        width = 112
        break
      case 'V':
        width = 130
        break
      case 'L':
        width = 92
        break
      case 'P':
        width = 106
        break
      default:
        width = 0
        break
    }

    const canvas = document.querySelectorAll(`.${letter}`)

    canvas.forEach((canva) => {
      canva.width = width
    })
  })

  const canvas = document.querySelectorAll('canvas')

  canvas.forEach((canva) => {
    const ctx = canva.getContext('2d')

    let painting = false

    // Start painting when the mouse is pressed
    canva.addEventListener('mouseenter', startPosition)
    // Stop painting when the mouse is released
    canva.addEventListener('mouseleave', endPosition)
    // Keep painting while the mouse is moving and pressed
    canva.addEventListener('mousemove', draw)

    function startPosition(e) {
      painting = true
      draw(e) // Draw immediately when mouse is pressed
    }

    function endPosition() {
      painting = false
      ctx.beginPath() // Reset the path
    }

    function draw(e) {
      if (!painting) return

      // Recalcular el rect en cada dibujo para tener coordenadas actualizadas
      const rect = canva.getBoundingClientRect()

      ctx.lineWidth = 100 // Brush size
      ctx.lineCap = 'round' // Smooth edges
      ctx.strokeStyle = '#ef4444' // Brush color

      // Draw line from previous position to the current mouse position
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    }
  })
})
</script>

<template>
  <template v-for="(word, index) in splittedWords" :key="index">
    <div class="word flex gap-3 border-round-2xl mb-5">
      <template v-for="(letter, index2) in word" :key="index2">
        <div class="canvas-container">
          <canvas :class="letter" height="160"> </canvas>
        </div>
      </template>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.canvas-container {
  height: 140px;

  canvas {
    background-color: white;

    &.F {
      clip-path: path(
        'M 24 140 L 0 140 L 0 0 L 93 0 L 93 20.8 L 24 20.8 L 24 60.6 L 87 60.6 L 87 81.4 L 24 81.4 L 24 140 Z'
      );
    }

    &.R {
      clip-path: path(
        'M 24 140.001 L 0 140.001 L 0 0.001 L 53 0.001 A 91.62 91.62 0 0 1 65.37 0.788 Q 74.988 2.101 82.3 5.601 Q 94 11.201 100 21.001 A 40.876 40.876 0 0 1 105.752 38.525 A 51.012 51.012 0 0 1 106 43.601 Q 106 58.001 98.2 68.501 A 37.879 37.879 0 0 1 85.993 78.999 Q 81.171 81.681 75.187 83.485 A 66.811 66.811 0 0 1 74.8 83.601 L 110 140.001 L 83.6 140.001 L 52.6 86.401 L 24 86.401 L 24 140.001 Z M 24 20.801 L 24 66.401 L 49 66.401 Q 67.4 66.401 74.7 60.401 A 19.547 19.547 0 0 0 81.743 47.482 A 28.333 28.333 0 0 0 82 43.601 A 25.646 25.646 0 0 0 81.057 36.458 A 19.09 19.09 0 0 0 74.7 26.801 Q 68.505 21.709 54.315 20.938 A 98.155 98.155 0 0 0 49 20.801 L 24 20.801 Z'
      );
    }

    &.O {
      clip-path: path(
        'M 0.001 73.201 L 0.001 69.201 Q 0.001 50.801 5.101 37.701 A 63.499 63.499 0 0 1 11.62 25.109 A 51.908 51.908 0 0 1 19.201 16.201 Q 28.201 7.801 39.701 3.901 A 75.12 75.12 0 0 1 63.901 0.001 A 83.843 83.843 0 0 1 64.001 0.001 A 75.227 75.227 0 0 1 87.941 3.78 A 71.744 71.744 0 0 1 88.301 3.901 Q 99.801 7.801 108.801 16.201 A 53.895 53.895 0 0 1 119.529 30.337 A 67.675 67.675 0 0 1 122.901 37.701 A 70.107 70.107 0 0 1 126.561 51.147 Q 128.001 59.426 128.001 69.201 L 128.001 73.201 Q 128.001 92.401 122.901 105.901 Q 117.801 119.401 108.801 127.901 Q 99.801 136.401 88.301 140.401 Q 76.801 144.401 64.001 144.401 Q 51.201 144.401 39.701 140.401 Q 28.201 136.401 19.201 127.901 A 53.289 53.289 0 0 1 9.068 114.591 A 68.722 68.722 0 0 1 5.101 105.901 A 73.367 73.367 0 0 1 1.526 92.496 Q 0.382 85.9 0.096 78.344 A 136.009 136.009 0 0 1 0.001 73.201 Z M 102.801 73.201 L 102.801 69.201 Q 102.801 56.897 100.064 48.063 A 39.773 39.773 0 0 0 97.201 41.101 A 42.421 42.421 0 0 0 91.743 33.086 A 31.68 31.68 0 0 0 82.801 25.901 Q 74.001 21.201 64.001 21.201 Q 54.001 21.201 45.101 25.901 A 31.966 31.966 0 0 0 34.573 34.97 A 42.972 42.972 0 0 0 30.701 41.101 A 42.439 42.439 0 0 0 27.191 50.595 Q 26.071 55.106 25.582 60.429 A 95.888 95.888 0 0 0 25.201 69.201 L 25.201 73.201 A 102.241 102.241 0 0 0 25.793 84.578 Q 27.005 95.378 30.701 102.701 A 42.67 42.67 0 0 0 35.892 110.747 A 31.109 31.109 0 0 0 45.101 118.401 Q 54.001 123.201 64.001 123.201 Q 74.001 123.201 82.801 118.401 A 31.718 31.718 0 0 0 92.337 110.286 A 44.514 44.514 0 0 0 97.201 102.701 A 43.796 43.796 0 0 0 100.613 93.443 Q 101.827 88.663 102.367 82.958 A 103.684 103.684 0 0 0 102.801 73.201 Z'
      );
    }

    &.N {
      clip-path: path(
        'M 24 140 L 0 140 L 0 0 L 23.2 0 L 92 100 L 92 0 L 116 0 L 116 140 L 92.8 140 L 24 40 L 24 140 Z'
      );
    }

    &.T {
      clip-path: path(
        'M 71 140 L 47 140 L 47 20.8 L 0 20.8 L 0 0 L 118 0 L 118 20.8 L 71 20.8 L 71 140 Z'
      );
    }

    &.E {
      clip-path: path(
        'M 94 140 L 0 140 L 0 0 L 94 0 L 94 20.8 L 24 20.8 L 24 57.6 L 88 57.6 L 88 78.4 L 24 78.4 L 24 119.2 L 94 119.2 L 94 140 Z'
      );
    }

    &.D {
      clip-path: path(
        'M 43 140.001 L 0 140.001 L 0 0.001 L 45 0.001 A 100.042 100.042 0 0 1 61.784 1.336 Q 72.528 3.165 81.2 7.501 Q 96.2 15.001 104.1 29.901 A 63.588 63.588 0 0 1 109.9 46.048 Q 112 55.554 112 67.001 L 112 71.001 Q 112 93.401 103.8 108.801 Q 95.6 124.201 80.1 132.101 Q 64.6 140.001 43 140.001 Z M 24 20.801 L 24 119.201 L 41 119.201 A 68.43 68.43 0 0 0 52.978 118.203 A 50.272 50.272 0 0 0 65.1 114.501 A 33.617 33.617 0 0 0 80.556 100.182 A 41.59 41.59 0 0 0 81.1 99.201 A 42.421 42.421 0 0 0 84.791 89.433 Q 85.984 84.694 86.468 79.085 A 94.01 94.01 0 0 0 86.8 71.001 L 86.8 67.001 A 76.307 76.307 0 0 0 86.115 56.459 Q 85.338 50.899 83.68 46.281 A 37.476 37.476 0 0 0 81 40.401 A 37.121 37.121 0 0 0 72.667 30.228 A 34.059 34.059 0 0 0 65.3 25.501 A 48.666 48.666 0 0 0 49.777 21.173 A 60.33 60.33 0 0 0 43 20.801 L 24 20.801 Z'
      );
    }

    &.V {
      clip-path: path('M 78 140 L 54 140 L 0 0 L 25.6 0 L 66.6 109.8 L 106 0 L 130 0 L 78 140 Z');
    }

    &.L {
      clip-path: path('M 92 140 L 0 140 L 0 0 L 24 0 L 24 119.2 L 92 119.2 L 92 140 Z');
    }

    &.P {
      clip-path: path(
        'M 24 140.001 L 0 140.001 L 0 0.001 L 51 0.001 Q 69.8 0.001 82 5.501 A 44.738 44.738 0 0 1 91.763 11.409 A 35.321 35.321 0 0 1 100.1 21.001 A 42.096 42.096 0 0 1 105.365 36.063 A 55.397 55.397 0 0 1 106 44.601 A 52.786 52.786 0 0 1 104.704 56.56 A 40.998 40.998 0 0 1 100.1 68.201 A 36.345 36.345 0 0 1 88.119 80.409 A 47.872 47.872 0 0 1 82 83.701 Q 72.225 88.108 58.212 88.984 A 115.687 115.687 0 0 1 51 89.201 L 24 89.201 L 24 140.001 Z M 24 20.801 L 24 68.401 L 49 68.401 A 95.945 95.945 0 0 0 57.687 68.038 Q 69.736 66.937 75 62.501 A 18.687 18.687 0 0 0 80.91 53.12 Q 81.796 50.045 81.962 46.343 A 38.895 38.895 0 0 0 82 44.601 A 31.659 31.659 0 0 0 81.282 37.636 Q 80.234 32.991 77.658 29.611 A 18.332 18.332 0 0 0 75 26.801 Q 69.318 21.93 55.728 21.013 A 100.204 100.204 0 0 0 49 20.801 L 24 20.801 Z'
      );
    }
  }
}
</style>
