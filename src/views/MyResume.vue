<script setup>
import useExperiencesStore from '@/stores/experiences.js'
import useAboutDevStore from '@/stores/aboutdev.js'
import DeveloperTitle from '@/subviews/DeveloperTitle.vue'
import MasterTemplate from '@/subviews/MasterTemplate.vue'
import WorkExperience from '@/subviews/WorkExperience.vue'
import DeveloperPicture from '@/subviews/DeveloperPicture.vue'
import AboutDeveloper from '@/subviews/AboutDeveloper.vue'
import PersonalDetails from '@/subviews/PersonalDetails.vue'
import Responsibilities from '@/subviews/Responsibilities.vue'

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
