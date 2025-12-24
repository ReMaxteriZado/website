<script setup>
import { nextTick, ref } from 'vue'

const skills = ['Vue.JS', 'JavaScript', 'SASS', 'CSS3', 'HTML5', 'Git', 'Laravel', 'PHP']
const selectedSkill = ref(null)

async function expandSkill(event, skill) {
  selectedSkill.value = skill

  await nextTick()

  const card = event.target
  const parent = document.querySelector('.my-knowledge')

  const elRect = card.getBoundingClientRect()
  const parentRect = parent.getBoundingClientRect()

  const centerX = elRect.left - parentRect.left + elRect.width / 2
  const centerY = elRect.top - parentRect.top + elRect.height / 2

  const clonedCard = document.querySelector('.cloned-card')
  clonedCard.style.top = `${centerY}px`
  clonedCard.style.left = `${centerX}px`

  requestAnimationFrame(() => {
    clonedCard.style.top = '50%'
    clonedCard.style.left = '50%'
    clonedCard.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1.3)'
  })
}

function resetSelectedSkill() {
  selectedSkill.value = null

  const clonedCard = document.querySelector('.cloned-card')
  clonedCard.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1)'
  clonedCard.style.top = 'unset'
  clonedCard.style.left = 'unset'
}
</script>

<template>
  <div class="my-knowledge flex align-items-center justify-content-center flex-column">
    <div v-show="selectedSkill" class="cloned-card">
      {{ selectedSkill }}
      <div class="close-cloned-card flex hover-element" @click="resetSelectedSkill">
        <i class="pi pi-times"></i>
      </div>
    </div>
    <h2 class="title">My Knowledge</h2>
    <div class="carousel-container">
      <template v-for="n in 4" :key="n">
        <div class="carousel odd-carousel">
          <div v-for="n in 2" :key="n" class="group">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="card"
              @click="($event) => expandSkill($event, skill)"
            >
              {{ skill }}
            </div>
          </div>
        </div>
        <div class="carousel even-carousel">
          <div v-for="n in 2" :key="n" class="group">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="card"
              @click="($event) => expandSkill($event, skill)"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-knowledge {
  background-color: black;
  color: white;
  overflow: hidden;
  position: relative;
  height: 50rem;

  .cloned-card {
    position: absolute;
    z-index: 2;
    transition: all 1s ease;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 20rem;
    aspect-ratio: 1;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    .close-cloned-card {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      cursor: pointer;
      font-size: 1.5rem;
      border-radius: 0.35rem;

      &:hover {
        color: red;
      }
    }
  }

  .title {
    font-size: 3rem;
    margin: 0;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px black;
  }

  .carousel-container {
    width: 150%;
    position: absolute;
    transform: rotate(45deg);

    .carousel {
      width: 100%;
      height: 20rem;
      display: flex;
      overflow-x: hidden;
      margin-bottom: 1rem;

      .group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-right: 1rem;

        .card {
          flex: 0 0 20rem;
          aspect-ratio: 1;
          background-color: #333;
          border-radius: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          filter: blur(3px);

          &:hover {
            filter: blur(0);
            background-color: $primary;
            transition:
              filter 0.3s,
              background-color 0.3s;
          }
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }

      &.odd-carousel {
        .group {
          animation: odd-spin 70s linear infinite;

          @keyframes odd-spin {
            from {
              translate: 0;
            }

            to {
              translate: -100%;
            }
          }
        }
      }

      &.even-carousel {
        .group {
          animation: even-spin 70s linear infinite;

          @keyframes even-spin {
            from {
              translate: -100%;
            }

            to {
              translate: 0;
            }
          }
        }
      }
    }
  }
}
</style>
