<template>
  <div class="container-fluid gallery position-relative" id="weddingGallery">
    <div class="container position-relative py-5">
      <div
        class="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 800px"
      >
        <h1 class="display-2 text-dark">Azra Galeria</h1>
        <p class="fs-5 text-dark">Momentos inesquecíveis do primeiro ano</p>
      </div>
      <div class="row g-4">
        <!-- ---imagens---- -->
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div class="gallery-item">
            <div class="gallery-img">
              <img class="img-fluid w-100" src="../assets/img/galeria1.jpg" alt="" />
              <div class="hover-style"></div>
            </div>
            <div
              class="gallery-overlay bg-light border-secondary border-top-0 p-4"
              style="border-style: double"
            >
              <h5>Titulo</h5>
              <p class="text-dark mb-0">Mar 00, 2024</p>
            </div>
          </div>
        </div>
        <!-- ---imagens---- -->

        <div class="container">
          <div class="row d-flex align-self-center align-items-center">
            <div class="col">
              <RouterLink class="btn btn-outline-danger" to="/confirmar"
                >Confirmar-Presença</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>