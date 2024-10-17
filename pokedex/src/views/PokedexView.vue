<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col" style="margin: 3rem 2rem">
          <h1>BUSCA DE POKEMONS</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder=""
          />
          <label for="floatingInput">Nome do Pokemon</label>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6" style="margin: 5% 0">
          <button
            type="button"
            style="padding: 0.6rem 20%"
            class="btn btn-outline-primary btn-lg"
          >
            Procurar
          </button>
        </div>
        <hr />
      </div>
    </div>

    <div class="container justify-content-cente align-self-center">
      <div class="card-group g-4">
        <div v-if="carregando" class="container">Carregando dados...</div>

        <div
          v-else
          v-for="pokemons in fildPokemons.slice(1)"
          :key="pokemons.url"
        >
          <Pokedex
            :nomePokemon="StrUpp(String(pokemons.name))"
            :imgPokemon="pokemons.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pokedex from "../components/Pokedex.vue";
import { PokemonService } from "../PokemonService";
export default {
  components: {
    Pokedex,
  },
  data() {
    return {
      fildPokemons: [
        {
          name: undefined,
          url: undefined,
          img: undefined,
        },
      ],
      carregando: true,
      barraDeProgresso: 0,
    };
  },
  methods: {
    start: async function () {
      await PokemonService.getPokemons(this.fildPokemons);
      await PokemonService.getFildImg(this.fildPokemons);

      this.carregando = false;
    },
    StrUpp: function (param) {
      return PokemonService.startStrUpp(param);
    },
  },
  created: function () {
    this.start();
  },
};
</script>

<style scoped>
</style>