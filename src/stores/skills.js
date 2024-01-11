import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useSkillsStore = defineStore('skills', () => {
  const skills = ref([
    'React.js',
    'Vue.js',
    'Node.js',
    'jSon',
    'Technical requirements',
    'Teamwork',
    'Ajax',
    'Business requirements',
    'Responsive design',
    'Git',
    'Problem solving',
    'Code review',
    'Design systems',
    'Debugging',
    'Unit testing',
    'Spring-boot',
    'Sql'
  ])

  const getSkills = computed(() => skills.value)

  return { getSkills }
})

export default useSkillsStore
