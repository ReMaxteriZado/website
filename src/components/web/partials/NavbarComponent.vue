<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => store.state.user)
const links = [
  { name: 'Inicio', label: 'Home', show: true },
  { name: 'Inicio', label: 'About me', show: true },
  { name: 'Inicio', label: 'My Knowledge', show: true },
  { name: 'Login', label: 'Login', show: !user.value },
  { name: 'Dashboard', label: 'Dashboard', show: user.value },
]
const toggledMenu = ref(false)

function toggleMenu() {
  toggledMenu.value = !toggledMenu.value
}
</script>

<template>
  <nav class="flex justify-content-between">
    <div
      @click="toggleMenu()"
      class="menu hidden md:block border-round-sm"
      :class="{ opened: toggledMenu }"
    >
      <svg class="hover-element" width="50" height="50" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </div>

    <div class="links flex align-items-start md:gap-3">
      <template v-for="link in links" :key="link.name">
        <RouterLink
          v-if="link.show"
          :to="{ name: link.name }"
          class="link flex align-items-center justify-content-center text-center hover-element hover-element-fit px-3 text-primary no-underline text-lg"
        >
          {{ link.label }}
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 1rem;
  right: 1rem;
  left: 1rem;
  z-index: $navbar-z-index;

  .menu {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);

    svg {
      transform: translateY(1px);

      .line {
        fill: none;
        stroke: white;
        stroke-width: 6;
        transition:
          stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
          stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .line1 {
        stroke-dasharray: 60 207;
      }

      .line2 {
        stroke-dasharray: 60 60;
      }

      .line3 {
        stroke-dasharray: 60 207;
      }
    }

    &.opened {
      .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
      }
      .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
      }
      .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
      }
    }
  }

  .link {
    height: 50px;
  }

  @media (max-width: calc($md - 1px)) {
    top: unset;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    background-color: white;
    box-shadow: $box-shadow;

    .links {
      width: 100%;
    }

    .link {
      width: 100%;
      background-color: white;
      text-align: center;
      position: relative;

      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          width: 1px;
          right: 0;
          height: 80%;
          background-color: lightgray;
        }
      }
    }
  }
}
</style>
