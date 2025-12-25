<script setup></script>

<template>
  <div id="about-me" class="about-me">
    <div class="about-me-title flex align-items-center gap-3">
      <div class="vertical-line"></div>
      <div class="title">About me</div>
    </div>
    <div class="about-me-content mt-5">
      <span
        >I am a FrontEnd developer with advanced knowledge in VueJS, JS, SASS and animations. I
        specialize in web layout, responsive and animations, and I would like to focus my career in
        that direction.</span
      >
      <span>I consider myself a responsible, hardworking and eager to learn person.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  padding: 15rem 2rem;

  .about-me-title {
    .vertical-line {
      width: 7px;
      height: 5rem;
      background-color: $primary;
    }

    .title {
      font-size: 4rem;
      font-weight: bold;
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
