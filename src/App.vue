<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c3d40;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #4c3d40;
}

nav a.router-link-exact-active {
  color: #b1fd8b;
}
</style>
