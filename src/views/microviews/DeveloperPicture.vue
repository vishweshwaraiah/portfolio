<script setup>
import DevPic from '@/assets/Vishu.jpg'
</script>

<template>
  <div class="dev-picture">
    <span class="triangle"></span>
    <img :src="DevPic" alt="Vishweshwarayya Kj" />
  </div>
</template>

<style lang="scss" scoped>
.dev-picture {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;

  span.triangle {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 0%, 0% 100%, 0% 0%);
    background: var(--header-color);
    top: 0;
    left: 0;
    z-index: 100;
  }

  img {
    width: 50%;
    height: auto;
    border: 1rem solid var(--glob-light);
    border-radius: 25%;
    z-index: 200;
  }
}
</style>
