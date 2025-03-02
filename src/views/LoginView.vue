<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api, { setAuthorizationToken } from '@/configuration/axios'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')
const router = useRouter()
const errors = ref(null)

async function handleLogin() {
  try {
    const response = await api.post('login', { email: email.value, password: password.value })

    if (response.status == 200) {
      localStorage.setItem('token', response.data.token)
      setAuthorizationToken()

      router.push('/dashboard')
    }
  } catch (error) {
    errors.value = error.response.data.errors
  }
}
</script>

<template>
  <div class="login-container flex flex-column justify-content-center align-items-center">
    <div class="col-12 flex justify-content-center">
      <RouterLink to="/">
        <img src="@/assets/images/logo.png" width="120px" alt="Logo" />
      </RouterLink>
    </div>
    <div class="col-12 md:col-8 lg:col-4">
      <Card>
        <template #title>
          <h3 class="my-2">Iniciar sesión</h3>
        </template>
        <template #content>
          <div class="w-full flex align-items-start flex-column gap-3">
            <div class="flex flex-column gap-1 w-full">
              <label for="email">Correo electrónico</label>
              <InputText id="email" v-model="email" class="w-full" />
              <div v-if="errors?.email" class="text-sm text-red-600">{{ errors.email[0] }}</div>
            </div>
            <div class="flex flex-column gap-1 w-full">
              <label for="password">Contraseña</label>
              <Password id="password" v-model="password" class="w-full" :feedback="false" />
              <div v-if="errors?.password" class="text-sm text-red-600">
                {{ errors.password[0] }}
              </div>
            </div>
            <Button label="Iniciar sesión" @click="handleLogin" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100vw;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
