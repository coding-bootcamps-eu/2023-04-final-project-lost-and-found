<template>
  <header>
    <h1>About us</h1>
  </header>
  <main>
    <div class="about">
      <h2>
        We met in April 2023 during further training at Coding Bootcamps Europe.
        <br />The Lost & Found App is our final project which we worked out,
        developed and created together.
      </h2>
      <ul>
        <li>
          <img src="../../src/assets/tine.png " alt="Profile Picture Tine" />
          <p>Christine Maria Metz</p>
        </li>

        <li>
          <img src="../../src/assets/bea.png" alt="Profile Picture" />
          <p>Bea Pitzschke</p>
        </li>
        <li>
          <img src="../../src/assets/onur.png" alt="Profile Picture" />
          <p>Onur Yüksek</p>
        </li>
        <li>
          <img src="../../src/assets/stefan.png" alt="Profile Picture" />
          <p>Stefan Schulz</p>
        </li>
      </ul>
    </div>
    <div class="aside">
      <h3>
        Would you also like to become a<br />
        <strong>frontend developer</strong> ? <br />
        Click the icon below and it will take you directly to the boot camp
      </h3>
      <a
        class="codingLogo"
        target="_blank"
        href="https://www.coding-bootcamps.eu/"
      >
        <img
          src="../../src/assets/iconCBE.png"
          alt="Coding Bootcamps Europe Icon"
      /></a>
    </div>
  </main>
  <footer>
    <nav>
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

main {
  padding: 50px;
  max-width: 80%;
  margin: auto;
}

.aside {
  padding-top: 50px;
}

footer {
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  margin: 0;
  /* height: 130px; */
  background-color: #f5f1f1;
  /* padding: 10px; */
  font-size: 0.75rem;
  position: inherit;
}

h2 {
  padding-bottom: 30px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}

ul li img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 0px #000000;
}
</style>
