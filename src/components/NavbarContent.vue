<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import SplitButton from 'primevue/splitbutton'
import Button from 'primevue/button'

const store = useStore()
const router = useRouter()

const props = defineProps({
  user: Object,
})

const items = [
  {
    label: 'Volver a la web',
    icon: 'pi pi-home',
    command: () => {
      router.push({ name: 'Inicio' })
    },
  },
  {
    label: 'Cerrar sesión',
    icon: 'pi pi-power-off',
    command: () => {
      store.dispatch('logout')
    },
  },
]

function changeSidebarVisibility() {
  store.commit('setAdminSidebarVisible', !store.state.adminSidebarVisible)
}
</script>

<template>
  <div class="h-full w-full">
    <Card class="custom-card">
      <template #content>
        <div class="flex justify-content-between lg:justify-content-end">
          <Button class="lg:hidden" icon="pi pi-bars" @click="changeSidebarVisibility" />
          <SplitButton
            :label="props.user.name"
            icon="pi pi-user"
            dropdownIcon="pi pi-chevron-down"
            :model="items"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.custom-card {
  :deep(.p-card-body) {
    padding: 0.5rem;
  }
}
</style>
