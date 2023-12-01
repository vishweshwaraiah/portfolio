<script setup>
import DeveloperTitle from '@/views/microviews/DeveloperTitle.vue'
import MasterTemplate from '@/views/microviews/MasterTemplate.vue'
import WorkExperience from '@/views/microviews/WorkExperience.vue'
import DeveloperPicture from '@/views/microviews/DeveloperPicture.vue'
import AboutDeveloper from '@/views/microviews/AboutDeveloper.vue'
import PersonalDetails from '@/views/microviews/PersonalDetails.vue'
import useExperiencesStore from '@/stores/experiences.js'
import useAboutDevStore from '@/stores/aboutdev.js'
import Responsibilities from '@/views/microviews/Responsibilities.vue'

const aboutDev = useAboutDevStore()
const aboutDevData = aboutDev.getAboutDev

const experiences = useExperiencesStore()
const experiencesData = experiences.getExperiences

const subTitle = 'Senior Fullstack Developer'
const devTitle = 'Vishweshwarayya K J'
const sectionTitle = 'Work Experience'
</script>

<template>
  <MasterTemplate class="my_resume">
    <template #sidebar>
      <DeveloperPicture :hasTriangle="true" />
      <PersonalDetails />
    </template>
    <template #content>
      <AboutDeveloper :content="aboutDevData" />
      <DeveloperTitle :title="devTitle" :subtitle="subTitle" />
      <WorkExperience :sectionTitle="sectionTitle" :workExpList="experiencesData" />
      <Responsibilities />
    </template>
  </MasterTemplate>
</template>
