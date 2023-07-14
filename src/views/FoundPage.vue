<template>
  <header>
    <div class="logo">
      <img src="../assets/foundLogo.png" alt="Logo Found" />
    </div>
  </header>

  <main>
    <!-- ITEM -->
    <p>What did you lose?</p>
    <select v-model="selectedItem" class="optionsItem">
      <option v-for="option in optionsItem" :key="option.value">
        {{ option.label }}
      </option>
    </select>

    <!-- COLOR -->
    <p>What is the basic color?</p>
    <select v-model="selectedColor" class="optionsColor">
      <option v-for="option in optionsColor" :key="option.value">
        {{ option.label }}
      </option>
    </select>

    <!-- MATERIAL -->
    <p>What is the basic material?</p>
    <select v-model="selectedMaterial" class="optionsMaterial">
      <option v-for="option in optionsMaterial" :key="option.value">
        {{ option.label }}
      </option>
    </select>

    <!-- EMAIL -->
    <p>Please insert your email:</p>
    <input
      type="email"
      :placeholder="TextInputPlaceholder('Email')"
      v-model="email"
    />

    <!-- DATE/TIME -->
    <p>When did you lose it?</p>
    <input
      type="text"
      :placeholder="TextInputPlaceholder('Calendar')"
      v-model="dateTime"
    />

    <!-- LOCATION -->
    <p>Where did you lose it?</p>
    <input
      type="text"
      :placeholder="TextInputPlaceholder('Location')"
      v-model="location"
    />

    <!-- DESCRIPTION -->
    <p>Describe it in your own words: (optional)</p>
    <input
      type="text"
      :placeholder="TextInputPlaceholder('Text')"
      v-model="description"
    />

    <!-- PICTURE UPLOAD -->
    <p>Picture upload (optional)</p>
    <input
      type="text"
      :placeholder="TextInputPlaceholder('Text')"
      v-model="picture"
    />
    <button>upload</button>
    <br />
    <button @click="getData()">SUBMIT</button>
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
      email: null,
      selectedItem: null,
      selectedColor: null,
      selectedMaterial: null,
      dateTime: null,
      location: null,
      description: null,
      picture: null,
      optionsItem: [
        { label: "Wallet" },
        { label: "Bag" },
        { label: "Phone" },
        { label: "Watch" },
        { label: "Key" },
        { label: "Clothing" },
      ],
      optionsColor: [
        { label: "Black" },
        { label: "White" },
        { label: "Brown" },
        { label: "Red" },
        { label: "Green" },
        { label: "Blue" },
        { label: "Yellow" },
        { label: "Silver" },
        { label: "Gold" },
      ],
      optionsMaterial: [
        { label: "All kinds of leather" },
        { label: "All kinds of plastic" },
        { label: "All kinds of metal" },
        { label: "All kinds of wood" },
        { label: "All kinds textiles" },
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
    getData() {
      const data = {
        email: this.email,
        selectedItem: this.selectedItem,
        selectedColor: this.selectedColor,
        selectedMaterial: this.selectedMaterial,
        dateTime: this.dateTime,
        location: this.location,
        description: this.description,
        picture: this.picture,
      };

      console.log("Data:", data);

      let url = "http://localhost:31415/filters";
      fetch(url, {
        method: "GET",
        body: JSON.stringify(),
      })
        .then((req) => req.json())
        .then((result) => {
          console.log(result);
          loadFilter(result, data);
        });

      function loadFilter(apiData, UIData) {
        // fetch load to API
        const productValue = getID(apiData.products, UIData, "selectedItem");
        const colorValue = getID(apiData.colors, UIData, "selectedColor");
        const materialValue = getID(
          apiData.materials,
          UIData,
          "selectedMaterial"
        );

        const uploadOBJ = {
          productId: productValue,
          colorId: colorValue,
          materialId: materialValue,
          timestampID: UIData.dateTime,
          location: UIData.location,
          description: UIData.description,
          email: UIData.email,
          hasMatch: false,
        };

        fetch("http://localhost:31415/entries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadOBJ),
        })
          .then((req) => req.json(uploadOBJ))
          .then((result) => {
            console.log(result);
          });
      }

      function getID(apiArr, UIData, UIDataKey) {
        let result = "";
        apiArr.forEach((element) => {
          if (element.name === UIData[UIDataKey]) {
            result = element.id;
          }
        });
        return result;
      }
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
