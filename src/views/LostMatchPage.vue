<template>
  <header>
    <h1 class="lost">MATCH</h1>
  </header>

  <main>
    <div class="heading">
      <div class="matchIMG">
        <img src="../../src/assets/match.png" alt="" />
      </div>
      <h2>
        YES! <br />
        We already have some matches for you!
        <br />
        Is one of these items yours?
        <br />
        Choose your item and get connected with the founder.
      </h2>
    </div>

    <!-- <template v-if="matchesStore.matches[0].length > 0">
      <ul>
        <li v-for="item in matchesStore.matches[0]" :key="item.id">
          <a href="#" @click.prevent="appMail(item)">
            {{ item }}
          </a>
        </li>
      </ul>
    </template> -->

    <template v-if="matchesStore.matches.length > 0">
      <ul>
        <li v-for="match in matchesStore.matches" :key="match.id">
          <a href="#" @click.prevent="appMail(match)">
            {{ getMatchDetails(match) }}
          </a>
        </li>
      </ul>
    </template>
  </main>
  <footer>
    <nav>
      <router-link to="/lost">Back</router-link>
    </nav>
    <br />
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<script>
import { useMatchesStore } from "@/stores/matchesStore";
import { uselostPersonStore } from "@/stores/lostPersonStore";

export default {
  // ...
  setup() {
    const matchesStore = useMatchesStore();
    const lostPersonStore = uselostPersonStore();

    matchesStore.setListItems([
      { id: 0, name: "Item 1" },
      { id: 1, name: "Item 2" },
    ]);

    return {
      matchesStore,
      lostPersonStore,
    };
  },
  mounted() {
    // const itemsData = [this.matchesStore.matches];
    // this.matchesStore.setData(itemsData);
  },
  methods: {
    // Function to convert match data to a user-friendly string
    getMatchDetails(match) {
      const product = this.getProductById(match.productId);
      const color = this.getColorById(match.colorId);
      const material = this.getMaterialById(match.materialId);

      return `${product} in ${color} (${material})`;
    },
    // Function to get product name by its ID
    getProductById(productId) {
      const product = this.matchesStore.listItems.find(
        (item) => item.id === productId
      );
      return product ? product.name : "Unknown Product";
    },

    // Function to get color name by its ID
    getColorById(colorId) {
      const color = this.matchesStore.optionsColor.find(
        (item) => item.id === colorId
      );
      return color ? color.label : "Unknown Color";
    },

    // Function to get material name by its ID
    getMaterialById(materialId) {
      const material = this.matchesStore.optionsMaterial.find(
        (item) => item.id === materialId
      );
      return material ? material.label : "Unknown Material";
    },

    sendMail(founderEmail, emailSubject, emailContent) {
      const mailOptions = {
        toEmail: founderEmail, // Empfänger
        subject: emailSubject, // Betreff
        msg: emailContent, // Inhalt
      };

      return fetch(
        "https://23-april.lost-and-found.api.cbe.uber.space/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailOptions),
        }
      )
        .then((response) => response.json()) // Daten als JSON-Datei speichern
        .then((data) => {
          console.log(data);
        });
    },

    appMail(input) {
      const founderEmail = input.email;
      const looserEmail = this.lostPersonStore.data.email;
      const emailSubject = "You got a Match!";
      const looserEmailSubject = "You got a Match!";
      const emailContent = `Hello, here is the email address of the person who lost his item: ${looserEmail}. Get in touch with him/her and give it back. TODO: Please confirm the MATCH for us and click the link below, as soon as you got your item. So we know everything is fine and you are both happy!`;
      const looserEmailContent = `Hello, here is the email address of the founder of your item: ${founderEmail}. Get in touch with him/her and take your item back. If you also want to make the finder happy, bring them a chocolate, ice cream, or a beer as a small present ;)
      TODO: Please confirm the MATCH for us and click the link below as soon as you get your item. So we know everything is fine, and you are both happy!`;

      const sendMailFetches = [
        this.sendMail(founderEmail, emailSubject, emailContent),
        this.sendMail(looserEmail, looserEmailSubject, looserEmailContent),
      ];
      Promise.all(sendMailFetches).then((data) => {
        this.$router.push("/lostmatchpage/lostmessagepage");
        console.log(data);
      });
    },
  },
};
</script>

<style scoped>
html {
  font-family: "Roboto", sans-serif;
  background-color: #a6b8fc;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a6b8fc;
}

h1 {
  font-size: 50px;
  color: #f5f1f1;
}

h2,
h3 {
  color: #f5f1f1;
  max-width: 35%;
  margin-left: 100px;
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 3rem;
  /* padding-top: 50px; */
  /* padding-bottom: 50px; */
}

.lost {
  color: #f5f1f1;
  padding-top: 25px;
}

main {
  background-color: #a6b8fc;
  padding-top: 0;
  padding-bottom: 175px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer {
  height: 15px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
