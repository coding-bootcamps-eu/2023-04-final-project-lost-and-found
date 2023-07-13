<template>
  <header>
    <div class="logo">
      <img src="../assets/lostLogo.png" alt="Logo Lost" />
    </div>
  </header>

  <main>
    <h2>Thank you for the advertisement!</h2>
    <p>
      We are sorry, no MATCH yet. As soon as someone found your item, we will
      let you know.
    </p>
  </main>
  <footer>
    <nav>
      <router-link to="/LostPage">Back</router-link>
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
