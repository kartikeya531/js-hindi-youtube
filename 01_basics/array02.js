const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros[3][1]) //flash

marvel_heros.concat(dc_heros)
//console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray) //[
 // 1, 2, 3, 4, 5,
 // 6, 7, 6, 7, 4,
//5]

console.log(Array.isArray("kartikeya")) //false 
console.log(Array.from("kartikeya"))  //[
                                      //'k', 'a', 'r',
                                      //'t', 'i', 'k',
                                      //'e', 'y', 'a'
                                          // ]

console.log(Array.from({name: "kartikeya"})) //     []


