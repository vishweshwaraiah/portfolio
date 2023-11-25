<script setup>
defineProps({
  title: {
    default: '',
    type: String
  },
  subtitle: {
    default: '',
    type: String
  }
})
</script>

<template>
  <div class="master_title section_title">
    <h1 class="title">{{ title }}</h1>
    <h4 class="subtitle">{{ subtitle }}</h4>
  </div>
</template>

<style lang="scss" scoped>
.master_title {
  position: relative;
  background-color: var(--theme-color);
  padding: 1rem 2rem;
  width: auto;
  border-width: 5px 0 5px 0;
  border-style: double;
  border-color: var(--item-color);
  text-transform: uppercase;
  font-weight: bolder;
  margin: auto auto 2rem auto;

  h1.title {
    font-size: 5vw;
  }

  h4.subtitle {
    font-size: 2.5vw;
    padding: 0.625rem;
    border-top: 2px solid var(--item-color);
    border-bottom: 2px solid var(--item-color);
  }

  @include mediaQuery(mobile) {
    h1.title {
      font-size: 8vw;
    }

    h4.subtitle {
      font-size: 4vw;
    }
  }
}
</style>
