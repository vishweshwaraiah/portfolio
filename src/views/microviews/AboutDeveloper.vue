<script setup>
import MasterIcon from '@/components/MasterIcon.vue'
import MasterHrLine from '@/components/MasterHrLine.vue'
import { dateDiffer } from '@/utils/globals.js'

const from = new Date('January 2013Z')

const diffDate = dateDiffer({ from, format: 'Y+' })

defineProps({
  content: {
    default: () => {},
    type: Object
  },
  sectionTitle: {
    default: 'Objective',
    type: String
  }
})
</script>

<template>
  <div class="about_developer">
    <div class="flex-between">
      <h1 class="section_title">{{ sectionTitle }}</h1>
      <MasterIcon
        svgName="others-list"
        size="medium"
        fillColor="var(--item-color)"
        hoverColor="var(--theme-color)"
      />
    </div>
    <MasterHrLine thickness="2px" />
    <p class="developer_aim" v-if="content.developer_aim">
      {{ content.developer_aim }}
    </p>
    <p class="developer_exp" v-if="content.developer_exp">
      {{ `${diffDate} ${content.developer_exp}` }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.about_developer {
  padding: 2rem;
}
</style>
