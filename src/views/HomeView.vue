<!-- eslint-disable prettier/prettier -->
<template>
	<div class="home">
		<HelloWorld msg="Welcome to our Lost & Found App" />
	</div>
</template>

<!-- eslint-disable prettier/prettier -->
<script>
	// @ is an alias to /src
	import HelloWorld from "@/components/HelloWorld.vue";

	export default {
		name: "HomeView",
		components: {
			HelloWorld,
		},
	};
</script>
