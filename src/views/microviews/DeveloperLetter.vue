<script setup>
import { ref } from 'vue'
import MasterHrLine from '@/components/MasterHrLine.vue'
import MasterIcon from '@/components/MasterIcon.vue'
import MasterPrintBreak from '@/components/MasterPrintBreak.vue'
import useCoverLetterStore from '@/stores/coverletter.js'

const sectionTitle = 'Cover Letter'

const coverletter = useCoverLetterStore()
const letterContent = coverletter.letterContent

const toName = ref('')

const hirerName = letterContent.hirerName
toName.value = hirerName

const addrLine1 = letterContent.addrLine1
const addrLine2 = letterContent.addrLine2
const addrLine3 = letterContent.addrLine3
const addrLine4 = letterContent.addrLine4
const introDesc = letterContent.intro_desc
const expertiseDesc = letterContent.expertise_desc
const recentProjects = letterContent.recent_projects
const passionDesc = letterContent.passion_desc
const finalWords = letterContent.final_words
const fromDeveloper = letterContent.from_developer
</script>

<template>
  <div class="cover_letter">
    <div class="flex-between">
      <h1 class="section_title">{{ sectionTitle }}</h1>
      <MasterIcon
        svgName="user"
        size="medium"
        fillColor="var(--item-color)"
        hoverColor="var(--theme-color)"
      />
    </div>
    <MasterHrLine thickness="2px" />
    <div class="letter_content">
      <div class="letter_header">
        <div class="strong mb-2">To,</div>
        <input class="strong dear_name mb-2" type="text" v-model.trim="toName" />

        <span class="d-block thin-text">
          <input class="strong addr_name mb-1" type="text" v-model.trim="addrLine1" />
        </span>
        <span class="d-block thin-text">
          <input class="strong addr_name mb-1" type="text" v-model.trim="addrLine2" />
        </span>
        <span class="d-block thin-text">
          <input class="strong addr_name mb-1" type="text" v-model.trim="addrLine3" />
        </span>
        <span class="d-block thin-text">
          <input class="strong addr_name mb-1" type="text" v-model.trim="addrLine4" />
        </span>
        <p class="mt-2 strong dear_name">Dear Mr/Mrs. {{ toName }},</p>
      </div>
      <div class="letter_body">
        <div class="intro_desc mt-3 mb-2">{{ introDesc }}</div>
        <div class="expertise_desc mt-3 mb-2">{{ expertiseDesc }}</div>
        <div class="recent_projects mt-3 mb-2">{{ recentProjects }}</div>
        <div class="passion_desc mt-3 mb-2">{{ passionDesc }}</div>
        <div class="final_words mt-3 mb-2">{{ finalWords }}</div>
      </div>
      <div class="letter_footer from_developer mt-3 mb-1">{{ fromDeveloper }}</div>
    </div>
  </div>
  <MasterPrintBreak />
</template>

<style lang="scss" scoped>
.cover_letter {
  padding: 0 2rem;

  .dear_name,
  .addr_name {
    padding: 0;
    background-color: transparent;
    display: inline-block;

    &:focus-visible {
      padding: 0.625rem;
    }
  }

  .dear_name {
    text-transform: uppercase;
  }
}
</style>
