<template>
  <div class="resume-container ">
    <div
      v-for="position in resume_items"
      :key="position.company + position.title"
      class="resume-item pl-3 pt-4"
    >
      <div class="fw-500 f-18">{{ position.company }}</div>
      <div class="fw-500 f-14">
        {{ position.title }} <span class="f-blue">{{ position.duration }}</span>
      </div>
      <base-link
        v-if="position.link"
        target="_blank"
        :href="position.link.url"
        class="resume-link f-14"
        >{{ position.link.name }}</base-link
      >
      <div class="f-14">
        {{ position.description }}
      </div>
    </div>
  </div>
</template>

<script>
  import BaseLink from "../components/BaseLink.vue";

  export default {
    name: "Resume",
    data() {
      return {
        resume_items: [
          {
            company: "ORACUS NG",
            title: "Graphics Designer",
            duration: "(Jan 2020 - Present)",
            link: {
              url: "https://instagram.com/oracusng",
              name: "instagram.com/oracusng",
            },
            description: `At Oracus digital agency I am responsible for the designing of logos, flyers, posters and branding items for multiple clients ranging from start-ups to large scale. My work at this company helped me develop good marketing, communication and Team work skills.`,
          },
          {
            company: "AIESEC ENUGU",
            title: "Lead Graphics Designer",
            duration: "(Jan 2020 - Present)",

            description: `At AIESEC Enugu, I am responsible for creation of designs to support the Local Committee. These designs include both offline and online materials.`,
          },
          {
            company: "ITS ENUGU",
            title: "Brand Manager ",
            duration: "(March 2020 - March 2020)",

            description: `I was responsible for the design and printing of the branding items used during the seminar which includes T-Shirts, Stickers and Notebooks`,
          },
          {
            company: "HOTEL NG",
            title: "UI/UX Design Intern",
            duration: "(June 2020 - August 2020)",
            link: {
              url: "https://hngi7.hng.tech",
              name: "hngi7.hng.tech",
            },
            description: `During this internship I collaborated with other design interns and developers to create intuitive, user-friendly software and websites.`,
          },
          {
            company: "AIESEC in Nigeria",
            title: "Graphics Designer",
            duration: "(August 2020 - Present)",
            link: {
              url: "https://twitter.com/AIESECNigeria",
              name: "twitter.com/AIESECNigeria",
            },
            description: `I am reponsible for designing of both online and offline campaigns, create booklets and materials to support Local Committees and designing frameworks for testimonials/thunderclaps.`,
          },
        ],
      };
    },
    components: {
      BaseLink,
    },
  };
</script>
<style lang="scss" scoped>
  $top-circle-size: 10px;
  .resume-container {
    position: relative;
    border-left: 1.5px solid #ffffff;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: calc(-#{$top-circle-size/2} - 0.75px);
      height: $top-circle-size;
      width: $top-circle-size;
      background-color: white;
      border-radius: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -14px;
      left: -7.75px;
      border: 7px solid transparent;
      border-top-color: white;
    }
  }
  .resume-item {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 28px;
      left: -8.25px;
      height: 15px;
      width: 15px;
      background-color: white;
      border-radius: 50%;
    }
  }
  .resume-link {
    text-decoration-line: underline;
    color: #2d9cdb;
  }
</style>
