<script setup>
import { onMounted, watch } from 'vue'
import { useStore } from 'vuex'

import NavbarComponent from '@/components/web/partials/NavbarComponent.vue'
import FollowCursor from '@/components/web/partials/FollowCursor.vue'
import HeaderComponent from '@/components/web/home/header/HeaderComponent.vue'
import AboutMe from '@/components/web/home/AboutMe.vue'
import ScrollDown from '@/components/web/home/ScrollDown.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getUser')
})

watch(
  () => store.state.loaded,
  (value) => {
    if (value) {
      const loadingPanel = document.querySelector('#loading-panel')
      loadingPanel.classList.add('loaded')

      const body = document.querySelector('body')
      body.classList.remove('loading')
    }
  },
)
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

<style lang="scss" scoped></style>
