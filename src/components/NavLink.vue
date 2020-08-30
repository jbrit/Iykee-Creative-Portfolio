<template>
  <base-link
    :href="href ? href : '#'"
    :class="['side-nav-link', 'my-1', activeClass]"
  >
    <span class="side-nav-link__num">{{ number }}</span>
    <span class="side-nav-link__divider mx-3 d-inline-block"></span>
    {{ name }}
  </base-link>
</template>
<script>
  import BaseLink from "./BaseLink.vue";

  export default {
    name: "NavLink",
    components: {
      BaseLink,
    },
    props: {
      number: String,
      name: String,
      href: String,
      isActive: Boolean,
    },
    computed: {
      activeClass() {
        return this.isActive ? "active" : "";
      },
    },
  };
</script>
