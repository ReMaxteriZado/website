<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.dispatch('getUser')
})

const user = computed(() => store.state.user)
</script>

<template>
  <div>
    <h2>Bienvenido, {{ user?.name }}</h2>
    <button @click="store.dispatch('logout')">Cerrar sesión</button>
  </div>
</template>
