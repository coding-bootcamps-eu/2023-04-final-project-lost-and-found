<template>
  <header>
    <h1>Contact us or visit Profiles below</h1>
  </header>
  <main>
    <div class="contact">
      <div>
        <div class="mailUs">
          <img src="../../src/assets/iconM.png" alt="Mail Icon" />
          <div class="mailLink">
            <a
              class="links"
              target="_blank"
              href="mailto:christine.maria.metz@gmail.com"
              >Christine Maria Metz</a
            >
            <a
              class="links"
              target="_blank"
              href="mailto:bea.pitzschke.coden@gmail.com"
              >Bea Pitzschke</a
            >
            <a
              class="links"
              target="_blank"
              href="mailto:yueksek.onur@gmail.com"
              >Onur Yüksek</a
            >
            <a class="links" target="_blank" href="mailto:schulzst01@gmail.com"
              >Stefan Schulz</a
            >
          </div>
        </div>

        <div class="github">
          <img src="../../src/assets/iconGH.png" alt="GitHub Icon" />
          <div class="ghLink">
            <a
              class="links"
              target="_blank"
              href="https://github.com/christinemariametz"
              >Christine Maria Metz</a
            >
            <a class="links" target="_blank" href="https://github.com/BeaCoden"
              >Bea Pitzschke</a
            >
            <a
              class="links"
              target="_blank"
              href="https://github.com/yueksek-onur"
              >Onur Yüksek</a
            >
            <a
              class="links"
              target="_blank"
              href="https://github.com/Schulz-CM001"
              >Stefan Schulz</a
            >
          </div>
        </div>

        <div class="linkedin">
          <img src="../../src/assets/iconLI.png" alt="LinkedIn Icon" />
          <div class="liLink">
            <a
              class="links"
              target="_blank"
              href="https://www.linkedin.com/in/christine-maria-metz-6b7a18177/"
            >
              Christine Maria Metz</a
            >
            <a
              class="links"
              target="_blank"
              href="https://www.linkedin.com/in/bea-pitzschke-1488a0270/"
            >
              Bea Pitzschke</a
            >
            <a
              class="links"
              target="_blank"
              href="https://www.linkedin.com/in/onur-y%C3%BCksek-501988156/"
            >
              Onur Yüksek</a
            >
            <a
              class="links"
              target="_blank"
              href="https://www.linkedin.com/in/stefanconvert/"
            >
              Stefan Schulz</a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <nav class="home">
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<style scoped>
header {
  width: auto;
  height: 100px;
  background-color: #f5f1f1;
  padding: 20px;
}

footer {
  width: auto;
  height: 100px;
  background-color: #f5f1f1;
  padding: 20px;
}

main {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: "contact";
  justify-content: center;
}

h1 {
  color: #4c3d40;
}

img {
  width: 75px;
  height: 75px;
  margin: 10px;
}

a.links {
  color: #4c3d40;
  text-decoration: none;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px;
  cursor: pointer;
}

a.links:hover {
  color: #4c3d40;
  background-color: #a6b8fc;
  border-radius: 7px;
}

.mailUs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin: 30px 10px;
  background: #f5f1f1;
  border-radius: 15px;
}

.mailLink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.linkedin {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin: 30px 10px;
  background: #f5f1f1;
  border-radius: 15px;
}

.liLink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.github {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin: 30px 10px;
  background: #f5f1f1;
  border-radius: 15px;
}

.ghLink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
