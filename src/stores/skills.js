import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useSkillsStore = defineStore('skills', () => {
  const skills = ref([
    'Business Requirements',
    'JSON',
    'Technical Requirements',
    'Git',
    'Responsive Design',
    'Teamwork',
    'Problem Solving',
    'Ajax',
    'Code Review',
    'Unit Testing',
    'Debugging',
    'Stencil JS',
    'Design Systems',
    'Spring-Boot',
    'Hibernate',
    'Node.Js',
    'SQL'
  ])

  const getSkills = computed(() => skills.value)

  return { getSkills }
})

export default useSkillsStore
