<template>
  <div>
    <header>
      <h1>{{ HeaderText() }}</h1>
    </header>
    <main>
      <h2>{{ MainHeaderText() }}</h2>
      <p>{{ MainText() }}</p>
    </main>

    <h2>{{ Heading2Text() }}</h2>
    <h3>{{ Heading3Text() }}</h3>

    <input type="text" :placeholder="TextInputPlaceholder('Text')" />

    <br />

    <input type="email" :placeholder="TextInputPlaceholder('Email')" />

    <br />

    <select class="optionsItem">
      <option
        v-for="option in optionsItem"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <select class="optionsColor">
      <option
        v-for="option in optionsColor"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <select class="optionsMaterial">
      <option
        v-for="option in optionsMaterial"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <br />

    <div class="date">
      <time datetime="">Placeholder Select Datum</time>
    </div>

    <div class="location">Placeholder Select Location</div>

    <ul>
      <li v-for="item in listItems" :key="item">
        {{ item }}
      </li>
    </ul>

    <div class="backNext">
      <button>{{ ButtonBack() }}</button>
      <button>{{ ButtonNext() }}</button>
    </div>

    <br />

    <div class="lostFound">
      <Button>{{ ButtonLost() }}</Button>
      <Button>{{ ButtonFound() }}</Button>
    </div>
    <footer>
      <p>{{ FooterText() }}</p>
    </footer>
  </div>
  <div class="counter">
    Placeholder für Counter
    <p>{{ counterValue }}</p>
  </div>
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
    HeaderText() {
      return "LOST & FOUND";
    },
    MainHeaderText() {
      return "Main Content";
    },
    MainText() {
      return "Some text here...";
    },
    FooterText() {
      return "Footer content";
    },
    Heading1Text() {
      return "H1 Heading";
    },
    Heading2Text() {
      return "H2 Heading";
    },
    Heading3Text() {
      return "H3 Heading";
    },
    ButtonBack() {
      return "Back";
    },
    ButtonNext() {
      return "Next";
    },
    ButtonLost() {
      return "Lost";
    },
    ButtonFound() {
      return "Found";
    },
    TextInputPlaceholder(type) {
      return `${type} input`;
    },
  },
};
</script>

<style>
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
