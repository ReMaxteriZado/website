<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex gap-3">
    <div class="border-solid border-primary border-1 border-round px-3 py-2">
      <RouterLink class="no-underline" to="/">Home</RouterLink>
    </div>
    <div class="border-solid border-primary border-1 border-round px-3 py-2">
      <RouterLink class="no-underline" to="/login">Login</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
