<template>
  <div>
    <header>
      <div class="logo">
        <img src="@/assets/Logo.png" alt="Logo" />
      </div>
    </header>

    <aside class="text">
      <h2>Hey, nice to have you here!</h2>
    </aside>

    <main>
      <div class="mainContent">
        <div class="boxLost">
          <h3>Did you lose somthing?</h3>
          <h4>Here you can find it.</h4>
          <button @click="openLostPage">{{ ButtonTextLost() }}</button>
          <p>Tip-in your details and get a Match with a founder.</p>
        </div>
        <div class="boxFound">
          <h3>Did you find something?</h3>
          <h4>Here you can give it back.</h4>
          <button @click="openFoundPage">{{ ButtonTextFound() }}</button>
          <p>Tip-in your details and get a Match with the sad one.</p>
        </div>
      </div>
    </main>

    <aside class="counter">
      <h3>Counter</h3>
      <p>{{ counterValue }}</p>
      <!-- <button @click="counterValue++">Increment</button>
      <button @click="counterValue--">Decrement</button> -->
    </aside>

    <footer>
      <div>
        <a href="#contact">contact</a>
      </div>
      <div>
        <a href="#about">about us</a>
      </div>
      <div>
        <a href="#imprint">imprint</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  data() {
    return {
      counterValue: 0,
    };
  },
  methods: {
    ButtonTextLost() {
      return "Lost";
    },
    ButtonTextFound() {
      return "Found";
    },
    CounterValue() {
      return this.counterValue;
    },
    openLostPage() {
      // return Lost-Seite
    },
    openFoundPage() {
      // return Found-Seite
    },
  },
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

aside {
  background-color: #fff;
  padding: 20px;
}

/* main {
  background-color: #f2f2f2;
  padding: 20px;
} */

.mainContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.boxLost {
  background-color: #dbdbdb;
  padding: 50px;
  margin: 20px;
  border-radius: 25px;
}

.boxFound {
  background-color: #dbdbdb;
  padding: 50px;
  margin: 20px;
  border-radius: 25px;
}

aside .counter {
  background-color: #dbdbdb;
  padding: 20px;
  margin: 20px;
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

a {
  text-decoration: none;
  color: #333;
  margin: 0 10px;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.counter {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #f2f2f2;
  padding: 10px;
}
</style>
