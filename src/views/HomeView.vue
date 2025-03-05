<template>
  <main>
    <div class="flex gap-3">
      <div class="border-solid border-primary border-1 border-round px-3 py-2">
        <RouterLink class="no-underline" :to="{ name: 'Inicio' }">Home</RouterLink>
      </div>
      <div class="border-solid border-primary border-1 border-round px-3 py-2">
        <RouterLink class="no-underline" :to="{ name: 'Login' }">Login</RouterLink>
      </div>
      <div class="border-solid border-primary border-1 border-round px-3 py-2">
        <RouterLink class="no-underline" :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
      </div>
    </div>
  </main>
</template>
