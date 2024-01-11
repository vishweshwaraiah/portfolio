<script setup>
import MasterIcon from '@/components/MasterIcon.vue'
import MasterHrLine from '@/components/MasterHrLine.vue'
import MasterPrintBreak from '@/components/MasterPrintBreak.vue'

defineProps({
  devContact: {
    default: () => [],
    type: Array
  },
  sectionTitle: {
    default: '',
    type: String
  }
})
</script>

<template>
  <div class="personal_details dev_contact">
    <div class="flex-between">
      <h3 class="section_title">{{ sectionTitle }}</h3>
      <MasterIcon
        svgName="contact"
        size="medium"
        fillColor="var(--bg-color)"
        hoverColor="var(--theme-color)"
      />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <span class="contact_line" v-for="(line, i) in devContact" :key="i">
      <MasterIcon
        :svgName="line.iconName"
        size="medium"
        fillColor="var(--glob-dark)"
        hoverColor="var(--theme-color)"
        roundSpace="5px"
        bgColor="var(--theme-color)"
        :title="line.iName"
        :labelAfter="line.iValue"
        class="line_name"
      />
    </span>
    <MasterPrintBreak action="avoid" />
  </div>
</template>

<style lang="scss" scoped>
.dev_contact .contact_line {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
</style>
