<template>
  <div
    id="app"
    @mouseover="showMouse"
    @mouseleave="hideMouse"
    @mousemove="moveMouse"
  >
    <div class="px-2 px-sm-3 px-md-4 px-lg-5">
      <div
        style="min-height: 100vh;"
        class="container h-100 d-flex flex-column"
      >
        <div
          ref="menu"
          class="menu-overlay row d-flex d-lg-none flex-column align-items-center justify-content-center position-fixed m-0 w-100 h-100"
        >
          <!-- TODO: Base Router Link -->
          <router-link
            v-for="link in nav_links"
            :key="link.number"
            ref="reveal"
            class="f-36 fw-600 my-3 mobile-nav-link text-reveal"
            :to="link.to"
            @click.native="menuClose"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div style="z-index: 2" class="row">
          <div class="col-12 pt-4">
            <img
              ref="img"
              class="ml-n2 ml-sm-n3 ml-md-n4 ml-lg-n5"
              src="./assets/images/iykee.svg"
              alt="Iykee's Logo"
            />
            <!--TODO: Change hamburger Icon and Style -->
            <base-link
              @click.native="menu_opened ? menuClose() : menuOpen()"
              href="#"
              class="hamburger d-inline-flex align-items-center justify-content-center d-lg-none ml-auto shadow-sm mr-n2 mr-sm-n3 mr-md-n4 mr-lg-0"
              ><span style="font-weight: 300; transform: translateY(-5%)"
                >=</span
              ></base-link
            >
          </div>
        </div>
        <div style="flex-grow: 1" class="row py-5">
          <div class="col-12 col-lg-8">
            <router-view></router-view>
          </div>
          <div
            class="col-12 col-lg-4 d-none d-lg-flex flex-column justify-content-start align-items-end"
          >
            <TheSideNav :title="title" :nav_links="nav_links"></TheSideNav>
          </div>
        </div>
      </div>
    </div>
    <div
      id="mouseindicator"
      ref="mouseIndicator"
      :class="{ hovering: this.$root.$data.mouseHoveringLink }"
    ></div>
  </div>
</template>

<script>
  import TheSideNav from "./components/TheSideNav.vue";
  import BaseLink from "./components/BaseLink.vue";
  import { gsap } from "gsap";
  const menuTL = gsap.timeline({ duration: 1, paused: true });

  export default {
    name: "App",
    mounted() {
      this.$nextTick(function() {
        let { menu, reveal } = this.$refs;
        reveal = ".text-reveal";
        menuTL.eventCallback("onStart", () => {
          this.menu_opened = true;
        });
        menuTL.eventCallback("onReverseComplete", () => {
          this.menu_opened = false;
        });
        menuTL
          .from(menu, {
            translateX: "100%",
          })
          .from(reveal, {
            duration: 1.15,
            stagger: 0,
            opacity: 0,
            translateY: "-100%",
            "--reveal-height": "100%",
          });
      });
    },
    components: {
      TheSideNav,
      BaseLink,
    },
    data() {
      return {
        nav_links: [
          { name: "About", number: "00", to: "/" },
          { name: "Projects", number: "01", to: "projects" },
          { name: "Resume", number: "02", to: "resume" },
          { name: "Contact", number: "03", to: "contact" },
        ],
        title: "About",
        menu_opened: false,
      };
    },
    methods: {
      showMouse() {
        this.$refs.mouseIndicator.style.visibility = "visible";
      },
      hideMouse() {
        this.$refs.mouseIndicator.style.visibility = "hidden";
      },
      moveMouse(e) {
        const mouseIndicator = this.$refs.mouseIndicator;
        mouseIndicator.style.top = `${e.clientY - 4}px`;
        mouseIndicator.style.left = `${e.clientX - 4}px`;
      },
      menuOpen() {
        menuTL.play();
      },
      menuClose() {
        menuTL.reverse();
      },
    },
  };
</script>

