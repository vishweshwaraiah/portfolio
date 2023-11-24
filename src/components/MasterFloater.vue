<script setup>
import { ref } from 'vue'
import MasterIcon from '@/components/MasterIcon.vue'
import ActionOutside from '@/utils/ActionOutside.js'

defineProps({
  bodyComponent: {
    default: 'span',
    type: [Object, String]
  },
  classNames: {
    default: '',
    type: String
  },
  top: {
    default: 'auto',
    type: String
  },
  right: {
    default: 'auto',
    type: String
  },
  bottom: {
    default: 'auto',
    type: String
  },
  left: {
    default: 'auto',
    type: String
  }
})

const isVisible = ref(false)
const target = ref(null)

ActionOutside(target, 'click', () => {
  isVisible.value = false
})

const toggleMenu = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div :class="`floating_box ${classNames}`" ref="target">
    <MasterIcon
      svgName="menu-bars"
      size="medium"
      fillColor="var(--item-color)"
      class="floating_btn"
      @click="toggleMenu"
      title="Floating Menu"
    />
    <div v-if="isVisible" class="floating_menu">
      <component :is="bodyComponent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.floating_box {
  position: relative;

  .floating_btn {
    @include floatingBox(top_left);
    height: px2rem(60);
    width: px2rem(60);
    border-radius: px2rem(50);

    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  .floating_menu {
    @include floatingBox(top_left, 76);
    width: auto;
    white-space: nowrap;
  }
}

@media print {
  .floating_box {
    display: none;
  }
}
</style>
