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
