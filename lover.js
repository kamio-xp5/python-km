let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10): "));
let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10): "));
let nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10): "));
let nota4 = parseFloat(prompt("Digite a quarta nota (0 a 10): "));

let media=(nota1 + nota2 + nota3 + nota4) / 4;

alert(`A média das notas é: ${media.toFixed(2)}`);

if (media >= 7) {
    alert("Parabéns! Você foi aprovado!");
} else if (media >= 5) {
} else {
    alert("Infelizmente, você foi reprovado.");
}

// Solicita os números ao usuário
let inicio = parseInt(prompt("Digite o número de início do intervalo:"));
let fim = parseInt(prompt("Digite o número final do intervalo:"));

// Variável para armazenar a soma dos números pares
let soma = 0;

// Loop para percorrer o intervalo e somar os números pares
for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) { // Verifica se o número é par
    soma += i; // Soma os números pares
  }
}

// Exibe o resultado
console.log("A soma dos números pares no intervalo é: " + soma);