<style lang="scss">
  #app {
    background: url("./assets/images/iykee bg.svg"), #1d1d1d;
    cursor: none !important;
    background-size: cover;
    background-position-y: bottom;
  }
  :root {
    --color-white: #ffffff;
    --color-blue: #2f80ed;
    --color-secondary: #303338;
    --color-inactive: rgba(255, 255, 255, 0.5);
  }

  @mixin borderadius {
    border-radius: 10px;
  }

  @mixin card {
    @include borderadius;
    background-color: var(--color-secondary);
  }
  @mixin button {
    @include borderadius;
    color: var(--color-white);
  }
  @mixin input-field {
    @include borderadius;
    background-color: var(--color-secondary);
    color: var(--color-white);
    &:focus {
      box-shadow: none;
    }
  }
  .f- {
    // Size
    &18 {
      font-size: 18px;
      line-height: 25px;
    }
    &24 {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: -0.02em;
    }
    &36 {
      font-size: 36px;
      line-height: 42px;
    }
    &48 {
      font-size: 48px;
      line-height: 56px;
    }
    &64 {
      font-size: 64px;
      line-height: 75px;
    }
    //   Color
    &blue {
      color: var(--color-blue);
    }
  }
  .fw- {
    &325 {
      font-weight: 325;
    }
    &600 {
      font-weight: 600;
    }
  }
  .minh-100 {
    min-height: 100%;
    height: auto;
  }
  body {
    background: #1d1d1d;
    font-family: Raleway, sans-serif;
    color: var(--color-white);
  }
  ::selection {
    background: rgba(255, 255, 255, 0.9);
    color: var(--color-secondary);
  }
  .icon {
    color: var(--color-white);
    font-size: 2rem;
    margin-right: 25px;
    display: inline-flex;
    cursor: none;
    &:hover {
      color: #eeeeee;
      text-decoration: none;
    }
  }
  #mouseindicator {
    mix-blend-mode: difference;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    visibility: hidden;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: white;
    z-index: 5000;
    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      top: -250%;
      left: -250%;
      width: 600%;
      height: 600%;
      background: rgba(255, 255, 255, 0.2);
      transform: scale(0);
      transform-origin: center;
      transition: transform 0.5s ease;
    }
    &.hovering {
      mix-blend-mode: normal !important;
    }
    &.hovering::before {
      transform: scale(1);
    }
  }
  a {
    text-decoration: none;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .side-nav-link {
    display: flex;
    align-items: center;
    color: var(--color-inactive);

    &.active {
      color: var(--color-blue);
    }
    .side-nav-link__num {
      width: 24px;
      display: inline-block;
    }
    &__divider {
      background-color: var(--color-inactive);
      height: 1.5px;
      width: 110px;

      .active & {
        background-color: var(--color-blue);
      }
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--color-blue);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.35s ease;
      }
    }
    &:hover &__divider {
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    &:hover {
      color: var(--color-blue);
      transition: color 0.35s ease;
      transition-delay: 0.35s;
    }
  }
  .form-control {
    @include input-field;
    border: none;
    border-bottom: 1px solid transparent;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    line-height: 22px;
    min-height: 46px;
    transition: border-color 0.5s ease;

    &:focus {
      border-color: var(--color-blue);
      background-color: lighten($color: #303338, $amount: 9);
      color: var(--color-white);
    }
  }
  // Menu
  .hamburger {
    background-color: darken($color: #303338, $amount: 11);
    height: 48px;
    width: 48px;
    border-radius: 50%;
    vertical-align: middle;
    float: right;
    font-size: 80px;
    color: white;
    &:hover {
      color: white;
    }
  }
  .menu-overlay {
    top: 0;
    left: 0;
    z-index: 1;
    background-color: darken($color: #303338, $amount: 12);
  }
  .mobile-nav-link {
    color: darken($color: #303338, $amount: 12);
    text-shadow: -0.4px -0.4px 0 #fff, 0.4px -0.4px 0 #fff, -0.4px 0.4px 0 #fff,
      0.4px 0.4px 0 #fff;
    transition: color 0.5s ease;
    font-weight: 400;
    &:hover,
    &.active {
      color: transparent;
    }
  }
  .text-reveal {
    position: relative;
    --reveal-height: 0%;
    &::after {
      content: "";
      position: absolute;
      height: var(--reveal-height);
      width: 100%;
      background-color: darken($color: #303338, $amount: 12);
      top: 0;
      left: 0;
      transform-origin: top;
    }
  }
</style>
