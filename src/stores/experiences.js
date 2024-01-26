import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useExperiencesStore = defineStore('experiences', () => {
  const experiences = ref([
    {
      exp_details: {
        from: 'Oct 2021',
        to: 'Present',
        type: 'Full-Time'
      },
      job_title: 'Senior Associate',
      job_company: 'J P Morgan Chase & Co.',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        "It's a Design system project that solves and minimizes design issues throughout the firm. I'm Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices.",
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
      print_break: false,
      print_margin: false
    },
    {
      exp_details: {
        from: 'Oct 2019',
        to: 'Oct 2021',
        type: 'Full-Time'
      },
      job_title: 'Senior Associate',
      job_company: 'Cognizant Technologies Solutions',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        "I was Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices. Worked on Projects like Macy's and KFC India.",
      work_skills: [
        'React JS',
        'Redux',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Spring Boot',
        'JPA',
        'Node JS',
        'AWS'
      ],
      print_break: false,
      print_margin: false
    },
    {
      exp_details: {
        from: 'Apr 2018',
        to: 'Aug 2019',
        type: 'Full-Time'
      },
      job_title: 'Senior Software Developer',
      job_company: 'Kalpavruksh Systems Ltd',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        'I was Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices. Worked with clients on an online surveying and reporting project like google survey and forms.',
      work_skills: [
        'React JS',
        'Redux',
        'JQuery',
        'NStyles',
        'Node JS',
        'JavaScript',
        'HTML5',
        'CSS3'
      ],
      print_break: true,
      print_margin: false
    },
    {
      exp_details: {
        from: 'Jan 2017',
        to: 'Mar 2018',
        type: 'Full-Time'
      },
      job_title: 'Senior System Engineer',
      job_company: 'IBM India Private Ltd',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        'I was Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices. Worked on an online Financial Crimes Due Diligence project with IBM Watson.',
      work_skills: [
        'React JS',
        'Vue Js',
        'Redux',
        'Vuex',
        'Node JS',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Core-Java',
        'D3 JS'
      ],
      print_break: false,
      print_margin: true // bcz we need a page break after previous item
    },
    {
      exp_details: {
        from: 'Jun 2014',
        to: 'Nov 2016',
        type: 'Full-Time'
      },
      job_title: 'Software Engineer',
      job_company: 'Capricoast Home Solutions Pvt Ltd',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        'I was Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices. Worked on an online shopping project that sells modular-kitchens, wardrobes and other home utils.',
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
      print_break: false,
      print_margin: false
    },
    {
      exp_details: {
        from: 'Jan 2013',
        to: 'Feb 2014',
        type: 'Full-Time'
      },
      job_title: 'Web Developer',
      job_company: 'Ind-Global Consultancy Solutions Pvt Ltd',
      job_location: 'Bengaluru, Karnataka',
      work_description:
        'I was Responsible to Write Best, Efficient, Testable Code Using Standard Software development practices. Worked on multiple small scale projects.',
      work_skills: [
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'PHP',
        'WordPress',
        'Magento',
        'OpenCart',
        'jQuery'
      ],
      print_break: false,
      print_margin: false
    }
  ])

  const getExperiences = computed(() => experiences.value)

  return { getExperiences }
})

export default useExperiencesStore
