<template>
  <router-link
    :to="to"
    :class="aClass"
    @mouseover.native="hoveredMouse"
    @mouseleave.native="outMouse"
    exact
  >
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    name: "base-router-link",
    props: {
      to: String,
      aClass: String,
    },
    methods: {
      hoveredMouse() {
        this.$root.$data.mouseHoveringLink = true;
      },
      outMouse() {
        this.$root.$data.mouseHoveringLink = false;
      },
    },
  };
</script>
