<template>
  <header>
    <h1 class="found">FOUND</h1>
  </header>

  <main class="text">
    <h2>
      Thank you for the advertisement
      <br />
      you will make someone very happy again!
    </h2>
    <h3>
      As soon as someone is looking for his item, we will let you know via
      emailing you. Then you can exchange information and plan a handover.
    </h3>
  </main>
  <footer>
    <nav>
      <router-link to="/found">Back</router-link>
    </nav>
    <br />
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<script></script>

<style scoped>
html {
  font-family: "Roboto", sans-serif;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f5f1f1;
}

.found {
  color: #a6b8fc;
}

h1 {
  font-size: 50px;
}

main {
  text-align: center;
  background-color: #f5f1f1;
  padding: 20px;
  padding-bottom: 115px;
  padding-top: 115px;
}

h2,
h3 {
  color: #a6b8fc;
  max-width: 600px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

h2 {
  padding-bottom: 50px;
}

h3 {
  margin-bottom: 0;
  padding-bottom: 50px;
  font-size: 20px;
}

footer {
  height: 15px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
