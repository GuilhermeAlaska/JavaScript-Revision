/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

let family = {
    incomes: [2500, 3200, 250, 360.45],
    expenses: [380, 128.45, 176.87, 1450, 270, 800 , 3000, 109]
}


function sum (array){
    let total = 0
    for (let value of array){
        total += value
    } return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses  = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses
        if(total >= 0){
        console.log('Seu saldo é positivo em: ' + total.toFixed(2) + ' reais.')
        } 
        else {
        console.log('Seu saldo é negativo em: ' + total.toFixed(2) + ' reais.')
        }
    return total
}

calculateBalance()
