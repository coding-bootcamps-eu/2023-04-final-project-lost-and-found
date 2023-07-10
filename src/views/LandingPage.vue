<template>
  <div class="home">
    <Default msg="Welcome to our Lost & Found App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Default from "@/components/Default.vue";

export default {
  name: "LandingPage",
  components: {
    Default,
  },
};
</script>
