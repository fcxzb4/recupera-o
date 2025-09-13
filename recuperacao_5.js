// Faça um código que use um laço for para exibir os números de 1 a 10

// for(let i = 0 ; i < 10 ; i++){
//     console.log(`${i + 1}`)
// }

// Faça um código que use um laço while para exibir uma mensagem 5 vezes.



// let tip = 0

// while( tip != 5){
//   tip++
//   console.log("chamando todos os autobots o palmeiras nao tem mundial")
// }

// Faça um código que solicite ao usuário um número. Use um laço for para exibir a tabuada desse número, de 1 a 10.



// let user = parseInt(input("mande um numero: "))

//  for(let i = 0; i < 10; i++){
//     console.log(`o ${user} x ${user *(i + 1) }`)
// }

// Faça um código que use do/while para pedir um número ao usuário. Continue pedindo até que o número digitado seja 0.

// 

// let user = parseInt(input("mande um numero: "))

// do{
//     user = parseInt(input("mande um numero: "))
// }while(user !=   0)
// console.log(`parabens voce consegui digitar ${user}`)

// Faça um código que solicite um número inteiro positivo ao usuário. Use um laço de repetição (for ou while)
//  para calcular o fatorial desse número (ex: 5! = 5 * 4 * 3 * 2 * 1) e exiba o resultado.

const input = require("prompt-sync")();

let n = parseInt(input("mande um numero: "))
let resultado = 1

if(n < 0){
    console.log("Não existe fatorial de número negativo.")
}
if(n === 0 || n === 1){
    console.log(" O fatorial de 0 é 1.")
}
for(let i = 1; i <= n; i++){
     resultado *= i;
}
console.log(`O fatorial de ${n} é ${resultado}.`)