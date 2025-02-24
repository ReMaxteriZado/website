<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import DataTable from '@/components/DataTable.vue'
import Column from 'primevue/column'
import Button from 'primevue/button'

const registers = ref([
  {
    code: '0001',
    name: 'Product 1',
    category: 'Category 1',
    quantity: 10,
  },
  {
    code: '0002',
    name: 'Product 2',
    category: 'Category 2',
    quantity: 20,
  },
  {
    code: '0003',
    name: 'Product 3',
    category: 'Category 3',
    quantity: 30,
  },
])
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
          <Column header="Categoría" field="category"></Column>
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
