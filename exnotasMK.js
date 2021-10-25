/*Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

// let studentNote = 78

// console.log('Aluno você digitou: ' + studentNote)

function getNote(studentNote) {
    let maximum = (studentNote == 100)
    let noteA = (studentNote >= 90 && studentNote <= 99)
    let noteB = (studentNote <= 89 && studentNote >=80)
    let noteC = (studentNote <= 79 && studentNote >=70)
    let noteD = (studentNote <= 69 && studentNote >=60)
    let noteF = (studentNote < 60 && studentNote >= 0)
    let notaFinal;

    if(noteA) {
        notaFinal = "Parabéns sua nota é A."
    } else if(noteB){
        notaFinal = "Parabéns sua nota é B."
    } else if(noteC){
        notaFinal = "Sua nota é C."
    } else if(noteD){
        notaFinal = "Sua nota é D."
    } else if(noteF){
        notaFinal = "Sua nota é F."
    } else if(maximum){
        notaFinal = "Parabéns você tirou a nota máxima."
    } else {
        notaFinal = "Você digitou uma nota inválida."
    }
    return notaFinal
}

console.log(getNote(100))
