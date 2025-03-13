<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const adminSidebarVisible = computed(() => store.state.adminSidebarVisible)

function changeSidebarVisibility() {
  store.commit('setAdminSidebarVisible', !store.state.adminSidebarVisible)
}
</script>

<template>
  <div
    class="overlay"
    :class="[adminSidebarVisible ? 'show' : '']"
    @click="changeSidebarVisibility"
  ></div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: $overlay-z-index;
  touch-action: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;

  &.show {
    visibility: visible;
    opacity: 1;
  }
}
</style>
