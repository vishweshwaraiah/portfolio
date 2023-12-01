import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useExpertiseStore = defineStore('expertise', () => {
  const expertise = ref([
    'Web Developement',
    'JavaScript',
    'Recat JS / Vue JS',
    'Object Oriented Methodologies',
    'Cascading Style Sheets / SCSS',
    'Project Management'
  ])

  const getExpertise = computed(() => expertise.value)

  return { getExpertise }
})

export default useExpertiseStore
