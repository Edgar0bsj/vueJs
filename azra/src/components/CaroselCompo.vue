<template>
  <div data-bs-spy="scroll" data-bs-target="#navBar" id="weddingHome">
    <div class="container-fluid carousel-header px-0">
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- ====================================================== -->
          <div class="carousel-item active caroselImgBack" id="carosel1">
            <!-- ================================================== -->
            <div class="carousel-caption">
              <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px">
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0 homeTitulo"
                    style="letter-spacing: 3px"
                  >
                    Comemorando o primeiro de muitos sorrisos!
                  </h4>
                </div>
                <h1 class="display-1 text-capitalize text-white mb-3">
                  Azra <i class="fa fa-heart text-primary"></i>
                </h1>
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0"
                    style="letter-spacing: 3px"
                  >
                    Mar 01 2025
                  </h4>
                </div>
                <div
                  class="d-flex align-items-center justify-content-center homeLinks"
                >
                  <RouterLink class="btn btn-outline-danger" to="/confirmar">História</RouterLink>
                  <RouterLink class="btn btn-outline-danger" to="/confirmar">Confirmar-Presença</RouterLink>
                </div>
              </div>
            </div>
          </div>
          <!-- ====================================================== -->
          <div class="carousel-item caroselImgBack" id="carosel2">
            <!-- ====================================================== -->
            <div class="carousel-caption">
              <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px">
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0 homeTitulo"
                    style="letter-spacing: 3px"
                  >
                    Celebrando o primeiro ano da nossa pequena estrela!
                  </h4>
                </div>
                <h1 class="display-1 text-capitalize text-white mb-3">
                  Azra <i class="fa fa-heart text-primary"></i>
                </h1>
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0"
                    style="letter-spacing: 3px"
                  >
                    Mar 01 2025
                  </h4>
                </div>
                <div
                  class="d-flex align-items-center justify-content-center homeLinks"
                >
                <RouterLink class="btn btn-outline-danger" to="/confirmar">História</RouterLink>
                <RouterLink class="btn btn-outline-danger" to="/confirmar">Confirmar-Presença</RouterLink>
                </div>
              </div>
            </div>
          </div>
          <!-- ====================================================== -->
          <div class="carousel-item caroselImgBack" id="carosel3">
            <!-- ====================================================== -->
            <div class="carousel-caption">
              <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px">
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0 homeTitulo"
                    style="letter-spacing: 3px"
                  >
                    Azra, um ano de amor e alegria!
                  </h4>
                </div>
                <h1 class="display-1 text-capitalize text-white mb-3">
                  Azra <i class="fa fa-heart text-primary"></i>
                </h1>
                <div
                  class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style="border-style: double"
                >
                  <h4
                    class="text-white text-uppercase fw-bold mb-0"
                    style="letter-spacing: 3px"
                  >
                    Mar 01 2025
                  </h4>
                </div>
                <div
                  class="d-flex align-items-center justify-content-center homeLinks"
                >
                <RouterLink class="btn btn-outline-danger" to="/confirmar">História</RouterLink>
                <RouterLink class="btn btn-outline-danger" to="/confirmar">Confirmar-Presença</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CaroselCompo",
  props: {
    imgCarosel1: String,
    imgCarosel2: String,
    imgCarosel3: String,
  },
};
</script>
  
  <style>

/* Buttons */
.caroselImgBack > div > div > div.d-flex.align-items-center.justify-content-center.homeLinks a{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: auto 4px;
}


/* Titulo Principal */
.homeTitulo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}

/* Nome da aniversariante */
.caroselImgBack > div > div > h1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

/* ========== CAROSEL ==================== */
.caroselImgBack {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#carosel1{
  background-image: url('../assets/img/temporario.jpg');
}
#carosel2{
  background-image: url('../assets/img/temporario.jpg');
}
#carosel3{
  background-image: url('../assets/img/temporario.jpg');
}
/* ========================================== */
</style>