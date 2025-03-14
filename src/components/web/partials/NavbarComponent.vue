<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => store.state.user)
const links = computed(() => {
  return [
    { name: 'Inicio', label: 'Home', show: true },
    { name: 'Login', label: 'Login', show: !user.value },
    { name: 'Dashboard', label: 'Dashboard', show: user.value },
  ]
})
</script>

<template>
  <nav class="flex gap-3">
    <template v-for="link in links" :key="link.name">
      <RouterLink
        v-if="link.show"
        :to="{ name: link.name }"
        class="bg-white border-solid border-primary border-1 border-round no-underline px-3 py-2"
      >
        {{ link.label }}
      </RouterLink>
    </template>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
</style>
