<template>
  <div class="container-fluid RSVP-form py-5" id="weddingRsvp">
    <div class="container py-5">
      <div
        class="mb-5 text-center mx-auto wow fadeIn"
        data-wow-delay="0.1s"
        style="max-width: 800px"
      >
        <h1 class="display-2 text-primary">Confirmar Presença</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div
            class="p-5 border-secondary position-relative"
            style="border-style: double"
          >
            <div
              class="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn"
              data-wow-delay="0.1s"
              style="
                width: 75%;
                border-style: double;
                top: 0;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            >
              Estamos ansiosos para comemorar com você!
            </div>
            <!-- capturndo os dados -->
            <form @submit.prevent="submitForm">
              <!-- =============== -->
              <div class="row gx-4 gy-3">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="form-group">
                    <label for="Examplename" class="form-label text-dark"
                      >Nome</label
                    >
                    <input
                      v-model="name"
                      required
                      type="text"
                      class="form-control py-3 border-0"
                      id="name"
                      placeholder="Nome"
                      style="color: black"
                    />
                  </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="form-group">
                    <label for="Examplename" class="form-label text-dark"
                      >Sobrenome</label
                    >
                    <input
                      v-model="sobrenome"
                      required
                      type="text"
                      class="form-control py-3 border-0"
                      id="sobrenome"
                      placeholder="Sobrenome"
                      style="color: black"
                    />
                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div class="form-group">
                    <label for="exampleselect" class="form-label text-dark"
                      >Número de convidados</label
                    >
                    <select
                      v-model="qtdConvidados"
                      class="form-control bg-white text-dark py-3 border-0"
                      id="convidados"
                      placeholder="Number Of Guests"
                      style="color: black"
                    >
                      <option>Somente eu</option>
                      <option>02 Convidados</option>
                      <option>03 Convidados</option>
                      <option>04 Convidados</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div class="form-group">
                    <label for="exampletextarea" class="form-label text-dark"
                      >Mensagem</label
                    >
                    <textarea
                      v-model="mensagem"
                      name="text"
                      class="form-control border-0"
                      id="mensagem"
                      cols="30"
                      rows="5"
                      placeholder="Message"
                      style="color: black"
                    ></textarea>
                  </div>
                </div>

                <div
                  class="col-12 text-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <!-- Alerta de sucesso -->
                  <div v-if="sucesso" class="alert alert-success" role="alert">
                    Dados enviados com sucesso!
                  </div>

                  <!-- ================== -->
                  <button
                    type="submit"
                    class="btn btn-primary btn-primary-outline-0 py-3 px-5"
                  >
                    Confirma Presença!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="row g-5 justify-content-center text-center">
          <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
            <div class="p-4 border-secondary" style="border-style: double">
              <h4>Endereço</h4>
              <p class="text-dark">Rua ...</p>
            </div>
          </div>
          <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="p-4 border-secondary" style="border-style: double">
              <h4>Data</h4>
              <p class="mb-0 text-dark">01 Mar 2025</p>
            </div>
          </div>
          <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div class="p-4 border-secondary" style="border-style: double">
              <h4>Horario</h4>
              <p class="mb-0 text-dark">PM 16:00</p>
            </div>
          </div>
          <div class="col-12 wow fadeIn" data-wow-delay="0.2s">
            <div class="border-secondary" style="border-style: double">
              <iframe
                class="w-100"
                style="height: 450px; margin-bottom: -6px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.5342979622237!2d-43.43141838996827!3d-22.78265783335877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966ea64893187%3A0x717191f5ec4ff7db!2sMesquita!5e0!3m2!1spt-BR!2sbr!4v1729610526809!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex align-self-center align-items-center">
        <div class="col">
          <RouterLink class="btn btn-outline-danger" to="/">Voltar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      sobrenome: "",
      qtdConvidados: "",
      mensagem: "",
      sucesso: false,
    };
  },
  methods: {
    resetForm(){
      this.name = ''
      this.sobrenome = ''
      this.qtdConvidados = ''
      this.mensagem = ''
    },
    submitForm() {
      const formData = new FormData();
      formData.append("entry.1888297634", this.name);
      formData.append("entry.791172253", this.sobrenome);
      formData.append("entry.116684679", this.qtdConvidados);
      formData.append("entry.1064734079", this.mensagem);
      const googleForm =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeu9EXmlmBDby4i5Hx4MVo3BNw-fQkZ3G-LHeR7gD3FCAdjLQ/formResponse";

      fetch(googleForm, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then(() => {
          console.log("Presença Confirmada com sucesso!");
          this.sucesso = true; // -> mostra o alerta de sucesso
          this.resetForm(); // -> resetar o formulario

          setTimeout(() => {
            this.sucesso = false;
          }, 3000);
        })
        .catch((err) => {
          console.error(`Erro ao enviar os dados ${err}`);
        });
    },
  },
};
</script>

<style>
</style>