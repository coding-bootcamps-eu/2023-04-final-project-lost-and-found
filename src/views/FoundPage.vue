<template>
  <header>
    <div class="logo">
      <img src="../assets/foundLogo.png" alt="Logo Found" />
    </div>
  </header>

  <main>
    <!--      ITEM      -->
    <p>What did you lose?</p>
    <select class="optionsItem">
      <option
        v-for="option in optionsItem"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <!--      COLOR      -->
    <p>What is the basic color?</p>
    <select class="optionsColor">
      <option
        v-for="option in optionsColor"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <!--      MATERIAL      -->
    <p>What is the basic material?</p>
    <select class="optionsMaterial">
      <option
        v-for="option in optionsMaterial"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <!--      EMAIL      -->
    <p>Please insert your email:</p>
    <input type="email" :placeholder="TextInputPlaceholder('Email')" />
    <!--      DATE/TIME      -->
    <p>When did you lose it?</p>
    <input type="text" :placeholder="TextInputPlaceholder('Calendar')" />

    <!--      LOCATION      -->
    <p>Where did you lose it?</p>
    <input type="text" :placeholder="TextInputPlaceholder('Location')" />

    <!--      DESCRIPTION      -->
    <p>Describe it in your own words: (optional)</p>
    <input type="text" :placeholder="TextInputPlaceholder('Text')" />

    <!--      PICTURE UPLOAD      -->
    <p>Picture upload (optional)</p>
    <input type="text" :placeholder="TextInputPlaceholder('Text')" /><button>
      {{ ButtonUpload() }}
    </button>
  </main>

  <footer>
    <nav>
      <router-link to="/">Back</router-link>
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
  methods: {
    HeaderLostText() {
      return "LOST";
    },
    TextInputPlaceholder(type) {
      return `${type} input`;
    },
    ButtonUpload() {
      return "upload";
    },
    ButtonBack() {
      return "Back";
    },
    ButtonNext() {
      return "Next";
    },
  },
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
