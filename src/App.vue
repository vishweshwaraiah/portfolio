<script setup>
import { RouterView } from 'vue-router'
import MasterFloater from '@/components/MasterFloater.vue'
import MainMenu from '@/views/MainMenu.vue'
import MasterScrollto from '@/components/MasterScrollto.vue'
</script>

<template>
  <MasterFloater classNames="main_menu" :bodyComponent="MainMenu" />
  <RouterView />
  <MasterScrollto />
</template>
