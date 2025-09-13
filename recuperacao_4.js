// Faça um código que peça um número de 1 a 3. Use switch para exibir "Um" se o número for 1, "Dois" se for 2 e "Três" se for 3.

// let num = input("mande um numero de 1 a 3:  ")

// switch (num) {
//   case "1":
//     console.log("um");
//     break;
//   case "2":
//     console.log("dois");
//     break;
//   case "3":
//     console.log("tres");
//     break;
//   default:
//     console.log(" receba a leitura");
//     break;
// }

// faça um código que peça o nome de um dia da semana (ex: "segunda"). Use switch para exibir "Dia útil" ou "Fim de semana".

// let num = input("escolha um dia da semana: ")

// switch (num) {
//   case "domingo":
//     console.log("vagabundo");
//     break;
//   case "segunda-feira":
//     console.log("trabalhador condenado");
//     break;
//   case "terca-feira":
//     console.log("trabalhador condenado");
//     break;
//      case "quarta-feira":
//     console.log("trabalhador condenado");
//     break;
//      case "quinta-feira":
//     console.log("trabalhador condenado");
//     break;
//      case "sexta-feira":
//     console.log("trabalhador condenado");
//     break;
//      case "sabado":
//     console.log("vagabundo");
//     break;

//   default:
//     console.log(" eu quero dormir");
//     break;
// }

// Faça um código que peça um número de 1 a 12. Use switch para exibir o nome do mês correspondente ("Janeiro", "Fevereiro", etc.).

// let num = input("escolha um mes do ano: ")

// switch (num) {
//   case "1":
//     console.log("janeiro");
//     break;
//   case "2":
//     console.log("fevereiro");
//     break;
//   case "3":
//     console.log("marco");
//     break;
//      case "4":
//     console.log("abril");
//     break;
//      case "5":
//     console.log("maio");
//     break;
//      case "6":
//     console.log("junho");
//     break;
//      case "7":
//     console.log("julho");
//     break;
//       case "8":
//     console.log("agosto");
//     break;
//       case "9":
//     console.log("setembro");
//     break;
//       case "10":
//     console.log("outubro");
//     break;
//   case "11":
//     console.log("novenbro");
//     break;
//   case "12":
//     console.log("dezembro");
//     break;
//   default:
//     console.log(" foi quando gyro finanmente percebeu ningeum se importa comigo nem mesmo o meu pai");
//     break;
// }

// Faça um código que solicite ao usuário uma operação matemática (+, -, *, /) e dois números. Use switch para realizar a operação e exibir o resultado.

const input = require("prompt-sync")();

let choice = input("escolha uma operação matematica: ");

switch (choice) {
  case "+":
    let num1 = parseInt(input("escolha um numero:"));
    let num2 = parseInt(input("escolha um numero:"));
    console.log(` resultado ${num1 + num2} `);
    break;
  case "-":
    let num3 = parseInt(input("escolha um numero:"));
    let num4 = parseInt(input("escolha um numero:"));
    console.log(` resultado ${num3 - num4} `);
    break;
  case "*":
    let num5 = parseInt(input("escolha um numero:"));
    let num6 = parseInt(input("escolha um numero:"));
    console.log(` resultado ${num5 * num6} `);
    break;
  case "/":
    let num7 = parseInt(input("escolha um numero:"));
    let num8 = parseInt(input("escolha um numero:"));
    console.log(` resultado ${num7 / num8} `);
    break;
  default:
    console.log("receba ave maria");
    break;
}


// faça um código que peça a sigla de um estado brasileiro (ex: "SP", "RJ", "MG"). Use switch para exibir o nome completo do estado. 
// Se a sigla não for reconhecida, exiba "Estado não encontrado.".


// let choice = input("utilize uma sigla dos estados brasileiros em cacha alta: ");

// switch (choice) {
//   case "SP":
//     console.log(" Sao Paulo");
//     break;
//   case "RJ":
//     console.log("Rio de Janeiro");
//     break;
//   case "MG":
//     console.log("Minas Gerais");
//     break;
//   default:
//     console.log("Estado não encontrado.");
//     break;
// }
