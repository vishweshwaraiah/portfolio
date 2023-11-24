<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="menu">
    <nav>
      <RouterLink to="/">Resume</RouterLink>
      <RouterLink to="/coverletter">Cover Letter</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.menu {
  padding: 1rem;

  nav {
    display: inline-flex;
    gap: px2rem(10);
    flex-direction: column;

    a {
      -webkit-app-region: no-drag;
      background-color: var(--menu-color);
      border-radius: var(--radius-default);
      box-shadow: boxShadow(menu);
      color: var(--glob-dark);
      font-weight: bold;
      padding: 0 1rem;
      height: 100%;

      &:focus {
        outline: none;
      }

      &.router-link-exact-active {
        color: var(--glob-light);
      }
    }
  }
}
</style>
