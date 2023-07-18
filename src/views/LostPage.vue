<template>
  <header>
    <h1 class="lost">LOST</h1>
  </header>

  <main>
    <!-- ITEM -->
    <p>What did you find?</p>
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

    <!--      EMAIL      -->
    <form action="http://localhost:31415/send-email" method="post">
      <input
        type="email"
        name="toEmail"
        placeholder="Deine E-Mail-Adresse"
        required
      />
    </form>

    <!--      DATE/TIME      -->
    <p>When did you lose it?</p>
    <vue-date-picker></vue-date-picker>

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
    <button @click="sendData()">SUBMIT</button>
  </main>

  <footer>
    <nav>
      <router-link to="/">Back</router-link>
    </nav>
  </footer>
</template>

<script>
import router from "../router/index";
import VueDatePicker from "@/components/VueDatePicker.vue";
//import { MatchesStore } from "@/stores/matchesStore";

export default {
  // setup() {
  //   const matchesStore = MatchesStore();
  //    console.log(matchesStore);
  //   return {
  //     matchesStore,
  //   };
  // },
  components: { VueDatePicker },
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
    sendData() {
      // const matchesStore = this.matchesStore;
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
      this.email = "";
      this.selectedItem = "";
      this.selectedColor = "";
      this.selectedMaterial = "";
      this.dateTime = "";
      this.location = "";
      this.description = "";
      this.picture = "";
      let urlEntries = "http://localhost:31415/entries";
      let urlFilters = "http://localhost:31415/filters";

      const UIDataInputKEYS = {
        itemId: "",
        materialId: "",
        colorId: "",
      };

      fetch(urlFilters, {
        method: "GET",
        body: JSON.stringify(),
      })
        .then((req) => req.json())
        .then((result) => {
          UIDataInputKEYS.itemId = getID(result.products, data, "selectedItem");
          UIDataInputKEYS.materialId = getID(
            result.materials,
            data,
            "selectedMaterial"
          );
          UIDataInputKEYS.colorId = getID(result.colors, data, "selectedColor");
          checkMatch(UIDataInputKEYS);
        });

      function getID(apiArr, UIData, UIDataKey) {
        let result = "";
        apiArr.forEach((element) => {
          if (element.name === UIData[UIDataKey]) {
            result = element.id;
          }
        });
        return result;
      }
      function checkMatch(UserInputKeysOBJ) {
        fetch(urlEntries, {
          method: "GET",
          body: JSON.stringify(),
        })
          .then((req) => req.json())
          .then((result) => {
            const matches = [];
            result.forEach((element) => {
              if (
                element.materialId === UserInputKeysOBJ.materialId &&
                element.colorId === UserInputKeysOBJ.colorId &&
                element.productId === UserInputKeysOBJ.itemId
              ) {
                matches.push(element);
              }
            });

            if (matches.length >= 1) {
              alert(
                "Herzlichen Glückwunsch. Wir haben potentielle Treffer für Dich"
              );
              // matchesStore.setData(matches);
            } else {
              router.push("/lost/lostnonmatchpage");
            }
          });
      }
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
