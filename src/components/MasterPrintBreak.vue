<script setup>
const props = defineProps({
  action: {
    default: 'always',
    type: String
  }
})

const breakClass = () => {
  if (props.action === 'always') {
    return 'page_break'
  } else {
    return 'avoid_break'
  }
}
</script>

<template lang="html">
  <div :class="breakClass()"></div>
</template>

<style lang="scss" scoped>
@media print {
  .page_break {
    page-break-after: always;
    margin-bottom: 2rem;
  }

  .avoid_break {
    page-break-inside: avoid;
  }
}
</style>
