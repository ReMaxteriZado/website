<script setup>
import { ref } from 'vue'

const code = ref(`console.log('Hello, GitHub!')
console.log('Hello, GitHub!')
console.log('Hello, GitHub!')
console.log('Hello, GitHub!')
console.log('Hello, GitHub!')
`)
</script>

<template>
  <div id="my-github" class="my-github">
    <img src="@/assets/images/github.svg" alt="GitHub" class="github-logo" />

    <div class="github-code mt-5">
      <div class="actions">
        <div class="action action-close"></div>
        <div class="action action-minimize"></div>
        <div class="action action-maximize"></div>
      </div>
      <highlightjs language="javascript" :code="code" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#my-github {
  display: flex;
  align-items: center;
  flex-direction: column;

  .github-logo {
    width: 10rem;
    height: 10rem;
  }

  .github-code {
    width: 100%;
    max-width: 600px;
    background-color: #282c34;
    color: #abb2bf;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;

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
      overflow: hidden;
    }
  }
}
</style>
