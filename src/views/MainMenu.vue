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
  padding: 0;

  nav {
    display: inline-flex;
    flex-direction: column;

    a {
      -webkit-app-region: no-drag;
      color: var(--glob-dark);
      font-weight: bold;
      padding: 0.5rem 1rem;
      height: 100%;

      &:not(:last-child) {
        border-bottom: px2rem(2) dotted var(--glob-dark);
      }

      &:focus {
        outline: none;
      }

      &:hover {
        opacity: 0.7;
        background: var(--black-lt);
        color: var(--glob-light);
      }

      &.router-link-exact-active {
        color: var(--primary);

        &:hover {
          color: var(--glob-light);
        }
      }
    }
  }
}
</style>
