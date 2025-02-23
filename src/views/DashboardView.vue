<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import LogoImage from '@/components/LogoImage.vue'
import NavbarContent from '@/components/NavbarContent.vue'
import SidebarContent from '@/components/SidebarContent.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getUser')
})

const user = computed(() => store.state.user)
</script>

<template>
  <div v-if="user" class="container">
    <div class="navbar">
      <NavbarContent :user="user" />
    </div>
    <div class="logo">
      <LogoImage />
    </div>
    <div class="sidebar">
      <SidebarContent />
    </div>
    <div class="content"></div>
  </div>
</template>

<style lang="scss" scoped>
$gap: 0.75rem;

.container {
  height: 100vh;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;
  padding: $gap;
  gap: $gap;
  grid-auto-flow: row;
  grid-template-areas:
    'logo navbar'
    'sidebar content';
}

.navbar {
  grid-area: navbar;
}

.logo {
  grid-area: logo;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
</style>
