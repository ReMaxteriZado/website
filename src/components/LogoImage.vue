<script setup>
import { useRouter } from 'vue-router'
import Card from 'primevue/card'

const router = useRouter()
</script>

<template>
  <Card class="custom-card h-full w-full">
    <template #content>
      <div class="logo-image" @click="router.push('/')"></div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.custom-card {
  box-shadow: $box-shadow;

  :deep(.p-card-body) {
    padding: 0.5rem;
    height: 100%;

    .p-card-content {
      height: 100%;

      .logo-image {
        height: 100%;
        cursor: pointer;
        background-image: url('@/assets/images/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(0.15rem);
        }
      }
    }
  }
}
</style>
