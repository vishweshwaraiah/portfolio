<script setup>
import DeveloperTitle from '@/views/microviews/DeveloperTitle.vue'
import MasterTemplate from '@/views/microviews/MasterTemplate.vue'
import DeveloperPicture from '@/views/microviews/DeveloperPicture.vue'
import DeveloperContact from '@/views/microviews/DeveloperContact.vue'
import DeveloperLetter from '@/views/microviews/DeveloperLetter.vue'
import useContactStore from '@/stores/contact.js'

const contact = useContactStore()
const devContact = contact.getContact

const subTitle = 'Senior Fullstack Developer'
const devTitle = 'Vishweshwarayya K J'
</script>

<template>
  <MasterTemplate class="cover_letter">
    <template #sidebar>
      <DeveloperPicture :hasTriangle="true" />
      <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
    </template>
    <template #content>
      <DeveloperTitle :title="devTitle" :subtitle="subTitle" />
      <DeveloperLetter />
    </template>
  </MasterTemplate>
</template>

<style></style>
