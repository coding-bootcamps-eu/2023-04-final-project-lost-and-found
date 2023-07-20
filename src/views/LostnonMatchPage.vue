<template>
  <body>
    <header>
      <h1 class="lost">LOST</h1>
    </header>

    <main>
      <h2>Thank you for the advertisement!</h2>
      <p>
        We are sorry, no MATCH yet.
        <br />
        Your item seems to be hiding well!
        <br />
        <br />Just try again tomorrow 🤞🏻
      </p>
    </main>
  </body>
  <footer class="footerLinks">
    <nav>
      <router-link to="/lostpage">Back</router-link>
    </nav>
    <br />
    <nav>
      <router-link to="/updatelandingpage">Home</router-link>
    </nav>
  </footer>
</template>

<script></script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #a6b8fc;
  height: 500px;
  width: 100%;
}
main {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 50px;
}

.lost {
  color: #f5f1f1;
  padding-top: 50px;
}

h2 {
  color: #b1fd8b;
  padding-top: 100px;
  padding-bottom: 100px;
}

p {
  color: #4c3d40;
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
