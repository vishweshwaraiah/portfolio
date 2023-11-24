<script setup>
import DeveloperTitle from '@/views/microviews/DeveloperTitle.vue'
import MasterTemplate from '@/views/microviews/MasterTemplate.vue'
import WorkExperience from '@/views/microviews/WorkExperience.vue'
import DeveloperPicture from '@/views/microviews/DeveloperPicture.vue'
import AboutDeveloper from '@/views/microviews/AboutDeveloper.vue'
import PersonalDetails from '@/views/microviews/PersonalDetails.vue'
import WorkExpList from '@/stores/data/WorkExperience.js'
import AboutDev from '@/stores/data/AboutDeveloper.js'
import PersonalData from '@/stores/data/PersonalDetails.js'
</script>

<template>
  <MasterTemplate class="my_resume">
    <template #sidebar>
      <DeveloperPicture />
      <PersonalDetails :details="PersonalData" />
    </template>
    <template #content>
      <AboutDeveloper :content="AboutDev" />
      <DeveloperTitle title="Vishweshwarayya K J" subtitle="Senior Fullstack Developer" />
      <WorkExperience sectionTitle="Work Experience" :workExpList="WorkExpList" />
    </template>
  </MasterTemplate>
</template>
