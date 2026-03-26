const components = [
  {
    name: 'ScrollDown.vue',
    description:
      'A scroll down indicator that animates to indicate to users that they can scroll down for more content.',
    codes: [
      {
        language: 'html',
        code: `<div class="scroll-down hover-element">\n  <div class="ring"></div>\n  <div class="rotating-text">\n    <div class="text">\n      <p>\n        <template v-for="n in 4" :key="n">&nbsp;&nbsp;Scroll down&nbsp;&nbsp;</template>\n      </p>\n    </div>\n  </div>\n</div>`,
      },
      {
        language: 'scss',
        code: `$max-size: 300px;\n$rotating-size: 15px;\n\n.scroll-down {\n  position: absolute;\n  top: 100%;\n  right: 4rem;\n  transform: translateY(-50%);\n  border-radius: 100%;\n  width: $max-size;\n  height: $max-size;\n\n  .ring {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    border: 40px solid;\n    border-color: $primary;\n  }\n\n  .rotating-text {\n    width: calc($max-size - $rotating-size);\n    height: calc($max-size - $rotating-size);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    .text {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      font-family: consolas;\n      color: white;\n      font-size: 17px;\n      transition: all 0.2s ease-out;\n\n      :deep(span) {\n        position: absolute;\n        left: 50%;\n        font-size: 1.2em;\n        transform-origin: 0 calc(($max-size - $rotating-size) / 2);\n      }\n    }\n  }\n\n  @media (max-width: $md) {\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    z-index: $scroll-down-z-index;\n  }\n}`,
      },
      {
        language: 'javascript',
        code: "import { onMounted } from 'vue'\n\nonMounted(() => {\n  const text = document.querySelector('.text')\n\n  if (text) {\n    text.innerHTML = text.innerText\n      .split('')\n      .map((char, i) => `<span style=\"transform:rotate(${i * 6}deg)\">${char}</span>`)\n      .join('')\n\n    let lastScrollTop = 0\n    let currentRotation = 0\n    let rotationMultiplier = 1\n\n    // Rotate text by default\n    setInterval(() => {\n      text.style.transform = `rotate(${currentRotation}deg)`\n      currentRotation += 0.3 * rotationMultiplier\n    }, 1000 / 60)\n\n    window.addEventListener('scroll', () => {\n      increaseRotation()\n    })\n\n    text.addEventListener('click', () => {\n      rotationMultiplier += 50\n\n      setTimeout(() => {\n        rotationMultiplier = 1\n      }, 100)\n    })\n\n    let interval = null\n\n    text.addEventListener('mousedown', () => {\n      touchOrMouseDown()\n    })\n\n    text.addEventListener('touchstart', () => {\n      touchOrMouseDown()\n    })\n\n    text.addEventListener('mouseup', () => {\n      resetRotation()\n    })\n\n    text.addEventListener('touchend', () => {\n      resetRotation()\n    })\n\n    text.addEventListener('mouseleave', () => {\n      resetRotation()\n    })\n\n    function touchOrMouseDown() {\n      interval = setInterval(() => {\n        if (rotationMultiplier > 50) return\n        rotationMultiplier += 3\n      }, 50)\n    }\n\n    function resetRotation() {\n      clearInterval(interval)\n      rotationMultiplier = 1\n    }\n\n    function increaseRotation() {\n      let currentScroll = window.scrollY\n\n      if (currentScroll > lastScrollTop) {\n        currentRotation += 1 * rotationMultiplier\n        text.style.transform = `rotate(${currentRotation}deg)`\n      }\n\n      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll\n    }\n  }\n})",
        columnWidth: 'col-12',
      },
    ],
  },
  {
    name: 'FollowCursor.vue',
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
