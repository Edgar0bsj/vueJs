<template>
  <!-- ============Header============ -->
  <!-- NaviBar -->
  <nav class="navbar sticky-top navbar-dark bg-dark">
    <form class="container-fluid justify-content-center">
      <router-link
        class="btn btn-outline-success me-2"
        type="button"
        to="/pokedex"
        >Pokemons</router-link
      >
      <router-link class="btn btn-outline-success me-2" type="button" to="/"
        >Github</router-link
      >
      <router-link
        class="btn btn-outline-success me-2"
        type="button"
        to="/about"
        >Linkedin</router-link
      >
    </form>
  </nav>
  <!-- ====================== -->
  <router-view /><br>
  <!-- ============Footer============ -->
  <footer class="navbar navbar-dark bg-dark">
    <form class="container-fluid justify-content-center">
      <p class="mb-1">2024 &copy; Desenvolvido por Edgar Junior</p>
    </form>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
