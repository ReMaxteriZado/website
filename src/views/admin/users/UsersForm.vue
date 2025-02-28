<script setup>
import { computed, ref } from 'vue'
import { defineEmits, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'primevue/usetoast'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

// Api
import { createUser, editUser } from '@/api/users'

const emits = defineEmits(['register:saved'])

const store = useStore()
const loggedUser = computed(() => store.state.user)
const toast = useToast()
const visible = ref(false)
const id = ref(null)
const name = ref('')
const email = ref('')
const password = ref('')
const header = ref('Añadir usuario')
const loading = ref(false)
const errors = ref(null)

function loadForm(data = null) {
  resetForm()
  visible.value = true
  header.value = data ? 'Editar usuario' : 'Añadir usuario'

  if (data) {
    id.value = data.id
    name.value = data.name
    email.value = data.email
  }
}

function resetForm() {
  id.value = null
  name.value = ''
  email.value = ''
  password.value = ''
  errors.value = null
}

async function save() {
  loading.value = true

  const saveFunction = id.value ? editUser : createUser

  const response = await saveFunction({
    id: id.value,
    name: name.value,
    email: email.value,
    password: password.value,
  })

  if (response.status === 200) {
    loading.value = false
    visible.value = false
    name.value = ''

    toast.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Usuario guardado correctamente',
      life: 3000,
    })

    emits('register:saved')
  } else {
    loading.value = false
    errors.value = response.data

    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Ha ocurrido un error al guardar el usuario',
      life: 3000,
    })
  }
}

defineExpose({
  loadForm,
})
</script>

<template>
  <Dialog
    modal
    :header="header"
    v-model:visible="visible"
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <!-- Form -->
    <div class="grid">
      <div class="col-12 md:col-6">
        <InputText v-model="name" placeholder="Nombre" class="w-full mb-1" />
        <div v-if="errors?.name" class="text-sm text-red-600">{{ errors.name[0] }}</div>
      </div>
      <div class="col-12 md:col-6">
        <InputText
          v-model="email"
          placeholder="Email"
          class="w-full mb-1"
          :disabled="id === loggedUser.id"
        />
        <div v-if="errors?.email" class="text-sm text-red-600">{{ errors.email[0] }}</div>
      </div>
      <div class="col-12 md:col-6">
        <Password
          v-model="password"
          placeholder="Contraseña"
          class="w-full mb-1"
          :feedback="false"
        />
        <div v-if="errors?.password" class="text-sm text-red-600">{{ errors.password[0] }}</div>
      </div>
    </div>

    <!-- Actions -->
    <Button
      :icon="loading ? 'pi pi-spin pi-spinner' : ''"
      severity="success"
      label="Guardar"
      :disabled="loading"
      @click="save"
    />
  </Dialog>
</template>
