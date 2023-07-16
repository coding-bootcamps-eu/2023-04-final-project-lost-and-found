<template>
  <header>
    <div class="logo">
      <img src="../assets/foundLogo.png" alt="Logo Found" />
    </div>
  </header>

  <main class="text">
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
