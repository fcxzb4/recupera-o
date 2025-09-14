// Faça uma função que receba um nome como parâmetro e exiba "Olá, [nome]!". Chame a função passando seu nome.

// function noma(pen ){
// console.log("olá " + pen + "!" )


// }

// let pen = input("digite o seu nome: ")

// noma(pen)

// faça uma função que receba dois números como parâmetros e exiba a soma deles.

// function soma(n1 , n2){
//     return n1 + n2
// }

// console.log(soma(10 , 20))

// Faça uma função que receba três notas, calcule a média e retorne o resultado. Chame a função e exiba o resultado.


// function nota(n){
//    let soma = 0

//    for( let i = 0; i < n.length; i++){
//      soma += n[i]
//    }

//    let media = soma / n.length;

//    return media 
// }

// const notasAluno = [7, 8, 4];

// const notasFinal = nota(notasAluno);
 
// console.log("a media das notas sao: ", nota(notasAluno) ) 

// Faça uma função que receba um número como parâmetro e retorne "Positivo" se o número for maior que zero, "Negativo" se for menor que zero e "Zero" se for igual a zero.

// function analise(n) {
//   if (n > 0) {
//     console.log(`analise analitica indentificou que seu numero é: positivo`);
//   } else if (n < 0) {
//     console.log(`analise analitica indentificou que seu numero é: negativo`);
//   } else {
//     console.log(`analise analitica indentificou que seu numero é: zero`);
//   }
// }

// let n = input("manda um numero: ")

// analise(n)

// Faça uma função que receba a idade do usuário como parâmetro.
// Dentro da função, use condicionais (if/else) para retornar uma mensagem: "Voto obrigatório" (18-65), "Voto opcional" (16-17 ou >65) ou "Não pode votar" (<16). 
// Chame a função e exiba o resultado.

const input = require("prompt-sync")();

// function verificar (bday){
//   if( bday == 16 || bday == 17 || bday > 65){
//     console.log("Voto opcional")
//   }else if(bday >= 18 && bday <= 65){
//     console.log("Voto obrigatório")
//   }else{
//      console.log("nao estas liberado a democracia agora chore")
//   }
// }

// let bday = input("mande a sua idade: ")

// verificar(bday)