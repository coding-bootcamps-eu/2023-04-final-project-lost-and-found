<template>
  <header>
    <div class="logo">
      <img src="../assets/foundLogo.png" alt="Logo Found" />
    </div>
  </header>

  <main>
    <h2>
      Thank you for the advertisement! You will make someone very happy again!
    </h2>
    <p>As soon as someone is looking for his item, we will let you know.</p>
  </main>
  <footer>
    <nav>
      <router-link to="/FoundPage">Back</router-link>
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
header {
  background-color: #f2f2f2;
  padding: 20px;
}

main {
  padding: 20px;
}

footer {
  background-color: #f2f2f2;
  padding: 20px;
}

h1 {
  color: #333;
}

h2 {
  color: #555;
}

h3 {
  color: #777;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
}

input,
select {
  margin: 10px 0;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
