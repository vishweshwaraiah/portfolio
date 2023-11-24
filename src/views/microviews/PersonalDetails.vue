<script setup>
import { ref, onMounted } from 'vue'
import { IsValidObject } from '@/utils/globals.js'
import MasterIcon from '@/components/MasterIcon.vue'
import MasterHrLine from '@/components/MasterHrLine.vue'
import DetailsBadge from '@/views/microviews/DetailsBadge.vue'
import MasterPrintBreak from '@/components/MasterPrintBreak.vue'

const props = defineProps({
  details: {
    default: () => {},
    type: Object
  }
})

const devContact = ref([])
const devEducation = ref([])
const socialMedia = ref([])
const devSkills = ref([])
const devExpertise = ref([])
const devHobbies = ref([])

onMounted(() => {
  if (IsValidObject(props.details)) {
    devContact.value = props.details.contact
    devEducation.value = props.details.education
    socialMedia.value = props.details.social
    devSkills.value = props.details.skills
    devExpertise.value = props.details.expertise
    devHobbies.value = props.details.hobbies
  }
})
</script>

<template>
  <div class="dev_contact">
    <div class="flex-between">
      <h3 class="section_title">Contact</h3>
      <MasterIcon
        svgName="contact"
        size="medium"
        fillColor="var(--bg-color)"
        :hoverInverse="true"
      />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <span class="contact_line" v-for="(line, i) in devContact" :key="i">
      <MasterIcon
        :svgName="line.iconName"
        size="small"
        fillColor="var(--glob-dark)"
        :hoverInverse="true"
        roundSpace="8px"
        bgColor="var(--theme-one)"
        :title="line.iName"
      />
      <span class="line_name" :title="line.iName">{{ line.iValue }}</span>
    </span>
  </div>
  <MasterPrintBreak />
  <div class="dev_education">
    <div class="flex-between">
      <h3 class="section_title">Education</h3>
      <MasterIcon svgName="degree" size="medium" fillColor="var(--bg-color)" :hoverInverse="true" />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <div class="education_line" v-for="(line, i) in devEducation" :key="i">
      <label class="passed_year">
        <DetailsBadge
          class="year"
          :content="line.year"
          textColor="var(--bg-color)"
          bgColor="var(--secondary)"
        />
      </label>
      <div class="strong">{{ line.name }}</div>
      <div class="strong x-small italic">{{ line.institute }}</div>
      <div class="strong x-small italic mb-2">{{ line.location }}</div>
      <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    </div>
  </div>

  <div class="dev_social">
    <div class="flex-between">
      <h3 class="section_title">Social Media</h3>
      <MasterIcon
        svgName="message"
        size="medium"
        fillColor="var(--bg-color)"
        :hoverInverse="true"
      />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <div class="social_line" v-for="(line, i) in socialMedia" :key="i">
      <MasterIcon
        :svgName="line.iconName"
        size="medium"
        fillColor="var(--glob-dark)"
        :hoverInverse="true"
        bgColor="var(--theme-one)"
        :title="line.iName"
      />
      <span class="social_id">{{ line.iValue }}</span>
    </div>
  </div>

  <div class="dev_skills">
    <div class="flex-between">
      <h3 class="section_title">Skills</h3>
      <MasterIcon svgName="skills" size="medium" fillColor="var(--bg-color)" :hoverInverse="true" />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <div class="skills_line">
      <DetailsBadge
        v-for="(line, i) in devSkills"
        :key="i"
        class="skill_name"
        :content="line"
        textColor="var(--item-color)"
        bgColor="var(--theme-one)"
      />
    </div>
  </div>

  <div class="dev_expertise">
    <div class="flex-between">
      <h3 class="section_title">Expertise</h3>
      <MasterIcon svgName="expert" size="medium" fillColor="var(--bg-color)" :hoverInverse="true" />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <div class="expertise_line">
      <span v-for="(line, i) in devExpertise" :key="i" class="expertise_name">
        {{ i + 1 + '. ' + line }}
      </span>
    </div>
  </div>

  <div class="dev_hobbies">
    <div class="flex-between">
      <h3 class="section_title">Hobbies</h3>
      <MasterIcon svgName="expert" size="medium" fillColor="var(--bg-color)" :hoverInverse="true" />
    </div>
    <MasterHrLine thickness="1px" hrColor="var(--glob-light)" />
    <div class="hobbies_line">
      <span v-for="(line, i) in devHobbies" :key="i" class="hobbies_name">
        <MasterIcon
          :svgName="line.iconName"
          size="large"
          fillColor="var(--item-color)"
          :hoverInverse="true"
          roundSpace="10%"
          bgColor="var(--theme-one)"
          :title="line.iName"
        />
        <label>{{ line.iName }}</label>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin parentBox() {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-bottom: 2rem;

  .section_title {
    padding-left: px2rem(5);
  }
}

.dev_contact,
.dev_education,
.dev_social,
.dev_skills,
.dev_expertise,
.dev_hobbies {
  @include parentBox();
}

.dev_contact .contact_line {
  display: flex;
  align-items: center;
  padding: 0.25rem;

  .line_name {
    padding-left: px2rem(10);
  }
}

.dev_education .education_line {
  padding-left: px2rem(5);

  .passed_year {
    display: block;
  }
}

.dev_social .social_line {
  display: flex;
  align-items: center;
  padding: 0.25rem;

  .social_id {
    padding-left: px2rem(10);
  }
}

.dev_skills .skills_line {
  padding: 0.25rem;

  .skill_name {
    display: inline-block;
    margin: 0 px2rem(5) px2rem(5) 0;
  }
}

.dev_expertise .expertise_line {
  padding: 0.25rem;

  .expertise_name {
    display: block;
    padding: px2rem(10) 0;
    text-transform: uppercase;
    font-weight: bolder;
  }
}

.dev_hobbies .hobbies_line {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: px2rem(8);

  .hobbies_name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      margin-top: px2rem(8);
    }
  }
}
</style>
