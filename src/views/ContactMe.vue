<script setup>
const contact = '+91-7353333573'
</script>

<template>
  <div class="contact_me">
    <h1>{{ contact }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.contact_me {
  display: flex;
  width: 100vw;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  color: var(--item-color);
  background-color: var(--theme-color);
  padding: 10%;
  gap: 5%;

  > * {
    text-align: left;
  }
}

@media print {
  .contact_me {
    height: 100vh;
  }
}
</style>
