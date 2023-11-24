<script setup></script>

<template>
  <main class="main_template">
    <div class="main_sidebar">
      <slot name="sidebar"> </slot>
    </div>
    <div class="main_content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main_template {
  display: flex;

  @mixin commonCode {
    position: relative;
    flex: 1 0 auto;
    height: auto;
  }
  .main {
    &_sidebar {
      @include commonCode();
      display: flex;
      flex-direction: column;
      width: calc(30vw - 0.5rem);
      background: var(--sidebar-bg-color);
      color: var(--sidebar-txt-color);
    }

    &_content {
      @include commonCode();
      display: block;
      width: calc(70vw - 0.5rem);
      background: var(--bg-color);
      color: var(--item-color);
    }
  }
}
</style>
