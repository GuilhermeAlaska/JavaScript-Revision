// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top

let pao = true
let queijo = true
// && Only works if they are both true
//const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
// || Works if one of them is true
const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18

let age = 17
const canDrive = age >= 18 ? 'Can Drive' : 'Cant Drive'

console.log(canDrive)