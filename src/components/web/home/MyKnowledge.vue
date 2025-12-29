<script setup>
import { ref } from 'vue'
import ClonedCard from '@/components/web/partials/ClonedCard.vue'
import ReadMore from '@/components/web/home/ReadMore.vue'

const skills = [
  {
    label: 'Vue.JS',
    image: 'vue.png',
    description:
      'I have solid experience with Vue.js, building dynamic, component-based user interfaces for modern web applications. I work with reactive data, computed properties, lifecycle hooks, and state management to create scalable and maintainable solutions. I focus on reusable components, clean separation of concerns, and efficient communication between components. I also integrate APIs, handle asynchronous data flows, and optimize performance. Vue.js allows me to deliver fast, user-friendly interfaces while maintaining clean code and a structured architecture suitable for long-term projects.',
  },
  {
    label: 'JavaScript',
    image: 'js.png',
    description:
      'I have over five years of experience working with JavaScript, using it as the core language for building modern web applications. I am comfortable with ES6+ features, asynchronous programming, and event-driven architectures. My work includes DOM manipulation, state management, API integration, and performance optimization. I focus on writing clean, readable, and scalable code that is easy to maintain over time. JavaScript has allowed me to adapt quickly to new frameworks and tools, understand browser behavior in depth, and deliver interactive, efficient, and user-focused solutions.',
  },
  {
    label: 'SASS',
    image: 'sass.png',
    description:
      'I use SASS to write more structured, scalable, and maintainable stylesheets. By leveraging variables, mixins, functions, partials, and nesting, I keep styles consistent and easy to manage across large projects. SASS allows me to implement design systems efficiently and reduce repetition in CSS codebases. I organize styles following clear architectures, making collaboration with other developers smoother. My experience with SASS helps speed up development, improve readability, and ensure that styling remains flexible and easy to extend as projects grow and evolve.',
  },
  {
    label: 'CSS3',
    image: 'css3.png',
    description:
      'I have extensive experience with CSS3, creating responsive, visually appealing, and performant user interfaces. I work confidently with Flexbox, Grid, animations, transitions, and media queries to ensure layouts adapt seamlessly across devices and screen sizes. I focus on maintainable styling strategies, consistent design systems, and reusable patterns. I also optimize CSS for performance by reducing redundancy and avoiding unnecessary complexity. My approach balances aesthetics with usability, ensuring interfaces are not only visually polished but also intuitive, accessible, and aligned with modern web standards.',
  },
  {
    label: 'HTML5',
    image: 'html5.png',
    description:
      'I have strong experience with HTML5, using it to build clean, semantic, and accessible structures for modern web applications. I focus on writing well-organized markup that improves SEO, performance, and maintainability. I regularly work with semantic tags, forms, multimedia elements, and accessibility best practices (ARIA roles, proper labeling, and logical document structure). HTML5 is the foundation of my frontend work, ensuring that applications are robust, scalable, and easy to integrate with CSS, JavaScript, and modern frameworks. I also pay close attention to cross-browser compatibility and standards compliance.',
  },
  {
    label: 'Git',
    image: 'git.png',
    description:
      'I use Git daily as my primary version control system, both individually and in team environments. I am comfortable with branching strategies, merging, resolving conflicts, and maintaining a clean commit history. Git enables me to collaborate efficiently, track changes, and manage multiple features or fixes simultaneously. I follow best practices such as meaningful commit messages and organized workflows. My experience with Git ensures code stability, smooth collaboration, and reliable project maintenance throughout the entire development lifecycle.',
  },
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

function getImageUrl(imageName, fromCropped = false) {
  return new URL(
    `../../../assets/images/skills/${fromCropped ? `cropped/${imageName}` : imageName}`,
    import.meta.url,
  ).href
}
</script>

<template>
  <div
    id="my-knowledge"
    class="my-knowledge flex align-items-center justify-content-center flex-column"
  >
    <ReadMore :get-image-url="getImageUrl" />
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
    z-index: $my-knowledge-title-z-index;
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
