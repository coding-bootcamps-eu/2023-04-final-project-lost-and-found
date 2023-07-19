<template>
  <header>
    <h1 class="lost">LOST</h1>
  </header>

  <main>
    <h2>Thank you for the advertisement!</h2>
    <p>
      We are sorry, no MATCH yet.
      <br />
      As soon as someone found your item, we will let you know.
    </p>
  </main>
  <footer class="footerLinks">
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
header {
  background-color: #f5f1f1;
  padding: 20px;
}

main {
  padding: 20px;
  background-color: #a6b8fc;
}

footer {
  background-color: #f5f1f1;
  padding: 20px;
  width: auto;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footerLinks {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

h1 {
  color: #333;
}

h2,
p {
  color: #555;
}
</style>
