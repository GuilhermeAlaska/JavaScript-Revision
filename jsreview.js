/*  # JS Review by Guilherme Teixeira


    To index a script file inside HTML use:
    <script src="./jsreview.js"></script>
    
    // Creates a one line comment
    /* Creates a multi line comment

    "" / aspas duplas / inside it can be used multi (''') / 
    '' / aspas simples / make "" go inside text
    `` / template literals or template strings / Inside it can be used both ('"'") / Can use line break / Can use math expressions (`A soma de duas unidades é ${1 + 1}`)
*/

console.log(`Bem-vindo a minha revisão`)
//console.log(`Math expression ${1 + 1}`)

/*
    Number types
    33 / -33 - inteiros
    12.5 - Reais - float
    NaN - Not a Number
    Infinity - Infinito

    Boolean - True/False

    * undefined

    * null
        a object that doesn't have anything
        different from undefined

    Object
        Property / Attributes
        Funcionality / Methods
            {property: "value"}
 */
// console.log({
//     name: "Guilherme",
//     idade: "20",
//     andar: "sim"
// })

/*  Array   (Vetors)
        A list
        Data grouping
 */

// console.log([
//     "Leite",
//     "Ovos",
//     2,
//     3
// ])
/*
*Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

## Primitivos (não sofrem alterações)

* String "abc" is different from "ABC" / 
* Number
* Boolean
* undefined
* Symbol
* BigInt

## Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## Primitivo Estrutural / Structural Root Primitive

* null

    Variables
    Simbolic names to receive a value
    Identifiers
    3 reserved words to receive a variable
        * var
        * let / Most common use
        * const = constant
    
*/
// var clima = "Quente" / var and let works the same way
// let clima = "Quente"
//const clima = "Agradavel"
//clima = "Frio"  // No need to create a new variable, just assign a new value for a existing var
// if you try to assign a new value for a const it will fail the code
//console.log(clima)

/* Scope functioning

    var is global and works outside a scope block
    It will be recognized that it exists, but it'll not see the value inside of the scope if the code is above

    Hoisting
 */

//console.log('> existe x antes do bloco? ', x)

//{ var x = 0 }

//console.log('> existe x depois do bloco? ', x)


//console.log('Existe y antes do bloco?', y)


//let y = 2
//{
    // even with console.log inside the scope it can't access y value, needs to be under it to see

    //let y = 0 / this way it's creating a new variable, not related to previous y
    
    //y = 1 // it's now receiving the y above, and updating it's value

    //console.log('Existe y DENTRO do bloco?', y)

//}
//console.log('Existe y depois do bloco?', y)

//const y = 5

    //{const y = 9
        //console.log('Dentro do bloco o valor é ', y)}
// If the const its in the same block of another const, it will fail the program
//const y = 4
//console.log('Fora do bloco o valor é ', y)

/* Strategy to form names

    Can do:
        Begin with these special caracters > $ _
        Letters
        Accents
        Upper and lower case cause differentiation

    No can do:
        Begin with numbers
        Put empty spaces in the name

    Ideal:
        Create names that make sense
        That explains what the variable is or what it's doing
        camelCase   / Every new word begins with uppercase
        snake_case  / Every new word comes with a underscore '_'
        Write in english so others developers can understand

 */

    //let name, age
    //name = "Guilherme"
    //age = 20

    //console.log('O ' + name + ' tem ' + age + ' anos.')

// Use + to concatenate text and variables

// Interpolating values with template literals or template strings
    //console.log(`o ${name} tem ${age} anos.`)



// Revision object {}

// const person ={
//     name: 'Guilherme',
//     age: 20,
//     weight: 70,
//     isAdmin: true
// }
// Use - 'object'.'argument - to search for a property inside object
// console.log(person.name)
// console.log(`${person.age} anos, tem ${person.weight} kilos e se chama ${person.name}.`)



// Revision Arrays []

