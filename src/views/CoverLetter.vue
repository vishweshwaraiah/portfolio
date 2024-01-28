<script setup>
import DeveloperTitle from '@/subviews/DeveloperTitle.vue'
import MasterTemplate from '@/subviews/MasterTemplate.vue'
import DeveloperPicture from '@/subviews/DeveloperPicture.vue'
import DeveloperContact from '@/subviews/DeveloperContact.vue'
import DeveloperLetter from '@/subviews/DeveloperLetter.vue'
import useContactStore from '@/stores/contact.js'

const contact = useContactStore()
const devContact = contact.getContact

const subTitle = 'Senior Fullstack Developer'
const devTitle = 'Vishweshwarayya K J'
</script>

<template>
  <MasterTemplate class="cover_letter">
    <template #sidebar>
      <DeveloperPicture :hasTriangle="true" :isSvg="true" width="15vw" />
      <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
    </template>
    <template #content>
      <DeveloperTitle :title="devTitle" :subtitle="subTitle" />
      <DeveloperLetter />
    </template>
  </MasterTemplate>
</template>

<style>
.cover_letter {
  display: block;
}
</style>
