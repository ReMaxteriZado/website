<script setup>
import { onMounted, ref } from 'vue'
import Card from 'primevue/card'
import Menu from 'primevue/menu'

const items = ref([
  {
    label: 'Usuarios',
    icon: 'pi pi-users',
  },
])

const sidebarHeight = ref(0)
const loadedItems = ref(false)

onMounted(() => {
  sidebarHeight.value = document.querySelector('.sidebar').clientHeight

  // Set height to custom-menu
  const menu = document.querySelector('.custom-menu-container')
  menu.style.height = `calc(${sidebarHeight.value}px - 2rem)`

  loadedItems.value = true
})
</script>

<template>
  <Card class="custom-card">
    <template #content>
      <div class="custom-menu-container">
        <Menu v-if="loadedItems" :model="items" class="custom-menu" />
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.custom-card {
  box-shadow: $box-shadow;
  height: 100%;

  :deep(.p-card-body) {
    padding: 0.5rem;

    .custom-menu-container {
      overflow-y: auto;
      overflow-x: hidden;

      .custom-menu {
        border: 0;
      }
    }
  }
}
</style>
