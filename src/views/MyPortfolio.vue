<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { openLink } from '@/utils/globals.js'
import { linkedIn, github } from '@/utils/constants.js'
import useSkillsStore from '@/stores/skills.js'
import DeveloperPicture from '@/subviews/DeveloperPicture.vue'
import MasterButton from '@/components/MasterButton.vue'
import MasterAnimate from '@/components/MasterAnimate.vue'
import MasterIcon from '@/components/MasterIcon.vue'

const devName = 'Vishweshwarayya'

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

const skillsContent = () => {
  const aboutContent =
    "I'm a Frontend heavy full-stack developer based in Bengaluru. I'm passionate about creating cutting-edge, pixel-perfect, beautiful user interfaces."

  const text = 'Some of my skills includes'

  const skillsText = devSkills.reduce((acc, skill, idx) => {
    if (idx !== 0) {
      acc += ', ' + skill
    } else {
      acc += skill
    }
    return acc
  })

  return aboutContent + ' ' + text + ' ' + skillsText
}

const goTo = (type) => {
  if (type === 'github') {
    openLink(github)
  } else {
    openLink(linkedIn)
  }
}
</script>

<template>
  <div class="my_portfolio">
    <DeveloperPicture class="dev_pic" width="100%" />
    <div class="dev_details">
      <div class="dev_title wobble mb-3">
        <span class="dev_greet">Hello, I'm</span>
        <h1 class="dev_name">{{ devName }}</h1>
        <h3>A Web Developer</h3>
      </div>
      <div class="dev_brief">
        <div class="dev_desc mb-3">
          <MasterAnimate :textContent="skillsContent()" :highlights="hlText" />
        </div>
        <MasterButton :onClick="toProfile" class="mr-2" variant="tertiary" size="medium">
          Profile
        </MasterButton>
        <MasterButton :onClick="toProjects" class="mx-2" variant="dark" size="medium">
          Projects
        </MasterButton>
        <MasterButton :onClick="toContact" class="ml-2" variant="light" size="medium">
          Contact
        </MasterButton>
      </div>
      <div class="social_links pt-3">
        <MasterIcon
          svgName="github"
          size="large"
          @click="goTo('github')"
          fillColor="var(--item-color)"
          hoverColor="var(--theme-color)"
        />
        <MasterIcon
          svgName="linkedin"
          size="large"
          @click="goTo('linkedin')"
          fillColor="var(--item-color)"
          hoverColor="var(--theme-color)"
        />
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
    text-align: center;
  }

  .dev_pic {
    width: 40%;
  }

  .dev_details {
    width: 60%;

    .dev_brief {
      font-size: px2rem(18);
    }

    .social_links {
      display: flex;
      justify-content: center;
      gap: 2vw;
      align-items: center;
      align-self: center;

      * {
        cursor: pointer;
      }
    }
  }

  .dev_title {
    * {
      font-family: 'Courier';
      font-weight: bold;
    }
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
