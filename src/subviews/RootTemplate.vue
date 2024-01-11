<script setup></script>

<template>
  <main class="root_template">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.root_template {
  display: flex;
  width: 100vw;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  height: 100%;
  color: var(--item-color);
  background-color: var(--theme-color);
  padding: 0 10%;
  gap: 5%;
}
</style>
