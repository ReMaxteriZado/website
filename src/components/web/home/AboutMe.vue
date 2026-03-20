<script setup></script>

<template>
  <div id="about-me" class="about-me">
    <div class="about-me-title">
      <div class="vertical-line">
        <div class="title vertical-line-title">About me</div>
      </div>
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
    width: 23rem;
    height: 5rem;
    position: relative;

    .vertical-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 5rem;
      transition: all 0.3s ease;
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
      width: 100%;
      font-size: 4rem;
      font-weight: bold;
      white-space: nowrap;
      z-index: 0;
    }

    &:hover {
      .vertical-line {
        animation: move-to-left 1s forwards;
      }

      @keyframes move-to-left {
        to {
          width: 100%;
        }
      }
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
