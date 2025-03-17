<script setup>
// Move cursor to follow mouse
import { onMounted } from 'vue'

onMounted(() => {
  var outerCursor = document.querySelector('.outer-cursor')
  var innerCursor = document.querySelector('.inner-cursor')
  var cursorHover = document.querySelectorAll('.hover-element')

  document.addEventListener('mousemove', function (e) {
    var x = e.clientX
    var y = e.clientY

    if (!outerCursor.classList.contains('hovering')) {
      outerCursor.style.left = x + 'px'
      outerCursor.style.top = y + 'px'
    }

    innerCursor.style.left = x + 'px'
    innerCursor.style.top = y + 'px'
  })

  document.addEventListener('mousedown', function () {
    outerCursor.classList.add('mousedown')
    innerCursor.classList.add('mousedown')
  })

  document.addEventListener('mouseup', function () {
    outerCursor.classList.remove('mousedown')
    innerCursor.classList.remove('mousedown')
  })

  cursorHover.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      outerCursor.classList.add('hovering')
      const gap = 20

      const itemBounding = item.getBoundingClientRect()
      outerCursor.style.transition = `all .75s ease`
      outerCursor.style.width = `${itemBounding.width + gap}px`
      outerCursor.style.height = `${itemBounding.height + gap}px`
      outerCursor.style.left = `${itemBounding.left - gap / 2}px`
      outerCursor.style.top = `${itemBounding.top - gap / 2}px`
      outerCursor.style.transform = `unset`
      outerCursor.style.borderRadius = `${window.getComputedStyle(item).borderRadius}`
    })

    item.addEventListener('mouseleave', () => {
      outerCursor.classList.remove('hovering')
      resetOuterCursor(outerCursor)
    })
  })

  function resetOuterCursor() {
    outerCursor.style.width = '40px'
    outerCursor.style.height = '40px'
    outerCursor.style.borderRadius = '100%'
    outerCursor.style.transition = `all 200ms ease-out`
  }
})
</script>

<template>
  <div class="outer-cursor d-none d-xl-block"></div>
  <div class="inner-cursor d-none d-xl-block"></div>
</template>

<style lang="scss" scoped>
.inner-cursor {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: $primary;
  opacity: 0.8;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition:
    width 0.3s,
    height 0.3s,
    opacity 0.3s;
  z-index: 95;

  &.mousedown {
    width: 50px;
    height: 50px;
  }
}

.outer-cursor {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid $primary;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 95;

  &.mousedown {
    width: 50px;
    height: 50px;
  }
}
</style>
