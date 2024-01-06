import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useSkillsStore = defineStore('skills', () => {
  const skills = ref([
    'Technical requirements',
    'jSon',
    'Business requirements',
    'Git',
    'Responsive design',
    'Teamwork',
    'Problem solving',
    'Code review',
    'Ajax',
    'Design systems',
    'Debugging',
    'React.js',
    'Vue.js',
    'Node.js',
    'Unit testing',
    'Spring-boot',
    'Sql'
  ])

  const getSkills = computed(() => skills.value)

  return { getSkills }
})

export default useSkillsStore
