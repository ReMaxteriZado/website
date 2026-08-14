<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function changeLocale(locale) {
  router.push({ name: 'Home', params: { locale }, hash: route.hash })
}
</script>

<template>
  <footer id="footer" class="footer">
    <div class="flex justify-content-between align-items-center">
      <div class="back-top-section">
        <div class="back-top hover-element flex align-items-center gap-2" @click="goTop">
          <div class="h5 mb-0">{{ t('home.backToTop') }}</div>
          <i class="pi pi-chevron-up"></i>
        </div>
      </div>
      <div class="hidden lg:flex align-items-center gap-3">
        <button
          class="language hover-element"
          :class="{ active: route.params.locale === 'en' }"
          type="button"
          @click="changeLocale('en')"
        >
          {{ t('home.language.english') }}
        </button>
        <button
          class="language hover-element"
          :class="{ active: route.params.locale === 'es' }"
          type="button"
          @click="changeLocale('es')"
        >
          {{ t('home.language.spanish') }}
        </button>
      </div>
      <div class="icons flex align-items-center gap-4">
        <a
          class="linkedin hover-element"
          href="https://www.linkedin.com/in/aesppal/"
          target="_blank"
        >
          <img src="@/assets/images/footer/linkedin.png" width="25" />
        </a>

        <a class="hover-element" href="mailto:alejandroepx@gmail.com" target="_blank">
          <img src="@/assets/images/footer/gmail.png" width="30" />
        </a>
        <a class="hover-element" a href="https://github.com/ReMaxteriZado" target="_blank">
          <img src="@/assets/images/footer/github.png" width="30" />
        </a>
        <a class="hover-element" href="https://wa.me/+34616974171" target="_blank">
          <img src="@/assets/images/footer/whatsapp.png" width="30" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 15vh;
  padding: 5rem;

  .icons {
    filter: invert(70%);

    .linkedin {
      transform: translateY(-2px);
    }
  }

  .language {
    border: 0;
    padding: 0;
    color: inherit;
    background: transparent;
    font: inherit;
    cursor: pointer;

    &.active {
      color: $primary;
    }
  }
}
</style>