// const animals = [
//     'Lion',
//     'Monkey',
//         {
//             name: 'Cat',
//             age: 3
//         }
// ]
// // Access values inside the array
// // Arrays starts with 0, 1, 2, that's why you can see the .name 
// console.log(animals[1])
// console.log(animals[2].name)



// Revision Functions

// Declaration of the function // Function statement
// function createPhrases() {
//     console.log('Estudar é muito bom')
//     console.log('Paciência e persistência')
//     console.log('Revisão é a mãe do aprendizado')
// }
// // Execution of the function
// createPhrases()

// Function expression
// Function anonymous

//  Parameters
//const perm = function(number1, number2){
    //console.log(number1 + number2)
    // Can use any mathematical expression
    // (/ * > + < <= any other)}

// Arguments
//perm(2, 3)
//console.log(perm)

// const sum = function(number1, number2){
//     total = number1 + number2
//     return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`O número 1 é ${number1}`)
// console.log(`O número 2 é ${number2}`)

// console.log(`A soma dos dois é ${sum(number1, number2)}`)
// // The total parameter below, only can be viewed because the console.log above already runned the function and bring total out of the scope
// // But if you use var declaration inside the scope it'll work normal
// console.log(total)

// // First it was declared 2 parameters to the function
// function fazerSuco(fruta1, fruta2) {
//     // return is bringing the parameters togheter out of the scope
//     return 'Suco de ' + fruta1 + fruta2
// }
// // const is giving the parameters arguments and bringing the return of the function
// // fazerSuco + 'first parameter' + 'second parameter'
// const copo = fazerSuco('banana ', 'maça.')

// console.log(copo)



// let subject = 'create video'
// // It's giving the first subject argument

// function createThink(subject) {
//     subject = 'study'
//     // New declaration
//     return subject
//     // Return is bringing out of scope another subject argument
// }
// console.log(subject)
// console.log(createThink(subject)) 
// console.log(subject)
// // The second console.log is referencing to the the subject that's inside the function createThink


// Function Hoisting
// It has been hoisting
// sayMyName()

// function sayMyName() {
//     console.log('Guilherme')
// }



// // Arrow function
// const sayMyName = () => {
//     console.log('Guilherme')
// }
// // Execute the function, doing whatever is inside it
// sayMyName()




// // Bringing out a variable by calling it's name
// function sum() {
//     let name = 'Guilherme'
//     let name2 = 'Guilherme2'
//     // Only works if the variables are inside a object
//     return {
//         name,
//         name2
//     }
// }
// // Calling the parameters by name
// console.log(sum().name2)



// // Callback function

// function sayMyName(name) {
//     console.log('Antes de executar a função callback')

//     // name() is calling a function outside the scope
//     name()

//     console.log('Depois de executar a função callback')
// }

// sayMyName(
    // This function is providing the () a new value/argument
//     () => {
//         console.log('Estou em uma função callback.')
//     }

// )

// Function constructor
    // new expression
    // creates a new object


// function Person(name) {
//     this.name = name
//     this.walk = function() {
//         return this.name + " está andando."
//     }
// }


// const Guilherme = new Person("Guilherme")
// const joao = new Person ("João")


// console.log(Guilherme.walk())
// console.log(joao.walk())


// let date = new Date ("2020-12-01")

// console.log(date)


// Manipulating strings in numbers / numbers in strings

// let string = "123"

// console.log(Number(string))

// let number = 321
// //String(number) / It can change the number into a string but won't show without console.log

// console.log(String(number))


// let word = "Paralelepípedo"
// console.log(word.length)

// let number = 12344214213

// console.log(String(number).length)

//let number = 152135453.431546461

//console.log(number.toFixed(5).replace(".", ","))
// toFixed show a dot in the number / decimal house
// replace in changing every . in the number or phrase to ,

//let word = "Programar é muito bacana!"

//console.log(word.toUpperCase())
//toUpperCase() is forcing a method in the phrase above

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")

console.log(myArray)