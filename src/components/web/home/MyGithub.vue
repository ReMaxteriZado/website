<script setup>
import { ref } from 'vue'
import components from '@/assets/data/components.js'

const minimized = ref(new Set())

function minimize(key) {
  minimized.value = new Set([...minimized.value, key])
}

function expand(key) {
  const next = new Set(minimized.value)
  next.delete(key)
  minimized.value = next
}
</script>

<template>
  <div id="my-github" class="my-github">
    <img src="@/assets/images/github.svg" alt="GitHub" class="github-logo" />

    <div class="codes-container grid m-0">
      <template v-for="(component, index) in components" :key="index">
        <div v-for="(code, codeIndex) in component.codes" :key="codeIndex" class="col:12 md:col-6">
          <div
            class="github-code"
            :class="{ 'is-minimized': minimized.has(`${index}-${codeIndex}`) }"
          >
            <div class="actions">
              <div class="action action-close"></div>
              <div class="action action-minimize" @click="minimize(`${index}-${codeIndex}`)"></div>
              <div class="action action-maximize" @click="expand(`${index}-${codeIndex}`)"></div>
            </div>
            <highlightjs :language="code.language" :code="code.code" />
          </div>
        </div>
      </template>
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
    width: 100%;
    max-width: 1200px;

    .github-code {
      background-color: #282c34;
      color: #abb2bf;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow: hidden;

      .actions {
        display: flex;
        gap: 0.5rem;

        .action {
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
          max-height: 20rem;
        }
      }

      &.is-minimized {
        :deep(pre) {
          display: none;
        }
      }

      .action-minimize,
      .action-maximize {
        cursor: pointer;
      }
    }
  }
}
</style>
