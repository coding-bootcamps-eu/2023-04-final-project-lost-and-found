<template>
  <header>
    <div class="logo">
      <img src="../assets/lostLogo.png" alt="Logo Lost" />
    </div>
  </header>

  <main>
    <h2>YES!</h2>
    <p>
      We already have some matches for you! Is one of these items yours? (click
      it and get connected with the founder)
    </p>
    <ul>
      <li v-for="item in matchesStore.matches" :key="item">
        {{ item }}
      </li>
    </ul>
  </main>
  <footer>
    <nav>
      <router-link to="/LostPage">Back</router-link>
    </nav>
    <br />
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<script>
import { useMatchesStore } from "@/stores/matchesStore";
export default {
  // ...
  setup() {
    const matchesStore = useMatchesStore();

    return {
      matchesStore,
    };
  },
  mounted() {
    const itemsData = [this.matchesStore.matches];
    this.matchesStore.setData(itemsData);
  },
  // ...
};
</script>

<style scoped>
/* SCOPED ? */
header {
  background-color: #f2f2f2;
  padding: 20px;
}

main {
  padding: 20px;
}

footer {
  background-color: #f2f2f2;
  padding: 20px;
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

input,
select {
  margin: 10px 0;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
