const components = [
  {
    component: 'FollowCursor.vue',
    description:
      'Custom cursor that follows the mouse movement and changes its appearance when hovering over specific elements.',
    codes: [
      {
        language: 'javascript',
        code: "import { onMounted } from 'vue'\n\nonMounted(() => {\n  const interval = setInterval(() => {\n    let outerCursor = document.querySelector('.outer-cursor')\n    let innerCursor = document.querySelector('.inner-cursor')\n\n    if (!outerCursor || !innerCursor) return\n\n    clearInterval(interval)\n\n    document.addEventListener('mousemove', function (e) {\n      let x = e.clientX\n      let y = e.clientY\n\n      if (!outerCursor.classList.contains('hovering')) {\n        outerCursor.style.left = x + 'px'\n        outerCursor.style.top = y + 'px'\n      }\n\n      innerCursor.style.left = x + 'px'\n      innerCursor.style.top = y + 'px'\n    })\n\n    document.addEventListener('mouseover', (e) => {\n      const el = e.target.closest('.hover-element')\n\n      if (!el) return\n\n      const fitElement = el.classList.contains('hover-element-fit')\n      outerCursor.classList.add('hovering')\n      const gap = fitElement ? 0 : 20\n\n      const itemBounding = el.getBoundingClientRect()\n      outerCursor.style.width = `${itemBounding.width + gap}px`\n      outerCursor.style.height = `${itemBounding.height + gap}px`\n      outerCursor.style.left = `${itemBounding.left - gap / 2}px`\n      outerCursor.style.top = `${itemBounding.top - gap / 2}px`\n\n      const elementBorderRadius = window.getComputedStyle(el).borderRadius\n      outerCursor.style.borderRadius = `calc(${elementBorderRadius == '0px' ? '4px' : elementBorderRadius} + 4px)`\n    })\n\n    document.addEventListener('mouseout', (e) => {\n      const el = e.target.closest('.hover-element')\n\n      if (!el) return\n\n      outerCursor.classList.remove('hovering')\n      outerCursor.style.width = '40px'\n      outerCursor.style.height = '40px'\n      outerCursor.style.borderRadius = '100%'\n    })\n  })\n})",
      },
      {
        language: 'scss',
        code: `.inner-cursor {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background-color: $primary;\n  opacity: 0.8;\n  position: fixed;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  transition:\n    width 0.3s,\n    height 0.3s,\n    opacity 0.3s;\n  z-index: $inner-cursor-z-index;\n\n  &.mousedown {\n    width: 50px;\n    height: 50px;\n  }\n}\n\n.outer-cursor {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  border: 2px solid $primary;\n  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);\n  position: fixed;\n  pointer-events: none;\n  transform: translate(-50%, -50%);\n  z-index: $outer-cursor-z-index;\n\n  &.mousedown {\n    width: 50px;\n    height: 50px;\n  }\n\n  &.hovering {\n    transform: unset;\n    background-color: $primary;\n    opacity: 0.2;\n    animation: blink 3s ease infinite;\n\n    @keyframes blink {\n      0%,\n      100% {\n        opacity: 0.2;\n      }\n      50% {\n        opacity: 0.4;\n      }\n    }\n  }\n\n  &.hovering-without-bg {\n    background-color: transparent;\n    opacity: 1;\n    animation: none;\n  }\n}\n\n@media (pointer: coarse) {\n  .inner-cursor,\n  .outer-cursor {\n    display: none;\n  }\n}`,
      },
    ],
  },
]

export default components
