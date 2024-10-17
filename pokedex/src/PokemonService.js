import axios from "axios"

export class PokemonService {

    static async getPokemons(lista) {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
        for (let elemento of result.data.results) {
            try {
                lista.push({
                    name: elemento.name,
                    url: elemento.url,
                    img: undefined,
                })
                console.log("Pokemons capturados!")
            } catch (error) {
                console.error(`Erro ao capturar o pokemon ${elemento.name} ` + error)
            }
        }
    }
    static async getFildImg(lista) {
        lista.forEach(async (elemento, index) => {
            if(!(elemento.name == undefined)){
            try {
                let result = await axios.get(elemento.url)

                lista[index].img = result.data.sprites.front_shiny

                console.log(
                    `Imagem adicionada para o Pokémon: ${lista[index].name}`
                )
            } catch (err) {
                console.error(`ERRO! ${err}`)
            }
        }
        })
    }
    static startStrUpp(str){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}

