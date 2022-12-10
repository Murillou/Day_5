const arrayVazio = []
console.log(arrayVazio.length)

console.log('=====Outra Questão=====')

const arrayNum = [1, 2, 3, 4, 5, 6]
console.log(arrayNum)

console.log('=====Outra Questão=====')

console.log(arrayNum.length)

console.log('=====Outra Questão=====')

console.log(arrayNum[0], arrayNum[2], arrayNum[5])

console.log('=====Outra Questão=====')

const arrayVariado = [1, 'Abacaxi', [1,2,3], true, null, {}]
console.log(arrayVariado)
console.log(arrayVariado.length)
console.log(typeof arrayVariado[0], typeof arrayVariado[1], 
    typeof arrayVariado[2], typeof arrayVariado[3], typeof arrayVariado[4],
    typeof arrayVariado[5])

console.log('=====Outra Questão=====')

const ItsCompanies = []
ItsCompanies.unshift('Facebook', 'Google', 'Microsoft', 'Apple', 
'IBM', 'Oracle', 'Amazon')

console.log('=====Outra Questão=====')

console.log(ItsCompanies)

console.log('=====Outra Questão=====')

console.log(ItsCompanies.length)

console.log('=====Outra Questão=====')

console.log(ItsCompanies[0], ItsCompanies[3], ItsCompanies[6])

console.log('=====Outra Questão=====')

console.log(ItsCompanies.slice())

console.log('=====Outra Questão=====')

console.log(ItsCompanies[0].toUpperCase(), ItsCompanies[1].toUpperCase(), 
ItsCompanies[2].toUpperCase(), ItsCompanies[3].toUpperCase(), 
ItsCompanies[4].toUpperCase(), ItsCompanies[5].toUpperCase(), ItsCompanies[6].toUpperCase())

console.log('=====Outra Questão=====')

ItsCompanies.push('are big IT Companies')
console.log(ItsCompanies.join(' '))

console.log('=====Outra Questão=====')

let teste = ''
if (teste = ItsCompanies.includes('Facebook')){
    console.log('Essa empresa existe no Array')
} else {
    console.log('Essa empresa não existe no Array')
}

console.log('=====Outra Questão=====')

// incompleta

console.log('=====Outra Questão=====')

ItsCompanies.pop()
console.log(ItsCompanies.sort())

console.log('=====Outra Questão=====')

console.log(ItsCompanies.slice(0, 3))

console.log('=====Outra Questão=====')

console.log(ItsCompanies.slice(4, 7))

console.log('=====Outra Questão=====')

console.log(ItsCompanies.slice(3))

console.log('=====Outra Questão=====')

ItsCompanies.shift()
console.log(ItsCompanies)

 console.log('=====Outra Questão=====')

 const ItsCompaniesTwo = ['Facebook', 'Apple', 'Microsoft', 'Oracle', 'IBM', 'Amazon', 'Google']
 ItsCompaniesTwo.pop()
 console.log(ItsCompaniesTwo)

 console.log('=====Outra Questão=====')

 const itsCompaniesTree = ['Facebook', 'Microsoft', 'Oracle', 'IBM', 'Amazon', 'Google', 'Apple']
 console.log(itsCompaniesTree.splice())











