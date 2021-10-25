/*Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let studentNote = 100
console.log('Aluno você digitou: ' + studentNote)
let maximum = (studentNote == 100)
let noteA = (studentNote >= 90 && studentNote <= 99)
let noteB = (studentNote <= 89 && studentNote >=80)
let noteC = (studentNote <= 79 && studentNote >=70)
let noteD = (studentNote <= 69 && studentNote >=60)
let noteF = (studentNote < 60 && studentNote >= 0)

if(noteA){
    console.log('Parabéns sua nota é A.')
} else if(noteB){
    console.log('Parabéns sua nota é B.')
} else if(noteC){
    console.log('Sua nota é C.')
} else if(noteD){
    console.log('Sua nota é D.')
} else if(noteF){
    console.log('Sua nota é F.')
} else if(maximum){
    console.log('Parabéns você tirou nota máxima!')
} else {
    console.log('Você digitou uma nota inválida.')
}