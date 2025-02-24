<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast'
import { setAuthorizationToken } from '@/configuration/axios'

onMounted(() => {
  setAuthorizationToken()
})
</script>

<template>
  <Toast />
  <RouterView />
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
