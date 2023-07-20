<template>
  <header>
    <h1 class="found">FOUND</h1>
  </header>

  <main class="text">
    <h2>
      Thank you for the advertisement,
      <br />
      you will make someone very happy again!
    </h2>
    <h3>
      As soon as someone is looking for his item, we will let you know via
      emailing you.
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
/* SCOPED ? */
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
  padding-bottom: 150px;
  padding-top: 150px;
}

h2,
h3 {
  color: #a6b8fc;
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: white;
}
</style>
