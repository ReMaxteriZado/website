<script setup>
import { nextTick, ref } from 'vue'

defineProps({
  getImageUrl: {
    type: Function,
    required: true,
  },
})

const selectedSkill = ref(null)
let followCursorRAF = null

function resetSelectedSkill() {
  selectedSkill.value = null

  const clonedCard = document.querySelector('.cloned-card')
  clonedCard.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1)'
  clonedCard.style.top = 'unset'
  clonedCard.style.left = 'unset'

  // Limpiar el listener y el requestAnimationFrame
  document.removeEventListener('mousemove', followCursor)

  if (followCursorRAF) {
    cancelAnimationFrame(followCursorRAF)
    followCursorRAF = null
  }
}

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

  setTimeout(() => {
    document.addEventListener('mousemove', (event) => followCursor(event, clonedCard))
  }, 1000)
}

function followCursor(event, clonedCard) {
  // Cancelar el frame anterior si existe
  if (followCursorRAF) {
    cancelAnimationFrame(followCursorRAF)
  }

  // Programar la actualización para el próximo frame
  followCursorRAF = requestAnimationFrame(() => {
    const rect = clonedCard.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = event.clientX - centerX
    const deltaY = event.clientY - centerY

    const rotateY = (deltaX / rect.width) * 10
    const rotateX = -(deltaY / rect.height) * 10

    clonedCard.style.transition = 'unset'
    clonedCard.style.transform = `translate(-50%, -50%) rotate(0deg) scale(1.3) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    followCursorRAF = null
  })
}

defineExpose({
  resetSelectedSkill,
  selectedSkill,
  expandSkill,
})
</script>

<template>
  <div v-if="selectedSkill" class="cloned-card">
    <img :src="getImageUrl(selectedSkill.image)" width="150px" :alt="selectedSkill.label" />
    <div class="close-cloned-card flex hover-element" @click="resetSelectedSkill">
      <i class="pi pi-times"></i>
    </div>
    <div class="read-more" @click="readMore(selectedSkill)">
      <span>Read More</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cloned-card {
  position: absolute;
  z-index: 2;
  transition: all 1s ease;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 20rem;
  aspect-ratio: 1;
  background-color: #333;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  will-change: transform;

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

  .read-more {
    position: absolute;
    bottom: 0.75rem;
    right: 50%;
    transform: translateX(50%);
    cursor: pointer;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.35rem;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
