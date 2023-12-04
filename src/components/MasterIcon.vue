<script setup>
import { ref } from 'vue'
import { defineAsyncComponent, computed } from 'vue'
import { classNames, px2rem } from '@/utils/globals.js'

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

const isRounded = ref('')

if (props.roundSpace !== '') {
  isRounded.value = 'is_rounded'
}

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

  return classNames(defaults)
})

const getSize = computed(() => {
  if (props.size === 'x-large') {
    return px2rem(48)
  } else if (props.size === 'large') {
    return px2rem(40)
  } else if (props.size === 'medium') {
    return px2rem(32)
  } else if (props.size === 'small') {
    return px2rem(24)
  } else if (props.size === 'x-small') {
    return px2rem(16)
  } else {
    return props.size
  }
})
</script>

<template lang="html">
  <span :class="svgWrapper">
    <label v-if="labelBefore" :class="`label-before ${size}`">{{ labelBefore }}</label>
    <svg :class="`shadow-svg-dark ${isRounded}`" :fill="fillColor">
      <SvgIcon />
    </svg>
    <label v-if="labelAfter" :class="`label-after ${size}`">{{ labelAfter }}</label>
  </span>
</template>

<style lang="scss">
.svg-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;

  &.hover-inverse {
    &:hover svg {
      fill: v-bind(hoverColor);
    }
  }

  svg {
    height: v-bind(getSize);
    width: v-bind(getSize);

    &.is_rounded {
      padding: v-bind(roundSpace);
      background: v-bind(bgColor);
      border-radius: 50%;
    }
  }

  .label-before {
    flex: 1;
    padding-right: 1rem;
    margin-bottom: 0;
  }

  .label-after {
    flex: 1;
    padding-left: 1rem;
    margin-bottom: 0;
  }
}

@media print {
  .svg-holder {
    &.is_rounded {
      align-self: center;
    }

    &.x-small,
    &.small,
    &.medium,
    &.large,
    &.x-large {
      height: 100%;
    }
  }
}
</style>
