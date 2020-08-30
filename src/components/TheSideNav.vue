<template>
  <Fragment>
    <div class="text-right f-48 pb-5">About</div>
    <div class="my-auto">
      <NavLink
        :key="link.number"
        v-for="link in nav_links"
        :number="link.number"
        :name="link.name"
        :isActive="link.isActive"
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
    },
  };
</script>
