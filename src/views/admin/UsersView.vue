<script setup>
import { onMounted, ref } from 'vue'
import Card from 'primevue/card'
import DataTable from '@/components/DataTable.vue'
import Column from 'primevue/column'
import Button from 'primevue/button'

// Api
import { getUsers } from '@/api/users'

const registers = ref([])

onMounted(async () => {
  const users = await getUsers()
  registers.value = users
})
</script>

<template>
  <Card>
    <template #content>
      <DataTable :title="'Usuarios'" :value="registers">
        <template #header-actions>
          <Button icon="pi pi-plus" label="Añadir usuario" outlined />
        </template>

        <template #columns>
          <Column header="Nombre" field="name"></Column>
          <Column header="Email" field="email"></Column>
        </template>

        <template #row-actions>
          <Column header="Acciones">
            <template #body>
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  v-tooltip.right="{ value: 'Editar usuario', showDelay: 300 }"
                />
                <Button
                  icon="pi pi-trash"
                  severity="danger"
                  v-tooltip.right="{ value: 'Borrar usuario', showDelay: 300 }"
                />
              </div>
            </template>
          </Column>
        </template>
      </DataTable>
    </template>
  </Card>
</template>
