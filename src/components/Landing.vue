<template>
  <div>
    <header>
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
    </header>

    <main>
      <div class="lostCard">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/lostLogo.png"
                alt="Lost Logo"
                style="width: 400px; height: 400px; border-radius: 25px"
              />
            </div>
            <div class="flip-card-back">
              <div class="boxLost">
                <h3>Did you lose somthing?</h3>
                <button @click="openLostPage">{{ ButtonTextLost() }}</button>
                <router-view></router-view>
                <h4>Press the Lost Button and you can find it.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="heading">
        <h1>
          Hey there, <br />
          nice to have you here !
        </h1>
        <br />
        <p>Please choose your current state</p>
      </div>

      <div class="foundCard">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/foundLogo.png"
                alt="Found Logo"
                style="width: 400px; height: 400px; border-radius: 25px"
              />
            </div>
            <div class="flip-card-back">
              <div class="boxFound">
                <h3>Did you find somthing?</h3>
                <button @click="openFoundPage">
                  {{ ButtonTextFound() }}
                </button>
                <router-view></router-view>
                <h4>Here you can give it back.</h4>
              </div>
            </div>
          </div>
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
      <nav>
        <router-link to="/about">About us</router-link>
      </nav>
      <nav>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <nav>
        <router-link to="/impressum">Impressum</router-link>
      </nav>
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
      this.$router.push("/lost");
      // return Lost-Seite
    },
    openFoundPage() {
      this.$router.push("/found");
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

main {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10%;
  height: 65vh;
  width: auto;
}

.boxLost {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  background-color: #8faadc;
  border-radius: 25px;
}

.boxFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  background-color: #dbdbdb;
  border-radius: 25px;
}

.counter {
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
  color: #333;
}

h3 {
  color: #333;
}
h4 {
  color: #333;
}

button {
  height: 100px;
  width: 200px;
  background-color: #4caf50;
  color: white;
  font-size: 2rem;
  padding: 20px 20px;
  margin: 50px 0;
  border: none;
  border-radius: 10px;
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

.flip-card {
  background-color: transparent;
  width: 400px;
  height: 400px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
