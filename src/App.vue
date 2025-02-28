<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { setAuthorizationToken } from '@/configuration/axios'
import Toast from 'primevue/toast'
import ConfirmPopup from 'primevue/confirmpopup'

onMounted(() => {
  setAuthorizationToken()
})
</script>

<template>
  <Toast />
  <ConfirmPopup />

  <RouterView />
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
