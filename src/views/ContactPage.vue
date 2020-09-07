<template>
  <form
    ref="contact_form"
    class="h-100 d-flex flex-column justify-content-center"
    action="https://formspree.io/mnqgeprz"
    method="POST"
    v-on:submit.prevent="handleSubmit"
  >
    <div class="form-group">
      <label class="sr-only" for="name">Full Name</label>
      <input
        name="Full Name"
        placeholder="Your Full Name"
        type="text"
        class="form-control"
        id="name"
      />
    </div>
    <div class="form-group">
      <label class="sr-only" for="email">Email address</label>
      <input
        name="Email Address"
        placeholder="Your Email Address"
        type="email"
        class="form-control"
        id="email"
      />
    </div>
    <div class="form-group">
      <label class="sr-only" for="message">Message</label>
      <textarea
        name="Message"
        placeholder="Your Message"
        class="form-control"
        id="message"
        rows="4"
      ></textarea>
    </div>
    <button
      type="submit"
      class="btn btn-block btn-primary text-uppercase d-flex flex-align-center justify-content-center"
    >
      <div v-if="isSending" class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span v-else>Send</span>
    </button>
  </form>
</template>

<script>
  export default {
    name: "ContactPage",
    data() {
      return {
        status: "",
        isSending: false,
      };
    },
    methods: {
      handleSubmit() {
        const form = this.$refs.contact_form,
          data = new FormData(form);
        this.isSending = true;
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.status = "SUCCESS";
          } else {
            this.status = "ERROR";
          }
          this.isSending = false;
          console.log(this.status);
        };
        xhr.send(data);
      },
    },
  };
</script>
<style lang="scss">
  $circle-size: 8px;
  .lds-ellipsis {
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 80px;
    height: 20px;
  }
  .lds-ellipsis div {
    position: absolute;
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
</style>
