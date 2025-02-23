<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const login = async () => {
  await store.dispatch('login', { email: email.value, password: password.value })
  router.push('/dashboard')
}
</script>

<template>
  <Card>
    <template #title>
      <h5>Iniciar sesión</h5>
    </template>
    <template #content>
      <div class="flex align-items-start flex-column gap-3">
        <div class="flex flex-column gap-1">
          <label for="email">Correo electrónico</label>
          <InputText id="email" v-model="email" />
        </div>
        <div class="flex flex-column gap-1">
          <label for="password">Contraseña</label>
          <Password id="password" v-model="password" />
        </div>
        <Button label="Iniciar sesión" @click="login" />
      </div>
    </template>
  </Card>
</template>
