<template>
  <form
    class="h-100 d-flex flex-column justify-content-center"
    action="mailto:ojo.ajibola@lmu.edu.ng"
  >
    <div class="form-group">
      <label class="sr-only" for="name">Full Name</label>
      <input
        placeholder="Your Full Name"
        type="text"
        class="form-control"
        id="name"
      />
    </div>
    <div class="form-group">
      <label class="sr-only" for="email">Email address</label>
      <input
        placeholder="Your Email Address"
        type="email"
        class="form-control"
        id="email"
      />
    </div>
    <div class="form-group">
      <label class="sr-only" for="message">Message</label>
      <textarea
        placeholder="Your Message"
        class="form-control"
        id="message"
        rows="4"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-block btn-primary">Submit</button>
  </form>
</template>

<script>
  export default {
    name: "ContactPage",
  };
</script>
