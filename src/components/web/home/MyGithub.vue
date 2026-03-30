<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import components from '@/assets/data/components.js'

const componentsRef = ref(components)

function everyCodeIsMinimized(component) {
  return component.codes.every((code) => code.isMinimized)
}

function toggleComponent(component) {
  const shouldMinimize = !everyCodeIsMinimized(component)
  component.codes.forEach((code) => {
    code.isMinimized = shouldMinimize
  })
}

function minimize(code) {
  code.isMinimized = true
}

function expand(code) {
  code.isMinimized = false
}

function scrollTo(selector) {
  const element = document.querySelector(selector)
  if (!element) return

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.pageYOffset - 20,
    behavior: 'smooth',
  })
}

let blockRAF = null

function onGlobalMouseMove(event) {
  if (blockRAF) cancelAnimationFrame(blockRAF)
  const clientX = event.clientX
  const clientY = event.clientY
  blockRAF = requestAnimationFrame(() => {
    document.querySelectorAll('.code-block').forEach((el) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = clientX - centerX
      const deltaY = clientY - centerY
      const rotateY = (deltaX / rect.width) * 3
      const rotateX = -(deltaY / rect.height) * 3
      el.style.transition = 'none'
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
    blockRAF = null
  })
}

onUnmounted(() => {
  window.removeEventListener('mousemove', onGlobalMouseMove)
})

onMounted(() => {
  componentsRef.value.forEach((component, index) => {
    if (index > 0) {
      component.codes.forEach((code) => {
        code.isMinimized = true
      })
    }
  })
  window.addEventListener('mousemove', onGlobalMouseMove)
})
</script>

<template>
  <div id="my-github" class="my-github">
    <img src="@/assets/images/github.svg" alt="GitHub" class="github-logo mb-5" />

    <div class="codes-container">
      <div
        v-for="(component, index) in componentsRef"
        :key="index"
        class="code-block grid p-2 mb-5"
      >
        <div class="title col-12">
          <div class="text-2xl font-bold text-primary">{{ component.name }}</div>
          <div class="title-actions flex gap-3 align-items-center">
            <i
              v-if="component.goToComponent"
              @click="scrollTo(component.goToComponent, 500, { offset: -100 })"
              class="pi pi-objects-column text-xs text-gray-400 hover-element"
              v-tooltip.top="{ value: 'Go to the component', showDelay: 300 }"
            ></i>
            <i
              class="pi text-xs text-gray-400 hover-element"
              :class="[
                everyCodeIsMinimized(component)
                  ? 'pi-arrow-up-right-and-arrow-down-left-from-center'
                  : 'pi-arrow-down-left-and-arrow-up-right-to-center',
              ]"
              @click="toggleComponent(component)"
            ></i>
          </div>
        </div>
        <div class="col-12 text-xs pt-0 text-gray-400">{{ component.description }}</div>
        <template v-for="(code, codeIndex) in component.codes" :key="codeIndex">
          <div :class="[code.columnWidth ? code.columnWidth : `col-12 md:col-6`]">
            <div class="code" :class="{ 'is-minimized': code.isMinimized }">
              <div class="flex align-items-center justify-content-between">
                <div class="actions">
                  <div class="action action-close hover-element"></div>
                  <div class="action action-minimize hover-element" @click="minimize(code)"></div>
                  <div class="action action-maximize hover-element" @click="expand(code)"></div>
                </div>
                <div class="language text-xs text-gray-400 uppercase">
                  {{ code.language }}
                </div>
              </div>
              <highlightjs :language="code.language" :code="code.code" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#my-github {
  display: flex;
  align-items: center;
  flex-direction: column;

  .github-logo {
    width: 7.5rem;
    height: 7.5rem;
  }

  .codes-container {
    width: 90%;
    max-width: 1200px;

    .code-block {
      border: 1px solid #e5e5e5;
      border-radius: 0.5rem;
      background-color: #f5f5f5;
      transition: all 1s ease;
      will-change: transform;

      .title-actions {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
      }
    }

    .code {
      background-color: #282c34;
      color: #abb2bf;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow: hidden;

      .actions {
        display: flex;
        gap: 0.5rem;

        .action {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;

          &.action-close {
            background-color: #e06c75;
          }

          &.action-minimize {
            background-color: #e5c07b;
          }

          &.action-maximize {
            background-color: #98c379;
          }
        }
      }

      :deep(pre) {
        border-radius: 0.5rem;
        margin: 0;
        margin-top: 1rem;

        code {
          height: 20rem;
        }
      }

      &.is-minimized {
        :deep(pre) {
          display: none;
        }
      }
    }
  }
}
</style>
