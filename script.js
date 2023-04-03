// Com o array de pokémons disponibilizado, faça o que se pede:
// Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
// Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
// Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo.


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

function alteraVida(poke) {
  return {...poke, vida: 100}
}
alteraVida(pokemons)

const pokemonsVidaCheia = pokemons.map(alteraVida)
console.log (pokemonsVidaCheia)

const pokemonDeFogo = pokemons.filter((fogo) => {
  return fogo.tipo === "fogo"
})
console.log(pokemonDeFogo)
console.log(pokemons)


// const multiplicaPor3 = (array) => {
//   const novoArray = []
//   for (let i = 0; i < array.length; i++) {
//     const numeroMultiplicado = array[i] * 3
//     novoArray.push(numeroMultiplicado)
//   }
//   return novoArray
// }
// const arrNumeros = [0, 8, 55, 6, 3, 7]

// const retornaPares = (array) => {
//   const novoArray = []
//   for (let elemento of array) {
//     if (elemento % 2 === 0) {
//       novoArray.push(elemento)
//     }
//   }
//   return novoArray
// }
// console.log("arrNumeros", arrNumeros)
// console.log("multiplica por 3", multiplicaPor3(arrNumeros))
// console.log("retorna Pares", retornaPares(arrNumeros))


// const arrayMultiplicadoPor3 = arrNumeros.map((elemento, indice, arrayInteiro) => {
//   return elemento * 3
// })

// console.log(arrayMultiplicadoPor3)

// const arrayPares = arrNumeros.filter((elemento) => {
//   if (elemento % 2 === 0) {
//     return true
//   }
// })
// console.log(arrayPares)
