<style lang="scss">
.master-btn {
  display: initial;
  padding: px2rem(8);
  border-radius: var(--radius-medium);

  &__large {
    width: 2rem;
    height: 2rem;
    font-size: var(--large);
  }
}
</style>
<template lang="html">
  <button @click="onClick" :class="buttonWrapper" :style="{ width: width }">
    <slot>Button</slot>
  </button>
</template>
<script setup>
import { computed } from 'vue'
import { RemoveMultiSpaces } from '@/utils/globals'

const props = defineProps({
  onClick: {
    type: Function,
    required: true
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'small'
  },
  width: {
    type: String,
    default: 'auto'
  }
})

const buttonWrapper = computed(() => {
  const defClasses = 'master-btn btn'
  const btnSize = `btn-${props.size}`
  const btnVariant = `btn-${props.variant}`
  const combined = `${defClasses} ${btnSize} ${btnVariant}`
  return RemoveMultiSpaces(combined)
})
</script>
