<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
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

const methodClick = () => {
  isVisible.value = false
}

const printPage = () => {
  window?.print()
  methodClick()
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
      <header class="menu">
        <nav>
          <RouterLink to="/" @click="methodClick">Resume</RouterLink>
          <RouterLink to="/coverletter" @click="methodClick">Cover Letter</RouterLink>
          <RouterLink :to="{}" @click="printPage">Print Profile</RouterLink>
        </nav>
      </header>
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
}

@media print {
  .floating_box {
    display: none;
  }
}
</style>