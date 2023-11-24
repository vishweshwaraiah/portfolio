<script setup>
import { RouterView } from 'vue-router'
import MasterFloater from '@/components/MasterFloater.vue'
import MasterScrollto from '@/components/MasterScrollto.vue'
</script>

<template>
  <MasterFloater classNames="main_menu" />
  <RouterView />
  <MasterScrollto />
</template>
