<template>
  <Fragment>
    <div class="text-right f-48 pb-5">{{ title }}</div>
    <div class="my-auto">
      <NavLink
        :key="link.number"
        v-for="link in nav_links"
        :number="link.number"
        :name="link.name"
        :to="link.to"
      ></NavLink>
    </div>
  </Fragment>
</template>
<script>
  import { Fragment } from "vue-fragment";
  import NavLink from "./NavLink.vue";

  export default {
    name: "SideNav",
    components: {
      Fragment,
      NavLink,
    },
    props: {
      nav_links: Array,
      title: String,
    },
  };
</script>
