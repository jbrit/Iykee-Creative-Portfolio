<template>
  <div class="d-flex flex-column justify-content-center py-5 h-100">
    <div style="opacity: 0.1" class="f-64 mb-3">{</div>
    <div class="f-24 text-center">404</div>
    <div
      class="f-48 mb-3 text-center
    "
    >
      Page Not Found
    </div>
    <base-router-link
      @click.native="clickedMouse"
      class="f-18 text-center"
      to="/"
      >Go Home</base-router-link
    >

    <div style="opacity: 0.1" class="f-64 text-right">}</div>
  </div>
</template>
<script>
  import BaseRouterLink from "../components/BaseRouterLink.vue";

  export default {
    name: "NotFound",
    components: {
      BaseRouterLink,
    },
    methods: {
      clickedMouse() {
        this.$root.$data.mouseHoveringLink = false;
      },
    },
  };
</script>
