<script setup></script>

<template>
  <div v-for="n in 10" :key="n" class="about-me p-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet possimus voluptates minima
    consequuntur corrupti numquam? At ipsum modi, aperiam eaque praesentium consequatur aut
    laudantium obcaecati maiores debitis ab, earum cum!
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  background-color: white;
}
</style>
