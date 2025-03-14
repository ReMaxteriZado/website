<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import NavbarComponent from '@/components/web/partials/NavbarComponent.vue'
import HeaderComponent from '@/components/web/partials/HeaderComponent.vue'
import FollowCursor from '@/components/web/partials/FollowCursor.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getUser')
})
</script>

<template>
  <main>
    <FollowCursor />
    <NavbarComponent />
    <HeaderComponent />

    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  cursor: none;
  background-color: black;
}
</style>
