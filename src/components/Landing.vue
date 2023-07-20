<template>
  <div>
    <header class="header">
      <h1 class="lost">LOST&</h1>
      <h1 class="found">FOUND</h1>
    </header>

    <main>
      <h2>Hey, nice to have you here!</h2>
      <div class="mainContent">
        <div class="boxLost">
          <h3>Did you lose something?</h3>
          <h4>Here you can find it.</h4>
          <small>Tip-in your details and get a MATCH!</small><br />
          <button class="btnLost" @click="openLostPage">
            {{ ButtonTextLost() }}
          </button>
          <router-view></router-view>
        </div>
        <div class="boxFound">
          <h3>Did you find something?</h3>
          <h4>Here you can give it back.</h4>
          <small>Tip-in your details and get a MATCH!</small><br />
          <button class="btnFound" @click="openFoundPage">
            {{ ButtonTextFound() }}
          </button>
          <router-view></router-view>
        </div>
      </div>
    </main>

    <aside class="counter">
      <h3>MATCH</h3>
      <p>{{ counterValue }}</p>
      <!-- <button @click="counterValue++">Increment</button>
      <button @click="counterValue--">Decrement</button> -->
    </aside>

    <footer>
      <div class="footerLinks">
        <div class="footerNavLeft">
          <nav>
            <router-link to="/about">About us</router-link>
          </nav>
          <nav class="footerNavLeft">
            <router-link to="/contact">Contact</router-link>
          </nav>
        </div>
        <div class="copyright">© 2023 Lost & Found</div>
        <div class="footerNavRight">
          <nav>
            <router-link to="/imprint">Imprint</router-link>
          </nav>
        </div>
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
      return "LOST";
    },
    ButtonTextFound() {
      return "FOUND";
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

main {
  padding: 20px;
}

.mainContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.boxLost {
  padding: 50px;
  margin: 20px;
  border-radius: 25px;
}

.boxFound {
  padding: 50px;
  margin: 20px;
  border-radius: 25px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
  max-width: 100%;
  overflow: hidden;
}

.lost {
  background-color: #a6b8fc;
  color: #f5f1f1;
  padding-left: 50%;
  padding-bottom: 25px;
}

.found {
  background-color: #f5f1f1;
  color: #a6b8fc;
  padding-right: 50%;
}

a {
  text-decoration: none;
  color: #4c3d40;
  margin: 0 10px;
}

h1 {
  font-size: 50px;
  color: #4c3d40;
  padding-top: 30px;
}

h2 {
  color: #4c3d40;
}

h3 {
  color: #4c3d40;
  padding-bottom: 20px;
}

button {
  font-size: 30px;
  padding: 10px 20px;
  margin: 50px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
}

.btnFound {
  background-color: #f5f1f1;
  color: #a6b8fc;
  font-weight: 900;
}

.btnLost {
  color: #f5f1f1;
  background-color: #a6b8fc;
  font-weight: 900;
}

.counter {
  position: fixed;
  bottom: 80px;
  left: 10px;
  background-color: #b1fd8b;
  padding: 10px;
}

footer {
  width: auto;
  /* height: 130px; */
  background-color: #f5f1f1;
  padding: 20px;
  font-size: 0.75rem;
}

.footerLinks {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* height: 100%; */
}

.footerNavLeft {
  display: flex;
  align-items: flex-end;
}

.footerNavRight {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(155, 156, 158);
  font-size: smaller;
  padding-right: 50px;
}
</style>
