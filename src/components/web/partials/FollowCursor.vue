<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const interval = setInterval(() => {
    let outerCursor = document.querySelector('.outer-cursor')
    let innerCursor = document.querySelector('.inner-cursor')

    if (!outerCursor || !innerCursor) return

    clearInterval(interval)
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

    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest('.hover-element')

      if (!el) return

      const fitElement = el.classList.contains('hover-element-fit')

      outerCursor.classList.add('hovering')
      const gap = fitElement ? 0 : 20

      const itemBounding = el.getBoundingClientRect()
      outerCursor.style.width = `${itemBounding.width + gap}px`
      outerCursor.style.height = `${itemBounding.height + gap}px`
      outerCursor.style.left = `${itemBounding.left - gap / 2}px`
      outerCursor.style.top = `${itemBounding.top - gap / 2}px`

      const elementBorderRadius = window.getComputedStyle(el).borderRadius
      outerCursor.style.borderRadius = `calc(${elementBorderRadius == '0px' ? '4px' : elementBorderRadius} + 4px)`
    })

    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest('.hover-element')

      if (!el) return

      outerCursor.classList.remove('hovering')
      outerCursor.style.width = `40px`
      outerCursor.style.height = `40px`
      outerCursor.style.borderRadius = `100%`
    })

    const observer = new MutationObserver(() => {
      const hovering = outerCursor.classList.contains('hovering')
      if (!hovering) return

      const hoverElements = document.querySelectorAll('.hover-element:hover')
      if (hoverElements.length === 0) {
        outerCursor.classList.remove('hovering')
        outerCursor.style.width = `40px`
        outerCursor.style.height = `40px`
        outerCursor.style.borderRadius = `100%`
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
})
</script>

<template>
  <div class="outer-cursor"></div>
  <div class="inner-cursor"></div>
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
  z-index: $inner-cursor-z-index;

  &.mousedown {
    width: 50px;
    height: 50px;
  }
}

.outer-cursor {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid $primary;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: $outer-cursor-z-index;

  &.mousedown {
    width: 50px;
    height: 50px;
  }

  &.hovering {
    transform: unset;
    background-color: $primary;
    opacity: 0.2;
    animation: blink 3s ease infinite;

    @keyframes blink {
      0%,
      100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.4;
      }
    }
  }
}

@media (pointer: coarse) {
  .inner-cursor,
  .outer-cursor {
    display: none;
  }
}
</style>
