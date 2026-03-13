<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const totalMonths = ref(0)
const monthRefs = ref([])

const timelineStart = new Date('2020-01-01')

function monthIndex(dateStr) {
  const d = new Date(dateStr)
  return (
    (d.getFullYear() - timelineStart.getFullYear()) * 12 + (d.getMonth() - timelineStart.getMonth())
  )
}

const experienceByMonthIndex = computed(() => {
  const map = {}
  experiences.forEach((exp) => {
    map[monthIndex(exp.startDate)] = exp
  })
  return map
})

const yearByMonthIndex = computed(() => {
  const map = {}
  const startYear = timelineStart.getFullYear()
  const endYear = new Date().getFullYear()
  for (let year = startYear; year <= endYear; year++) {
    const idx = monthIndex(`${year}-01-01`)
    if (idx >= 0 && idx < totalMonths.value) {
      map[idx] = year
    }
  }
  return map
})
const experiences = [
  {
    company: 'TCA-TIK',
    role: 'Full Stack Developer',
    startDate: '2020-03-01',
    endDate: '2022-04-30',
    description: `
    I worked for two years in the development of websites and applications for different clients, using different technologies according to the needs of each project.

    I have participated in more than ten large-scale projects and many smaller ones.`,
  },
  {
    company: 'OCCAM AGENCIA DIGITAL',
    role: 'Full Stack Developer',
    startDate: '2022-04-01',
    endDate: '2023-11-30',
    description: `
    I was main developer of multiple projects such as websites, administration panels and APIs for mobile applications.

    The biggest project I worked on (and I was also the only developer) was an ERP system in which more than a hundred people work on a daily basis.`,
  },
  {
    company: 'GESEIN S.L.',
    role: 'Front End Developer',
    startDate: '2023-12-01',
    endDate: 'Present',
    description: `
    I am currently working as a full time frontend developer, using technologies such as VueJS 3, JS and SCSS.

    I am using Agile and Scrum methodologies for the development of the various projects I am working on.`,
  },
]

function calculateTotalMonths() {
  const startDate = new Date('2020-03-01')
  const endDate = new Date()
  const years = endDate.getFullYear() - startDate.getFullYear()
  const months = endDate.getMonth() - startDate.getMonth()
  totalMonths.value = years * 12 + months
}

function getHeightFromDistance(distance) {
  if (distance <= 5) return 10
  if (distance <= 15) return 10 - ((distance - 5) / 10) * 5
  if (distance <= 30) return 5 - ((distance - 15) / 15) * 4
  return 1
}

let rafId = null

function onMouseMove(e) {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    const cursorX = e.clientX
    const cursorY = e.clientY

    monthRefs.value.forEach((el) => {
      if (!el) return
      const lineEl = el.querySelector('.timeline-months-line')
      if (!lineEl) return
      const rect = el.getBoundingClientRect()
      const closestX = Math.max(rect.left, Math.min(cursorX, rect.right))
      const closestY = Math.max(rect.top, Math.min(cursorY, rect.bottom))
      const distance = Math.sqrt((cursorX - closestX) ** 2 + (cursorY - closestY) ** 2)
      const minHeight = el.dataset.company ? 3 : 1
      lineEl.style.height = `${Math.max(minHeight, getHeightFromDistance(distance))}rem`
    })

    rafId = null
  })
}

onMounted(() => {
  calculateTotalMonths()
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div id="experience" class="experience flex flex-column align-items-center">
    <div class="title">Experience</div>
    <div class="timeline">
      <div class="timeline-inner">
        <!-- Capa 1: líneas (reciben los refs para la interacción del ratón) -->
        <div
          v-for="n in totalMonths"
          :key="`line-${n}`"
          class="timeline-months"
          :data-company="
            experienceByMonthIndex[n - 1] ? experienceByMonthIndex[n - 1].company : undefined
          "
          :ref="
            (el) => {
              if (el) monthRefs[n - 1] = el
            }
          "
          :style="{
            width: `calc(100% / ${totalMonths})`,
            left: `calc((100% / ${totalMonths}) * ${n - 1})`,
          }"
        >
          <div class="timeline-months-line"></div>
        </div>
        <!-- Capa 2: labels (renderizados después de todas las líneas, siempre encima) -->
        <div
          v-for="n in totalMonths"
          :key="`label-${n}`"
          class="timeline-months-label-wrapper"
          :style="{
            width: `calc(100% / ${totalMonths})`,
            left: `calc((100% / ${totalMonths}) * ${n - 1})`,
          }"
        >
          <span v-if="yearByMonthIndex[n - 1]" class="timeline-tag timeline-year-label">
            {{ yearByMonthIndex[n - 1] }}
          </span>
          <span v-if="experienceByMonthIndex[n - 1]" class="timeline-tag timeline-months-label">
            {{ experienceByMonthIndex[n - 1].company }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  padding: 15rem 2rem;
  overflow: hidden;

  .title {
    font-size: 4rem;
    font-weight: bold;
  }

  .timeline {
    margin-top: 10rem;
    position: relative;
    width: 100vw;
    height: 2px;
    padding: 0 4rem;
    background-color: $primary;

    .timeline-inner {
      position: absolute;
      inset: 0;
      margin: 0 4rem;

      .timeline-months-label-wrapper {
        height: 1rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;

        .timeline-tag {
          position: absolute;
          left: 50%;
          white-space: nowrap;
          font-size: 0.75rem;
          font-weight: 600;
          transform: translateX(-50%);
          pointer-events: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;

          &.timeline-year-label {
            color: $secondary;
            bottom: calc(100% + 0.75rem);
          }

          &.timeline-months-label {
            color: white;
            background-color: $secondary;
            top: 2.5rem;
          }
        }
      }

      .timeline-months {
        height: 1rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        .timeline-months-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 1rem;
          width: 2px;
          background-color: $primary;
          opacity: 0.2;
          transition: height 0.15s ease;
          z-index: 1;
        }
      }
    }
  }
}
</style>
