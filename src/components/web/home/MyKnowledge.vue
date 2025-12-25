<script setup>
import { ref } from 'vue'
import ClonedCard from '@/components/web/partials/ClonedCard.vue'

const skills = [
  { label: 'Vue.JS', image: 'vue.png' },
  { label: 'JavaScript', image: 'js.png' },
  { label: 'SASS', image: 'sass.png' },
  { label: 'CSS3', image: 'css3.png' },
  { label: 'HTML5', image: 'html5.png' },
  { label: 'Git', image: 'git.png' },
]
const clonedCardRef = ref(null)
const randomizedSkills = shuffle([...skills])

async function handleExpandSkill(event, skill) {
  clonedCardRef.value.expandSkill(event, skill)
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function getImageUrl(imageName) {
  return new URL(`../../../assets/images/skills/${imageName}`, import.meta.url).href
}
</script>

<template>
  <div id="my-knowledge" class="my-knowledge flex align-items-center justify-content-center flex-column">
    <ClonedCard ref="clonedCardRef" :get-image-url="getImageUrl" />
    <h2 class="title">My Knowledge</h2>
    <div class="carousel-container">
      <template v-for="n in 4" :key="n">
        <div class="carousel odd-carousel">
          <div v-for="n in 2" :key="n" class="group">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="card"
              @click="($event) => handleExpandSkill($event, skill)"
            >
              <img :src="getImageUrl(skill.image)" width="150px" :alt="skill.label" />
            </div>
          </div>
        </div>
        <div class="carousel even-carousel">
          <div v-for="n in 2" :key="n" class="group">
            <div
              v-for="(skill, index) in randomizedSkills"
              :key="index"
              class="card"
              @click="($event) => handleExpandSkill($event, skill)"
            >
              <img :src="getImageUrl(skill.image)" width="150px" :alt="skill.label" />
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
          width: 22rem;
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
          animation: odd-spin 50s linear infinite;

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
          animation: even-spin 90s linear infinite;

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
