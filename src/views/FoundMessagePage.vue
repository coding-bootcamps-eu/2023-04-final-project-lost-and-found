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
    <p>
      As soon as someone is looking for his item, we will let you know via
      emailing you.
    </p>
  </main>
  <footer>
    <nav>
      <router-link to="/FoundPage" class="backLink">Back</router-link>
    </nav>
    <br />
    <nav>
      <router-link to="/" class="homeLink">Home</router-link>
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
}

h2 {
  padding-bottom: 50px;
  color: #4c3d40;
}

p {
  color: #a6b8fc;
  padding-top: 30px;
  margin-bottom: 0;
  font-size: 20px;
  padding-bottom: 50px;
}

footer {
  height: 30px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backLink {
  color: #4c3d40;
}

.homeLink {
  color: #4c3d40;
}
</style>
