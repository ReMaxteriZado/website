<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'
import LogoImage from '@/components/admin/LogoImage.vue'
import NavbarContent from '@/components/admin/NavbarContent.vue'
import SidebarContent from '@/components/admin/SidebarContent.vue'
import OverlayContent from '@/components/admin/OverlayContent.vue'
import SwipeArea from '@/components/admin/SwipeArea.vue'

const store = useStore()

onMounted(async () => {
  const response = await store.dispatch('getUser')

  if (response.status == 200) {
    store.commit('setUser', response.data)
  } else {
    store.dispatch('logout', false)
  }
})

const user = computed(() => store.state.user)

const adminSidebarVisible = computed(() => store.state.adminSidebarVisible)
const shrinkAdminView = computed(() => store.state.shrinkAdminView)
</script>

<template>
  <div v-if="user" class="container">
    <OverlayContent />
    <SwipeArea class="md:hidden" />

    <div class="navbar">
      <NavbarContent :user="user" />
    </div>
    <div class="logo">
      <LogoImage />
    </div>
    <div class="sidebar" :class="[shrinkAdminView && adminSidebarVisible ? 'show' : '']">
      <SidebarContent />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
}

@media (max-width: calc($lg - 1px)) {
  .container {
    position: relative;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      'navbar'
      'content';

    .navbar {
      position: sticky;
      top: $gap;
      z-index: $navbar-z-index;
    }

    .logo {
      display: none;
    }

    .sidebar {
      position: fixed;
      top: 0.75rem;
      left: 0.75rem;
      bottom: 0.75rem;
      z-index: $sidebar-z-index;
      transform: translateX(calc(-100% - $gap * 2));
      transition: all 0.3s ease;

      &.show {
        transform: translateX(0);
      }
    }

    .content {
      width: calc(100vw - $gap * 2);
    }
  }
}
</style>
