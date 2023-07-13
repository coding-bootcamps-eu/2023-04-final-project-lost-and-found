<template>
  <div>
    <header>
      <div class="logo">
        <img src="../assets/lostLogo.png" alt="Logo Lost" />
      </div>
    </header>

    <main class="text">
      <h2>
        Please check also your email Postfach, you will also get an email from
        us with the email add of the founder.
      </h2>
      <p>
        Please insert your Email Address (we will forward it to the founder of
        your product)
      </p>
      <div>
        <input type="email" name="email" placeholder="Your Email" />
        <button>
          <router-link to="">Send</router-link>
        </button>
      </div>
    </main>
  </div>

  <footer>
    <nav>
      <router-link to="/LostMatchPage">Back</router-link>
    </nav>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "LostMatchMailPage",
};
</script>

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
