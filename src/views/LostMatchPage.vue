<template>
  <header>
    <h1 class="lost">LOST</h1>
  </header>

  <main>
    <h2>YES!</h2>
    <p>
      We already have some matches for you! Is one of these items yours? (click
      it and get connected with the founder)
    </p>
    <ul>
      <li v-for="item in listItems" :key="item">
        {{ item }}
      </li>
    </ul>
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

<script>
export default {
  name: "DefaultComponent",
  data() {
    return {
      optionsItem: [
        { value: "product", label: "Wallet" },
        { value: "product", label: "Bag" },
        { value: "product", label: "Phone" },
        { value: "product", label: "Watch" },
        { value: "product", label: "Key" },
        { value: "product", label: "Clothing" },
      ],

      optionsColor: [
        { value: "color", label: "Black" },
        { value: "color", label: "White" },
        { value: "color", label: "Brown" },
        { value: "color", label: "Red" },
        { value: "color", label: "Green" },
        { value: "color", label: "Blue" },
        { value: "color", label: "Yellow" },
        { value: "color", label: "Silver" },
        { value: "color", label: "Gold" },
      ],

      optionsMaterial: [
        { value: "material", label: "Kind of Leather" },
        { value: "material", label: "Kind of Plastic" },
        { value: "material", label: "Kind of Metal" },
        { value: "material", label: "Kind of Wood" },
        { value: "material", label: "Kind of textiles" },
      ],

      listItems: [
        "Placeholder für Item-Liste oder Item nachdem User-Auswahl getroffen wurde",
      ],
    };
  },
};
</script>

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
  background-color: #a6b8fc;
}

li {
  border: 1px solid black;
}
</style>
