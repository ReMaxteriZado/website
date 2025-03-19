<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import NavbarComponent from '@/components/web/partials/NavbarComponent.vue'
import FollowCursor from '@/components/web/partials/FollowCursor.vue'
import HeaderComponent from '@/components/web/home/HeaderComponent.vue'
import AboutMe from '@/components/web/home/AboutMe.vue'
import ScrollDown from '@/components/web/home/ScrollDown.vue'

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
    <ScrollDown />
    <AboutMe />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: black;
}
</style>
