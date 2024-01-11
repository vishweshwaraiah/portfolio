import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      project_duration: {
        from: 'Oct 2021',
        to: 'Present',
        type: 'Full-Time'
      },
      project_name: 'Tuxedo Design System',
      project_client: 'J P Morgan Chase',
      project_location: 'Bengaluru, Karnataka',
      project_description:
        "It's a Design system project that solves and minimizes design issues throughout the firm.",
      work_skills: [
        'React JS',
        'Angular JS',
        'JavaScript',
        'Stencil Js',
        'HTML5',
        'CSS3',
        'Spring Boot',
        'Node JS'
      ],
      project_link: 'internal'
    },
    {
      project_duration: {
        from: 'Apr 2020',
        to: 'Oct 2021',
        type: 'Full-Time'
      },
      project_name: 'KFC @ Cognizant',
      project_client: 'YUM India',
      project_location: 'Bengaluru, Karnataka',
      project_description: 'A project for fast food restaurant chain that sells food online.',
      work_skills: [
        'React JS',
        'Redux',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Spring Boot',
        'JPA',
        'Node JS'
      ],
      project_link: 'https://online.kfc.co.in/'
    },
    {
      project_duration: {
        from: 'Oct 2019',
        to: 'Apr 2020',
        type: 'Full-Time'
      },
      project_name: 'Macys @ Cognizant',
      project_client: "Macy's India",
      project_location: 'Bengaluru, Karnataka',
      project_description: 'An online clothing and accessories modern department store project.',
      work_skills: [
        'React JS',
        'Redux',
        'Vue JS',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Node JS',
        'Micro-frontends'
      ],
      project_link: 'https://www.macys.com/'
    },
    {
      project_duration: {
        from: 'Apr 2018',
        to: 'Aug 2019',
        type: 'Full-Time'
      },
      project_name: 'Decipher @ Kalpavruksh',
      project_client: 'FocusVision',
      project_location: 'Bengaluru, Karnataka',
      project_description:
        "It's an online surveying and reporting project like google survey and forms.",
      work_skills: [
        'React JS',
        'Redux',
        'JQuery',
        'NStyles',
        'Node JS',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Micro-frontends'
      ],
      project_link: 'https://www.forsta.com/company/legacy-brands/'
    },
    {
      project_duration: {
        from: 'Jan 2017',
        to: 'Mar 2018',
        type: 'Full-Time'
      },
      project_name: 'FCDD @ IBM',
      project_client: 'IBM India',
      project_location: 'Bengaluru, Karnataka',
      project_description: "It's an online Financial Crimes Due Diligence project with IBM Watson.",
      work_skills: [
        'React JS',
        'Redux',
        'JQuery',
        'Node JS',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Core-Java',
        'D3 JS'
      ],
      project_link: 'internal'
    },
    {
      project_duration: {
        from: 'Jun 2014',
        to: 'Nov 2016',
        type: 'Full-Time'
      },
      project_name: 'Capricoast',
      project_client: 'Capricoast Home Solutions',
      project_location: 'Bengaluru, Karnataka',
      project_description:
        "It's an online shopping project that sells modular-kitchens, wardrobes and other home utils.",
      work_skills: [
        'JQuery',
        'JavaScript',
        'PHP',
        'MySQL',
        'HTML5',
        'CSS3',
        'Spring MVC',
        'Hibernate'
      ],
      project_link: 'https://www.homelane.com/'
    }
  ])

  const getProjects = computed(() => projects.value)

  return { getProjects }
})

export default useProjectsStore
