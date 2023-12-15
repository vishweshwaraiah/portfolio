<script setup>
import DetailsBadge from '@/views/microviews/DetailsBadge.vue'
import MasterIcon from '@/components/MasterIcon.vue'
import MasterHrLine from '@/components/MasterHrLine.vue'

defineProps({
  projectsList: {
    type: Array,
    default: () => []
  },
  sectionTitle: {
    type: String,
    default: ''
  }
})

const isInternal = (project) => {
  return project.project_link === 'internal'
}
</script>

<template>
  <div class="projects_grid">
    <div class="flex-between">
      <h1 class="section_title">{{ sectionTitle }}</h1>
      <MasterIcon
        svgName="company"
        size="medium"
        fillColor="var(--item-color)"
        hoverColor="var(--theme-color)"
      />
    </div>
    <MasterHrLine thickness="2px" />
    <div class="grid-container grids_2">
      <div class="grid-item card has_space" v-for="(project, idx) in projectsList" :key="idx">
        <div class="card-header">
          <DetailsBadge
            class="project_duration"
            :content="project.project_duration"
            textColor="var(--glob-dark)"
            bgColor="var(--theme-color)"
            :isFantasy="true"
          />
          <div class="project_title">
            <h4 class="project_name section_title">{{ project.project_name }}</h4>

            <div class="flex-start">
              <MasterIcon
                svgName="company"
                size="x-small"
                fillColor="var(--item-color)"
                hoverColor="var(--theme-color)"
              />
              <span>{{ project.project_client }}</span>
            </div>

            <div class="flex-start">
              <MasterIcon
                svgName="location"
                size="x-small"
                fillColor="var(--item-color)"
                hoverColor="var(--theme-color)"
              />
              <span>{{ project.project_location }}</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <span class="">
            {{ project.project_description }}
          </span>
          <span class="project_link">
            <MasterIcon
              svgName="link"
              size="small"
              fillColor="var(--bg-color)"
              hoverColor="var(--theme-color)"
            />
            <span v-if="isInternal(project)">Internal Project</span>
            <a v-else :href="project.project_link" target="_blank">Project Link</a>
          </span>
          <MasterHrLine marginTop="5px" marginBottom="5px" thickness="1px" />
          <div class="work_skills">
            <DetailsBadge
              v-for="(skill, idx) in project.work_skills"
              class="skill_name"
              :content="skill"
              :key="idx"
              textColor="var(--bg-color)"
              bgColor="var(--secondary)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects_grid {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  .grid-item {
    padding: px2rem(10);
    text-align: left;
  }

  .card > .card-header {
    display: flex;
    align-items: center;
    gap: px2rem(10);

    .project_name {
      margin-bottom: px2rem(10);
    }
  }

  .card > .card-body {
    .project_link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: px2rem(10);
      padding-top: px2rem(5);
      padding-bottom: px2rem(5);
    }

    .work_skills .skill_name {
      margin-right: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
