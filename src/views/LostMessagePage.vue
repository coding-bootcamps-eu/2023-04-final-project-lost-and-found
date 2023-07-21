<template>
  <header>
    <h1 class="lost">LOST</h1>
  </header>

  <main class="text">
    <h2>
      Thank you for the advertisement <br />now you can sit back for a while.
    </h2>
    <h3>
      In the background we will send you and the founder an email with your
      contact details. Once the email arrives, you can exchange information and
      plan a handover.
    </h3>
  </main>

  <footer>
    <nav>
      <router-link to="/lost/lostmatchpage">Back</router-link>
    </nav>
    <nav>
      <router-link to="/updatelandingpage">Home</router-link>
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
  background-color: #a6b8fc;
}

.lost {
  color: #f5f1f1;
}

h1 {
  font-size: 50px;
}

main {
  text-align: center;
  background-color: #a6b8fc;
  padding: 20px;
  padding-bottom: 115px;
  padding-top: 115px;
}

h2,
h3 {
  color: #f5f1f1;
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
