<template>
  <main>
    <div class="about">
      <h1>There is always a beginning</h1>
      <a
        class="codingLogo"
        target="_blank"
        href="https://www.coding-bootcamps.eu/"
      >
        <img
          src="../../src/assets/iconCBE.png"
          alt="Coding Bootcamps Europe Icon"
      /></a>
      <h2>
        "We met each other at Coding Bootcamps Europe and we are happy to share
        our first project with you."
      </h2>

      <h2>We are 4 trainees...</h2>
      <ul>
        <li>
          <img src="../../src/assets/tine.png " alt="Profile Picture Tine" />
          Tine
        </li>

        <li>
          <img src="../../src/assets/bea.png" alt="Profile Picture" />
          Bea
        </li>
        <li>
          <img src="../../src/assets/onur.png" alt="Profile Picture" />
          Onur
        </li>
        <li>
          <img src="../../src/assets/stefan.png" alt="Profile Picture" />
          Stefan
        </li>
      </ul>
    </div>
  </main>
  <footer>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </footer>
</template>

<style scoped>
main {
  padding: 50px;
  max-width: 80%;
  margin: auto;
}

footer {
  width: 100%;
  height: 100px;
  background-color: #f5f1f1;
  padding: 20px;
}

h1 {
  color: #a6b8fc;
  padding-top: 30px;
  padding-bottom: 100px;
}

h2 {
  max-width: 500px;
  margin: auto;
  padding-bottom: 30px;
}
</style>
