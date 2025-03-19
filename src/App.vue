<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { setAuthorizationToken } from '@/configuration/axios'
import Toast from 'primevue/toast'
import ConfirmPopup from 'primevue/confirmpopup'

const store = useStore()

onMounted(() => {
  store.dispatch('mustShrinkAdminView')

  setAuthorizationToken()
})
</script>

<template>
  <Toast />
  <ConfirmPopup />
  <RouterView />
</template>
