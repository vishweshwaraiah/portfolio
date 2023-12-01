<script setup>
import useContactStore from '@/stores/contact.js'
import useEducationStore from '@/stores/education.js'
import useSkillsStore from '@/stores/skills.js'
import useExpertiseStore from '@/stores/expertise.js'
import useSocialsStore from '@/stores/socials.js'
import useHobbiesStore from '@/stores/hobbies.js'
import useRefsStore from '@/stores/references.js'
import MasterPrintBreak from '@/components/MasterPrintBreak.vue'
import DeveloperContact from '@/views/microviews/DeveloperContact.vue'
import DeveloperEducation from '@/views/microviews/DeveloperEducation.vue'
import DeveloperSocials from '@/views/microviews/DeveloperSocials.vue'
import DeveloperSkills from '@/views/microviews/DeveloperSkills.vue'
import DeveloperExpertise from '@/views/microviews/DeveloperExpertise.vue'
import DeveloperReferences from '@/views/microviews/DeveloperReferences.vue'
import DeveloperHobbies from '@/views/microviews/DeveloperHobbies.vue'

const contact = useContactStore()
const education = useEducationStore()
const skills = useSkillsStore()
const expertise = useExpertiseStore()
const socials = useSocialsStore()
const hobbies = useHobbiesStore()
const references = useRefsStore()

const devContact = contact.getContact
const devEducation = education.getEducation
const devSocials = socials.getSocials
const devSkills = skills.getSkills
const devExpertise = expertise.getExpertise
const devHobbies = hobbies.getHobbies
const devRefs = references.getReferences
</script>

<template>
  <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
  <DeveloperEducation :devEducation="devEducation" sectionTitle="Education" />
  <DeveloperSocials :devSocials="devSocials" sectionTitle="Social Media" />
  <MasterPrintBreak />
  <DeveloperSkills :devSkills="devSkills" sectionTitle="Skills" />
  <DeveloperExpertise :devExpertise="devExpertise" sectionTitle="Expertise" />
  <DeveloperHobbies :devHobbies="devHobbies" sectionTitle="Hobbies" />
  <DeveloperReferences :devRefs="devRefs" sectionTitle="References" />
</template>
