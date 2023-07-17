<template>
  <header>
    <div class="logo">
      <img src="../assets/lostLogo.png" alt="Logo Lost" />
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

    <form action="http://localhost:31415/api/send-email" method="post">
      <input
        type="email"
        name="toEmail"
        placeholder="E-Mail-Adresse"
        required
      />
      <!-- Button nur zu testzwecken muss bei fertigstellung gelöscht werden 
      bzw. mit click event von submit am ende der abfrage verbunden werden -->
      <button type="submit">E-Mail senden</button>
    </form>

    <!--      DATE/TIME      -->
    <p>When did you lose it?</p>
    <vue-date-picker></vue-date-picker>
    <!--      LOCATION      -->
    <p>Where did you lose it?</p>
    <input type="text" :placeholder="TextInputPlaceholder('Location')" />

    <!--      DESCRIPTION      -->
    <p>Describe it in your own words: (optional)</p>
    <input
      class="describeText"
      type="text"
      :placeholder="TextInputPlaceholder('Text')"
    />

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
import VueDatePicker from "@/components/VueDatePicker.vue";
export default {
  components: { VueDatePicker },
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
  background-color: #f5f1f1;
  padding: 20px;
}

main {
  padding: 20px;
  background-color: #a6b8fc;
}

footer {
  background-color: #f5f1f1;
  padding: 20px;
}

button {
  background-color: #b1fd8b;
  color: #4c3d40;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 278px;
  border: none;
  border-radius: 25px;
}

select {
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 25px;
}

p {
  color: #f5f1f1;
  padding-top: 30px;
  margin-bottom: 0;
  font-size: 20px;
}
.describeText {
  height: 100px;
}
</style>
