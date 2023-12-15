<script setup>
import DeveloperTitle from '@/views/microviews/DeveloperTitle.vue'
import MasterTemplate from '@/views/microviews/MasterTemplate.vue'
import DeveloperPicture from '@/views/microviews/DeveloperPicture.vue'
import DeveloperContact from '@/views/microviews/DeveloperContact.vue'
import ProjectsGrid from './microviews/ProjectsGrid.vue'
import useContactStore from '@/stores/contact.js'
import useProjectsStore from '@/stores/projects'

const contact = useContactStore()
const devContact = contact.getContact

const projects = useProjectsStore()
const projectsList = projects.getProjects

const subTitle = 'Senior Fullstack Developer'
const devTitle = 'Vishweshwarayya K J'
const sectionTitle = 'Projects'
</script>

<template>
  <MasterTemplate class="worked_projects">
    <template #sidebar>
      <DeveloperPicture :hasTriangle="true" />
      <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
    </template>
    <template #content>
      <DeveloperTitle :title="devTitle" :subtitle="subTitle" />
      <ProjectsGrid :projectsList="projectsList" :sectionTitle="sectionTitle" />
    </template>
  </MasterTemplate>
</template>

<style>
.worked_projects {
  display: block;
}
</style>
