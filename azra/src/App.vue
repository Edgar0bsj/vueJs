<template>
  <nav class="container-fluid sticky-top px-0">
    <div class="container-fluid">
      <div class="container px-0">
        <nav class="navbar navbar-light navbar-expand-xl" id="navBar">
          <a href="#" class="navbar-brand">
            <h4 class="text-primary display-6 fw-bold mb-0">Azra <i class="fa fa-heart text-primary"></i></h4>
          </a>
          <button
            class="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars text-primary"></span>
          </button>
          <div class="collapse navbar-collapse py-3" id="navbarCollapse">
            <div class="navbar-nav mx-auto border-top">
              <router-link class="btn btn-outline-danger nav-item active" to="/">Convite</router-link>
              <router-link class="btn btn-outline-danger nav-item active" to="/Historia">História</router-link>
              <router-link class="btn btn-outline-danger nav-item active" to="/Galeria">Galeria</router-link>
              <router-link class="btn btn-outline-danger nav-item active" to="/informacoes">Informações</router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
#app {
  text-align: center;
  color: #2c3e50;
}
#navbarCollapse > div > a {
  margin: 0 10px;
}

</style>