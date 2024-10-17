<template>
  <div class="col">
    <div class="card text-center" style="width: 10rem">
      <img :src="imgPokemon" class="card-img-top" alt="Pokemon" />
      <div class="card-body">
        <h5 class="card-title">{{ nomePokemon }}</h5>
      </div>
      <div class="card-footer">
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Info
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" @click="eventInfo()" >Habilidades</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokedexView",
  props: {
    nomePokemon: String,
    imgPokemon: {
      type: String,
      required: true,
    },
  },
  methods:{
    eventInfo:function(){
      return window.alert('voce clicou!')
    }
  }
};
</script>

<style scoped>
.custom-card {
  width: 150px;
  height: 150px;
}
</style>