<template>
  <header>
    <div class="logo">
      <img src="../assets/lostLogo.png" alt="Logo Lost" />
    </div>
  </header>

  <main class="text">
    <h2>
      Please check your mails, you will get an email from us with the email add
      of the founder.
    </h2>
  </main>

  <footer>
    <nav>
      <router-link to="/LostMatchPage">Back</router-link>
    </nav>
    <nav>
      <router-link to="/">Home</router-link>
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

.logo img {
  width: 100%;
  height: auto;
}

.mainContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  padding: 20px;
}

h1 {
  color: #333;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
}
</style>
