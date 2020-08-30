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
        <div class="row">
          <div class="col-12 pt-4">
            <img
              class="ml-n2 ml-sm-n3 ml-md-n4 ml-lg-n5"
              src="./assets/images/iykee.svg"
              alt="Iykee's Logo"
            />
          </div>
        </div>
        <div style="flex-grow: 1" class="row py-5">
          <div class="col-12 col-lg-8">
            <Home></Home>
          </div>
          <div
            class="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-end"
          >
            <TheSideNav :nav_links="nav_links"></TheSideNav>
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
  import Home from "./views/Home.vue";
  import TheSideNav from "./components/TheSideNav.vue";

  export default {
    name: "App",
    components: {
      Home,
      TheSideNav,
    },
    data() {
      return {
        nav_links: [
          { name: "About", number: "00", isActive: true },
          { name: "Projects", number: "01" },
          { name: "Resume", number: "02" },
          { name: "Contact", number: "03" },
        ],
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
  }
  .minh-100 {
    min-height: 100%;
    height: auto;
  }
  body {
    background: #1d1d1d;
    font-family: Gotham, Raleway, sans-serif;
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
</style>
