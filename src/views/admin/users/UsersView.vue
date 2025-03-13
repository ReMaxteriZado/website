<script setup>
import { computed, ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useStore } from 'vuex'
import { useToast } from 'primevue/usetoast'
import Card from 'primevue/card'
import DataTable from '@/components/admin/DataTable.vue'
import UsersForm from '@/views/admin/users/UsersForm.vue'
import Column from 'primevue/column'
import Button from 'primevue/button'

// Api
import { getUsers, deleteUser } from '@/api/users'

const store = useStore()
const confirm = useConfirm()
const toast = useToast()
const loggedUser = computed(() => store.state.user)
const dataTableRef = ref(null)
const usersFormRef = ref(null)

function addUser() {
  usersFormRef.value.loadForm()
}

function editUser(data) {
  usersFormRef.value.loadForm(data)
}

function handleDeleteUser(event, user) {
  confirm.require({
    target: event.currentTarget,
    message: '¿Desea borrar este usuario?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancelar',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      severity: 'danger',
      label: 'Aceptar',
    },
    accept: async () => {
      const response = await deleteUser(user)

      if (response.status === 200) {
        dataTableRef.value.handleSearch()

        toast.add({
          severity: 'success',
          summary: 'Borrado',
          detail: 'Usuario borrado',
          life: 3000,
        })
      } else {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ha ocurrido un error al borrar el usuario',
          life: 3000,
        })
      }
    },
  })
}

function onRegisterSaved() {
  dataTableRef.value.handleSearch()
}
</script>

<template>
  <!-- Table content -->
  <Card>
    <template #content>
      <DataTable ref="dataTableRef" :title="'Usuarios'" :searchFunction="getUsers">
        <template #header-actions>
          <Button icon="pi pi-plus" label="Añadir usuario" outlined @click="addUser" />
        </template>

        <template #columns>
          <Column header="Nombre" field="name"></Column>
          <Column header="Email" field="email"></Column>
        </template>

        <template #row-actions>
          <Column header="Acciones">
            <template #body="slotProps">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  @click="editUser(slotProps.data)"
                  v-tooltip.right="{ value: 'Editar usuario', showDelay: 300 }"
                />
                <Button
                  v-if="loggedUser.id !== slotProps.data.id"
                  icon="pi pi-trash"
                  severity="danger"
                  @click="handleDeleteUser($event, slotProps.data)"
                  v-tooltip.right="{ value: 'Borrar usuario', showDelay: 300 }"
                />
              </div>
            </template>
          </Column>
        </template>
      </DataTable>
    </template>
  </Card>

  <UsersForm ref="usersFormRef" @register:saved="onRegisterSaved" />
</template>
