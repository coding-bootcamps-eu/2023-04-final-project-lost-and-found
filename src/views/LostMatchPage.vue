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
    <template v-if="matchesStore.matches[0].length > 1">
      <ul
        v-for="item in matchesStore.matches[0]"
        :key="item"
        class="itemListStyle"
      >
        <li>xxx {{ item?.email }}</li>
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

  appMail() {
    const founderEmail = this.matchesStore.matches[0].email;
    const emailSubject = "You got a Match!";
    const emailContent = `Hello there, here is the email address of the founder of your item: ${founderEmail}. Get in touch with them and take your item back.
        If you also want to make the finder happy, bring them a chocolate, ice cream, or a beer as a small present ;)
        TODO: Please confirm the MATCH for us and click the link below as soon as you get your item. So we know everything is fine, and you are both happy!`;
    const mailOptions = {
      from: "loanfo.app@gmail.com", // Absender
      to: founderEmail, // Empfänger
      subject: emailSubject, // Betreff
      text: emailContent, // Inhalt
    };

    fetch("https://23-april.lost-and-found.api.cbe.uber.space/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mailOptions }),
    })
      .then((response) => response.json()) // Daten als JSON-Datei speichern
      .then((data) => {
        // Daten aus der JSON-Datei holen
        console.log(data); // Überprüfen Sie den Inhalt der data-Variable
      });

    // Überprüfen, ob die email-Eigenschaft in data vorhanden ist
    //       if (data.email){
    //         const founderEmail = data.email; // E-Mail-Adresse des Founders speichern

    //         transporter.sendMail(mailOptions, function (error, info) {
    //           if (error) {
    //             console.log(error);
    //             res.json(
    //               { message: "E-Mail wurde NICHT versendet." }
    //             )
    //           } else {
    //             console.log("E-Mail gesendet: " + info.response);
    //             res.json(
    //               { message: "E-Mail wurde versendet." }
    //             )
    //           }
    //         });

    //       } else {
    //         // Wenn die email-Eigenschaft nicht gefunden wurde, geben Sie eine Fehlermeldung zurück
    //         console.error("email Not found in API response.");
    //         res.json(
    //           { message: "E-Mail wurde NICHT versendet." }
    //         )
    //       }

    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data from the API:", error);
    //     });

    // };
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
