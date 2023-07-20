<template>
  <header>
    <h1 class="lost">LOST</h1>
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

    <!--      EMAIL      -->
    <p>Please insert your email:</p>
    <form action="http://localhost:31415/send-email" method="post">
      <input
        v-model="email"
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
    <open-layers-map></open-layers-map>
    <!--<input
      type="text"
      :placeholder="TextInputPlaceholder('Location')"
      v-model="location"
    />-->

    <!-- DESCRIPTION -->
    <p>Describe it in your own words: (optional)</p>
    <input
      class="description"
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
    <button class="submit" @click="sendData()">SUBMIT</button>
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
import { useMatchesStore } from "@/stores/matchesStore";
import { uselostPersonStore } from "@/stores/lostPersonStore";
import OpenLayersMap from "@/components/OpenLayersMap.vue";

export default {
  setup() {
    const matchesStore = useMatchesStore();
    const lostPersonData = uselostPersonStore();
    return {
      matchesStore,
      lostPersonData,
    };
  },
  components: { VueDatePicker, OpenLayersMap },
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
      console.log(this.email);
      // regex
      if (!this.email) {
        alert("please insert your email");
        return;
      } else {
        if (!isValidEmail(this.email)) {
          alert("please enter a valid email address ");
          return;
        }
      }
      function isValidEmail(email) {
        //const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x7f])+)\])/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      const matchesStore = this.matchesStore;
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
      let urlEntries =
        "https://23-april.lost-and-found.api.cbe.uber.space/entries";
      let urlFilters =
        "https://23-april.lost-and-found.api.cbe.uber.space/filters";

      const UIDataInputKEYS = {
        itemId: "",
        materialId: "",
        colorId: "",
      };
      this.lostPersonData.setData(data);
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
                element.email !== null &&
                element.materialId === UserInputKeysOBJ.materialId &&
                element.colorId === UserInputKeysOBJ.colorId &&
                element.productId === UserInputKeysOBJ.itemId
              ) {
                matches.push(element);
              }
            });

            if (matches.length >= 1) {
              // alert(
              //   "Herzlichen Glückwunsch. Wir haben potentielle Treffer für Dich"
              // );
              matchesStore.setData(matches);
              router.push("lost/lostmatchpage");
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
  border-radius: 5px;
}

select {
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 5px;
}

p {
  color: #f5f1f1;
  padding-top: 30px;
  margin-bottom: 0;
  font-size: 20px;
}
.description {
  height: 100px;
}

.submit {
  margin: 50px;
  font-size: larger;
}
</style>
