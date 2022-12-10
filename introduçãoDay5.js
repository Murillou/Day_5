
const arr = Array() // construindo array
console.log(arr)

const arr1 = [] // outra forma de construir array

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length) // usamos length para a saber quantidade de itens

const arr2 = [
    'Murillo',
    19,
    true,
    {País: 'Brasil', cidade: 'João Pessoa'},
    {Habilidades: ['Html', 'CSS', 'JS', 'Wordpress']}
]

console.log(arr2)

/* Podemos fazer uma array utilizando o módulo split('') */

// ultimo indice do array pode ser calculadora atraves do length
// const ultimoIndice = arr2 - 1
// console.log(arr2[ultimoIndice])

//methods
// fill
const array = Array(10).fill('Oi') 
console.log(array) // mostrará 'Oi' 10 vezes

// concat
const frutas = ['Banana', 'Morango', 'Maça']
const sucos = ['Acerola', 'Maracujá', 'Uva']
console.log(frutas.concat(sucos)) // mostrará as duas arrays em uma só

// length
const numeros = [1, 2, 3, 4]
console.log(numeros.length) // mostrará o tamanho do array = 4

// indexOf
const numerosTwo = [1, 2, 3, 4, 5]
console.log(numerosTwo.indexOf(1)) // retornará qual o indice do valor
console.log(numerosTwo.indexOf(7)) // se não existir retornará -1

// lastindexOf
const numerosTree = [1, 2, 3, 4, 1, 2, 3, 1, 5, 2]
console.log(numerosTree.lastIndexOf(1)) // mostrará qual o ultimo indice q esse valor aparece
console.log(numerosTree.lastIndexOf(9)) // se não existir, retornará -1

// includes
const numerosFour = [1, 2, 3, 4]
console.log(numerosFour.includes(3)) // mostrará se existe no array, caso exista = true
console.log(numerosFour.includes(9)) // caso não exista = false

// Array.isArray()
const arrayOne = [1, 2, 3]
console.log(Array.isArray(arrayOne)) // mostrará se é um array = true
const arrayFalse = 100
console.log(Array.isArray(arrayFalse)) // mostrará false por não ser um array

// toString
const numeroFive = [1, 2, 3, 4, 5] 
console.log(numeroFive)
console.log(numeroFive.toString()) // converterá o array em string ´

// join
const numeroSix = [1, 2, 3, 4, 5, 6]
console.log(numeroSix.join()) // juntará em uma strring que por padrão separa os itens do array por ','
console.log(numeroSix.join(' ')) // separará por espaços 

//slice
const numerosSeven = [1, 2, 3, 4, 5, 6, 7]
console.log(numerosSeven.slice()) // mostrará todo array
console.log(numerosSeven.slice(2,6)) // mostrará 3 ao 6, não conta o ultimo indice

//splice

//push
const numerosEight = [1, 2, 3, 4, 5, 6, 7]
numerosEight.push(8) // adiciona um valor ao fim do array
console.log(numerosEight) // mostrará com um oito no final

//pop
const numerosNine = [1, 2, 3, 4]
numerosNine.pop()// remove o ultimo indice do array
console.log(numerosNine) // mostrará do 1 ao 3

//shift
const numerosTen = [1, 2, 3, 4]
numerosTen.shift() // remove o primeiro indice do array
console.log(numerosTen) // mostrará do 2 ao 4

//unshift
const numerosTwentyOne = [1, 2, 3, 4]
numerosTwentyOne.unshift(0) // adiciona o valor especificado no inicio do array
console.log(numerosTwentyOne) // mostrará do 0 ao 4

//reverse
const numerosTwentyTwo = [1, 2, 3, 4]
numerosTwentyTwo.reverse() // vai inverter o array 
console.log(numerosTwentyTwo) // mostrará do 4 ao 1

//sort 
const frutasOne = ['Goiaba', 'Abacaxi', 'Melancia', 'Acerola']
frutasOne.sort() // ordem crescente PS: Da para mesclar com reverse
console.log(frutasOne) // mostrará na ordem alfabetica 


/* pode armazenar um array dentro de outro array*/
const arrayTeste = [1, 2, 3, 4]
const arrayTesteTwo = [5, 6, 7, 8]
const bothArrays = [arrayTeste, arrayTesteTwo]
console.log(bothArrays)
console.log(bothArrays.length)
