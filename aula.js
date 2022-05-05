//Lista de Algoritmos 02

// exercicio 1

function inverter(str) {
  let solucao = "";
  let tamanho = str.length - 1;
  for (inicio = tamanho; inicio >= 0; inicio--) {
    solucao = solucao + str[inicio];
  }
  console.log(solucao);
  return solucao;
}
inverter("pessoas");

// exercicio 2

const Vogais = ["a", "e", "i", "o", "u"];
function contarVogais(str) {
  let contar = 0;
  console.log(str);
  for (let palavra of str.toLowerCase()) {
    if (Vogais.includes(palavra)) {
      contar++;
    }
  }
  return contar;
}
let resultado = contarVogais(`estudar`);
console.log(`tem  ${resultado}  vogais`);
