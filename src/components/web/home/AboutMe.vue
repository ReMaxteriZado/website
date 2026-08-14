<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

let rafId = null
const verticalLineWidth = ref(0)

function listenTitleHover() {
  const title = document.querySelector('#about-me .about-me-title')

  if (!title) return

  title.addEventListener('mouseenter', () => {
    cancelAnimationFrame(rafId)

    function expandStep() {
      const remaining = 100 - verticalLineWidth.value
      if (remaining < 0.2) {
        verticalLineWidth.value = 100
        return
      }
      verticalLineWidth.value += remaining * 0.1
      rafId = requestAnimationFrame(expandStep)
    }

    rafId = requestAnimationFrame(expandStep)
  })

  title.addEventListener('mouseleave', () => {
    cancelAnimationFrame(rafId)

    function collapseStep() {
      const remaining = verticalLineWidth.value
      if (remaining < 0.2) {
        verticalLineWidth.value = 0
        return
      }
      verticalLineWidth.value -= remaining * 0.1
      rafId = requestAnimationFrame(collapseStep)
    }

    rafId = requestAnimationFrame(collapseStep)
  })
}

onMounted(() => {
  listenTitleHover()
})
</script>

<template>
  <div id="about-me" class="about-me">
    <div class="about-me-title">
      <div class="vertical-line" :style="{ width: verticalLineWidth + '%' }">
        <div class="title vertical-line-title">{{ t('home.aboutTitle') }}</div>
      </div>
      <div class="title">{{ t('home.aboutTitle') }}</div>
    </div>
    <div class="about-me-content mt-5">
      <span>{{ t('home.aboutParagraphs[0]') }}</span>
      <span>{{ t('home.aboutParagraphs[1]') }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  padding: 15rem 2rem;

  .about-me-title {
    width: 23rem;
    height: 5rem;
    position: relative;

    .vertical-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 5rem;
      z-index: 1;
      border-right: 7px solid $primary;

      .vertical-line-title {
        overflow: hidden;
        z-index: 0;
        color: $primary;
      }
    }

    .title {
      position: absolute;
      top: 0;
      left: calc(7px + 1rem);
      height: 100%;
      width: calc(100% - 7px - 1rem);
      font-size: 4rem;
      font-weight: bold;
      white-space: nowrap;
      z-index: 0;
    }
  }

  .about-me-content {
    font-size: 1.6rem;
    line-height: 2.4rem;
    max-width: 80vw;

    span {
      display: block;
      margin-bottom: 1.25rem;
    }
  }
}
</style>
