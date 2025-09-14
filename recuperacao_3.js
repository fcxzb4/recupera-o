// Faça um código que solicite a idade do usuário. Se a idade for maior ou igual a 18, exiba a mensagem: "Você é maior de idade.".

// let age = input(" qual a sua idade:  ")
// const max = 18
// if(max <= age){
//   console.log("sua idade e o suficiente ")
// }else{
//     console.log("voce nao possui a idade nescesria")
// }

// Faça um código que peça um número. Se o número for par, exiba "É par.". Caso contrário, exiba "É ímpar.".

// let par = input("coloque um numero para saber se e par ou nao:  ")

// if(par % 2 == 0){
//     console.log(`parabens o numero ${par} e e par  `)
// }else{
//     console.log(`parabens seu infeliz o numero ${par} impar  `)
// }

// Faça um código que peça um número. Se o número for positivo, exiba "Positivo.". Se for negativo, exiba "Negativo.". Se for zero, exiba "Zero.".

// let num = input(" madne um numero para saber a sua procedencia:  ");

// if (num > 0) {
//   console.log(`o ${num} e possitivo`);
// } else{
//   console.log(`o ${num} e negativo`);
// }


// Faça um código que solicite três notas de um aluno. Calcule a média. Se a média for maior ou igual a 7, exiba "Aprovado.". 
// Caso contrário, exiba "Reprovado.".


// let grade1 =  input(" mande a nota de portuges: ");
// let grade2 = input("mande a nota de matematica; ");
// let grade3 =  input("mande a nota e sociologia:");
  
// let media = grade1 + grade2 + grade3/ 3

// if(media >= 6 ){
//     console.log("aprovado ze")
// }else{
//  console.log("animal reprovado")
// }

// Faça um código que solicite o ano de nascimento do usuário. Calcule a idade. Se a idade for entre 16 e 17 ou maior que 65, exiba "Voto opcional.".
//  Se a idade for maior ou igual a 18 e menor ou igual a 65, exiba "Voto obrigatório.". Caso contrário, exiba "Não pode votar.".

const input = require("prompt-sync")();



let bday = input("qual a sua data de nascimento:  ")
let now = 2025 - bday 

if(now === 16 && 17 && 65){
  console.log("Voto opcional")
}else if(now <= 18 || now <= 65){
    console.log("Voto obrigatório.")
}else{
    console.log("nao estas liberado a democracia agora chore")
}