<template>
  <header>
    <h1 class="lost">LOST</h1>
  </header>

  <main class="text">
    <h2>Now you can sit back for a while.</h2>
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
header {
  background-color: #a6b8fc;
  padding: 20px;
}

h1 {
  font-size: 50px;
}

.lost {
  color: #f5f1f1;
  padding-top: 50px;
}
main {
  padding: 20px;
  background-color: #a6b8fc;
}

footer {
  height: 15px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h2 {
  color: #b1fd8b;
}

h3 {
  color: #f5f1f1;
}
</style>
