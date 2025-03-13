<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Card from 'primevue/card'
import Menu from 'primevue/menu'

const router = useRouter()
const store = useStore()

function hideSidebar() {
  store.commit('setAdminSidebarVisible', false)
}

const items = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    command: () => {
      hideSidebar()
      router.push({ name: 'Dashboard' })
    },
  },
  {
    label: 'Usuarios',
    icon: 'pi pi-users',
    command: () => {
      hideSidebar()
      router.push({ name: 'Usuarios' })
    },
  },
])

const loadedItems = ref(false)
const shrinkAdminView = ref(false)

onMounted(() => {
  shrinkAdminView.value = store.state.shrinkAdminView

  if (!shrinkAdminView.value) {
    const sidebarHeight = document.querySelector('.sidebar').clientHeight

    // Set height to custom-menu
    const menu = document.querySelector('.menu-container')
    menu.style.height = `calc(${sidebarHeight}px - 2rem)`
  }

  loadedItems.value = true
})
</script>

<template>
  <Card class="custom-card">
    <template #content>
      <div class="menu-container">
        <Menu v-if="loadedItems" :model="items" class="custom-menu" />
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.custom-card {
  height: 100%;

  :deep(.p-card-body) {
    padding: 0.5rem;

    .menu-container {
      overflow-y: auto;
      overflow-x: hidden;

      .custom-menu {
        border: 0;
      }
    }
  }
}
</style>
