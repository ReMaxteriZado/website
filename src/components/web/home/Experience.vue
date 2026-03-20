<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const TITLE_ANIMATION_DURATION = 500

const store = useStore()
const titleRef = ref(null)
const titleTextRef = ref(null)
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
    image: 'tcatik.png',
    description: `I worked for two years in the development of websites and applications for different clients, using different technologies according to the needs of each project.
    I have participated in more than ten large-scale projects and many smaller ones.`,
  },
  {
    company: 'OCCAM AGENCIA DIGITAL',
    role: 'Full Stack Developer',
    startDate: '2022-04-01',
    endDate: '2023-11-30',
    image: 'occam.png',
    description: `I was main developer of multiple projects such as websites, administration panels and APIs for mobile applications.
    The biggest project I worked on (and I was also the only developer) was an ERP system in which more than a hundred people work on a daily basis.`,
  },
  {
    company: 'GESEIN S.L.',
    role: 'Front End Developer',
    startDate: '2023-12-01',
    endDate: 'Present',
    image: 'gesein.png',
    description: `I am currently working as a full time frontend developer, using technologies such as VueJS 3, JS and SCSS.
    I am using Agile and Scrum methodologies for the development of the various projects I am working on.`,
  },
]

function calculateTotalMonths() {
  const endDate = new Date()
  const years = endDate.getFullYear() - timelineStart.getFullYear()
  const months = endDate.getMonth() - timelineStart.getMonth()
  totalMonths.value = years * 12 + months + 1
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

function focusExperience(exp) {
  const readMoreObject = {
    label: exp.company,
    image: exp.image,
    description: `${exp.role} | ${exp.startDate} to ${exp.endDate}
      
      ${exp.description}
    `,
    getImageUrl,
  }

  store.commit('setReadMore', readMoreObject)
}

function getImageUrl(imageName) {
  return new URL(`../../../assets/images/companies/${imageName}`, import.meta.url).href
}

onMounted(() => {
  calculateTotalMonths()
  window.addEventListener('mousemove', onMouseMove)

  let animationIn = false
  let animationOut = false
  let mouseIn = false

  titleRef.value.addEventListener('mouseenter', () => {
    mouseIn = true
    startAnimationIn()
  })

  titleRef.value.addEventListener('mouseleave', () => {
    mouseIn = false
    startAnimationOut()
  })

  function startAnimationIn() {
    if (!animationOut) {
      animationIn = true
      titleRef.value.classList.add('start-animation')
      titleTextRef.value.classList.add('white')

      setTimeout(() => {
        animationIn = false

        if (!mouseIn) {
          startAnimationOut()
        }
      }, TITLE_ANIMATION_DURATION)
    }
  }

  function startAnimationOut() {
    if (!animationIn) {
      animationOut = true
      titleRef.value.classList.add('end-animation')
      titleTextRef.value.classList.remove('white')

      setTimeout(() => {
        titleRef.value.classList.remove('start-animation', 'end-animation')
        animationOut = false

        if (mouseIn) {
          startAnimationIn()
        }
      }, TITLE_ANIMATION_DURATION)
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div id="experience" class="experience flex flex-column align-items-center">
    <div
      ref="titleRef"
      class="title-wrapper flex justify-content-center align-items-center px-3 py-2"
      :style="{ '--title-animation-duration': TITLE_ANIMATION_DURATION + 'ms' }"
    >
      <div ref="titleTextRef" class="title">Experience</div>
      <div class="moving-title-background"></div>
    </div>

    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-wrapper">
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
        <div
          v-for="n in totalMonths"
          :key="`label-${n}`"
          class="timeline-labels-wrapper"
          :style="{
            width: `calc(100% / ${totalMonths})`,
            left: `calc((100% / ${totalMonths}) * ${n - 1})`,
          }"
        >
          <span v-if="yearByMonthIndex[n - 1]" class="timeline-tag timeline-labels-year">
            {{ yearByMonthIndex[n - 1] }}
          </span>
          <span
            v-if="experienceByMonthIndex[n - 1]"
            class="timeline-tag timeline-labels-company hover-element hover-element-without-bg"
            @click="focusExperience(experienceByMonthIndex[n - 1])"
          >
            {{ experienceByMonthIndex[n - 1].company }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  margin: 15rem 0;

  .title-wrapper {
    position: relative;
    overflow: hidden;

    .title {
      font-size: 4rem;
      font-weight: bold;
      z-index: 1;
      transition: color var(--title-animation-duration) ease-out;

      &.white {
        color: white;
      }
    }

    .moving-title-background {
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 100%;
      background-color: $secondary;
      border-radius: 0.25rem;
    }

    &.start-animation {
      .moving-title-background {
        animation: expandWidth var(--title-animation-duration) ease-out forwards;

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      }
    }

    &.end-animation {
      .moving-title-background {
        animation: shrinkWidth var(--title-animation-duration) ease-out forwards;
        left: unset;
        right: 0;

        @keyframes shrinkWidth {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }
      }
    }
  }

  .timeline {
    margin-top: 10rem;
    position: relative;
    width: 100%;

    .timeline-line {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 2px;
      width: 100%;
      background-color: $primary;
      opacity: 0.2;
    }

    .timeline-wrapper {
      position: relative;
      margin: auto;
      height: 2rem;
      width: 90%;

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
        }
      }

      .timeline-labels-wrapper {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        .timeline-tag {
          position: absolute;
          left: 50%;
          white-space: nowrap;
          font-size: 0.75rem;
          font-weight: 600;
          transform: translateX(-50%);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;

          &.timeline-labels-year {
            background-color: white;
            color: $secondary;
            bottom: calc(100% + 0.75rem);
          }

          &.timeline-labels-company {
            color: white;
            background-color: $secondary;
            top: 2.5rem;
          }
        }
      }
    }
  }
}
</style>
