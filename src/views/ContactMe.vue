<script setup>
import RootTemplate from '@/subviews/RootTemplate.vue'

const contact = '+91-7353333573'
</script>

<template>
  <RootTemplate class="contact_me">
    <h4>Call me on</h4>
    <h1>{{ contact }}</h1>
  </RootTemplate>
</template>

<style lang="scss" scoped>
.contact_me {
  flex-direction: column;
  justify-content: center;

  > * {
    text-align: left;
  }
}
</style>
