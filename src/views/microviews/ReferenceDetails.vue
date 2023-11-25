<script setup>
import MasterHrLine from '@/components/MasterHrLine.vue'
import MasterIcon from '@/components/MasterIcon.vue'
import References from '@/stores/data/ReferenceDetails.js'
</script>

<template>
  <div class="ref_details" v-for="(refdetail, idx) in References" :key="idx">
    <h4 class="section_title">{{ refdetail.ref_name }}</h4>
    <div class="role_company">
      <span class="ref_role">{{ refdetail.ref_role }}</span>
      <span class="ref_company">{{ refdetail.ref_company }}</span>
    </div>
    <MasterHrLine
      thickness="1px"
      styleType="dotted"
      hrColor="var(--glob-dark)"
      margin-top="0.5rem"
      margin-bottom="0.5rem"
    />
    <span class="ref_mobile">
      <MasterIcon
        svgName="phone-call"
        size="small"
        fillColor="var(--item-color)"
        :hoverInverse="true"
      />
      {{ refdetail.ref_mobile }}
    </span>
    <span class="ref_email">
      <MasterIcon
        svgName="email-small"
        size="small"
        fillColor="var(--item-color)"
        :hoverInverse="true"
      />
      {{ refdetail.ref_email }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.ref_details {
  background-color: var(--theme-color);
  color: var(--glob-dark);
  padding: px2rem(10);
  border-radius: px2rem(5);

  .role_company {
    .ref_role,
    .ref_company {
      display: inline-flex;
    }

    .ref_role::after {
      content: '';
      margin: px2rem(0) px2rem(5);
      border-left: px2rem(2) solid var(--glob-dark);
      height: px2rem(15);
      align-self: center;
    }
  }

  .ref_mobile,
  .ref_email {
    display: flex;
    gap: px2rem(10);
    padding: 2px 0;
  }
}
</style>
