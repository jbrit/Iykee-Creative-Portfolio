<template>
  <div class="d-flex flex-column justify-content-center py-5 h-100">
    <div class="f-24 mb-4 text-uppercase">Hi There, I'm</div>
    <div class="f-64 mb-3">Ikechukwu Okonkwo</div>
    <div class="f-24 f-blue mb-3">GRAPHICS + UI/UX DESIGNER</div>
    <div class="f-18 mb-5 fw-325">
      I am a creative with experience in cooperate and interface design. My
      collaborative skills has been demonstrated through successful completion
      of projects
    </div>
    <div class="icons-holder">
      <BaseLink href="#" class="icon"
        ><span
          class="iconify"
          data-icon="whh:dribbblealt"
          data-inline="false"
        ></span> </BaseLink
      ><BaseLink href="#" class="icon"
        ><span
          class="iconify"
          data-icon="whh:behance"
          data-inline="false"
        ></span> </BaseLink
      ><BaseLink href="#" class="icon"
        ><span
          class="iconify"
          data-icon="whh:linkedin"
          data-inline="false"
        ></span> </BaseLink
      ><BaseLink href="#" class="icon"
        ><span
          class="iconify"
          data-icon="whh:twitter"
          data-inline="false"
        ></span>
      </BaseLink>
    </div>
  </div>
</template>
<script>
  import BaseLink from "../components/BaseLink.vue";

  export default {
    name: "Home",
    components: {
      BaseLink,
    },
  };
</script>
