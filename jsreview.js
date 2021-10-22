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
    // even with console.log inside the scope it can't acces y value, needs to be under it to see

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
        camelCase
        snake_case
        Write in english so others developers can understand
        
 */