<template>
  <div class="home">
    <Landing msg="Welcome to our Lost & Found App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "LandingPage",
  components: {
    Landing,
  },
};
</script>
