<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import SplitButton from 'primevue/splitbutton'

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
</script>

<template>
  <div class="h-full w-full">
    <Card class="custom-card">
      <template #content>
        <div class="flex justify-content-end">
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
  box-shadow: $box-shadow;

  :deep(.p-card-body) {
    padding: 0.5rem;
  }
}
</style>
