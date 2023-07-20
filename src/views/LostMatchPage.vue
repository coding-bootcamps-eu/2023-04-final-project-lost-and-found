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
    <template v-if="matchesStore.matches[0].length > 0">
      <ul>
        <li v-for="item in matchesStore.matches[0]" :key="item.id">
          <!-- Use router-link to wrap the list item and specify the target route -->
          <!-- params: { id: item.id } -->
          <a href="#" @click.prevent="appMail(item)">
            {{ item }}
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

    return {
      matchesStore,
      lostPersonStore,
    };
  },
  mounted() {
    const itemsData = [this.matchesStore.matches];
    this.matchesStore.setData(itemsData);
  },
  methods: {
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
  height: 15px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  color: #333;
}

h2 {
  color: #b1fd8b;
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
.itemListStyle {
  background-color: black;
}
</style>
