<template>
  <base-router-link :to="to" :class="['side-nav-link', 'my-1']">
    <span class="side-nav-link__num">{{ number }}</span>
    <span class="side-nav-link__divider mx-3 d-inline-block"></span>
    {{ name }}
  </base-router-link>
</template>
<script>
  import BaseRouterLink from "./BaseRouterLink.vue";

  export default {
    name: "NavLink",
    components: {
      BaseRouterLink,
    },
    props: {
      number: String,
      name: String,
      to: String,
    },
  };
</script>
