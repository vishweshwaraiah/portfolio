<script setup>
import { ref } from 'vue'
import useSkillsStore from '@/stores/skills.js'
import DeveloperPicture from '@/views/microviews/DeveloperPicture.vue'
import MasterButton from '@/components/MasterButton.vue'
import MasterAnimate from '@/components/MasterAnimate.vue'
import { useRouter } from 'vue-router'

const devName = 'Vishweshwarayya Kj'

const router = useRouter()
const skills = useSkillsStore()

const devSkills = skills.getSkills

const hlText = ref(['frontend'])

const toProfile = () => {
  router.push('/profile')
}

const toProjects = () => {
  router.push('/projects')
}

const toContact = () => {
  router.push('/contact')
}

const textContent =
  "I'm a Frontend heavy full-stack developer based in Bengaluru, I'm passionate about creating cutting-edge, pixel-perfect, beautiful user interfaces."

const skillsContent = () => {
  const text = 'Some of my skills includes'
  const skillsText = devSkills.reduce((acc, skill, idx) => {
    if (idx !== 0) {
      acc += ', ' + skill
    } else {
      acc += skill
    }
    return acc
  })

  return textContent + ' ' + text + ' ' + skillsText
}
</script>

<template>
  <div class="my_portfolio">
    <DeveloperPicture class="dev_pic" width="100%" />
    <div class="dev_details">
      <div class="dev_title wobble mb-3">
        <span class="dev_greet">Hello, I'm</span>
        <h1 class="dev_name">{{ devName }}</h1>
      </div>
      <div class="dev_brief">
        <div class="dev_desc mb-3">
          <MasterAnimate :textContent="skillsContent()" :highlights="hlText" />
        </div>
        <MasterButton :onClick="toProfile" class="mr-2" variant="dark" size="medium">
          Profile
        </MasterButton>
        <MasterButton :onClick="toProjects" class="mx-2" variant="tertiary" size="medium">
          Projects
        </MasterButton>
        <MasterButton :onClick="toContact" class="ml-2" variant="light" size="medium">
          Contact
        </MasterButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my_portfolio {
  display: flex;
  width: 100vw;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: auto;
  color: var(--item-color);
  background-color: var(--theme-color);
  padding: 10%;
  gap: 5%;

  > * {
    text-align: left;
  }

  .dev_pic {
    width: 40%;
  }

  .dev_details {
    width: 60%;

    .dev_brief {
      font-size: px2rem(18);
    }
  }

  .dev_title {
    font-weight: bold;
    .dev_greet {
      font-size: px2rem(35);
    }
    .dev_name {
      font-size: px2rem(70);
    }
  }
}

@include mediaQuery(tablet, laptop) {
  .my_portfolio {
    flex-direction: column;
    padding: 2%;
    padding-bottom: 2rem;

    .dev_pic {
      width: 60%;
      margin: auto;
    }

    .dev_details {
      width: 80%;
    }

    .dev_title {
      .dev_greet {
        font-size: px2rem(24);
      }
      .dev_name {
        font-size: px2rem(48);
      }
    }
  }
}

@include mediaQuery(mobile) {
  .my_portfolio {
    flex-direction: column;
    padding: 1%;
    padding-bottom: 2rem;

    .dev_pic,
    .dev_details {
      width: 80%;
    }

    .dev_title {
      .dev_greet {
        font-size: px2rem(16);
      }
      .dev_name {
        font-size: px2rem(32);
      }
    }
  }
}

@media print {
  .my_portfolio {
    height: 100vh;
  }
}
</style>
