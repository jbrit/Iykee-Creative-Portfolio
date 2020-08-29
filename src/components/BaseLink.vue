<template>
  <a
    :href="href"
    :class="aClass"
    @mouseover="hoveredMouse"
    @mouseleave="outMouse"
  >
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: "base-link",
    props: {
      href: String,
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
