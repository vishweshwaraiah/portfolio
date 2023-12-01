<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { classNames } from '@/utils/globals.js'

const props = defineProps({
  size: {
    default: 'medium',
    type: String
  },
  svgName: {
    default: 'placeholder',
    type: String
  },
  class: {
    default: '',
    type: String
  },
  fillColor: {
    default: 'var(--item-color)',
    type: String
  },
  hoverColor: {
    default: '',
    type: String
  },
  roundSpace: {
    default: '',
    type: String
  },
  bgColor: {
    default: 'var(--bg-color)',
    type: String
  },
  labelAfter: {
    default: '',
    type: String
  },
  labelBefore: {
    default: '',
    type: String
  }
})

const SvgIcon = defineAsyncComponent(() => {
  return import(`@/assets/icons/${props.svgName}.svg`)
})

const svgWrapper = computed(() => {
  const defaults = ['svg-holder']

  defaults.push(props.size)

  if (props.class) {
    defaults.push(props.class)
  }

  if (props.hoverColor) {
    defaults.push('hover-inverse')
  }

  if (props.roundSpace) {
    defaults.push('is_rounded')
  }
  return classNames(defaults)
})

const getSize = computed(() => {
  if (props.size === 'x-large') {
    return '54'
  } else if (props.size === 'large') {
    return '40'
  } else if (props.size === 'medium') {
    return '32'
  } else if (props.size === 'small') {
    return '20'
  } else if (props.size === 'x-small') {
    return '16'
  } else {
    return props.size
  }
})
</script>

<template lang="html">
  <span :class="svgWrapper">
    <label v-if="labelBefore" :class="`label-before ${size}`">{{ labelBefore }}</label>
    <svg class="shadow-svg-dark" :fill="fillColor" :height="getSize" :width="getSize">
      <SvgIcon />
    </svg>
    <label v-if="labelAfter" :class="`label-after ${size}`">{{ labelAfter }}</label>
  </span>
</template>

<style lang="scss">
.svg-holder {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.hover-inverse {
    &:hover svg {
      fill: v-bind(hoverColor);
    }
  }

  &.is_rounded {
    padding: v-bind(roundSpace);
    background: v-bind(bgColor);
    border-radius: 50%;
  }

  .label-before {
    padding-right: 1rem;
    margin-bottom: 0;
  }

  .label-after {
    padding-left: 1rem;
    margin-bottom: 0;
  }
}
</style>
