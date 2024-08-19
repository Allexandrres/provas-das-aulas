function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function gerarSequenciaFibonacci(numero) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, numero + 1);
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero >= 0) {
    let fatorial = calcularFatorial(numero);
    console.log("O fatorial de " + numero + " é: " + fatorial);

    let sequenciaFibonacci = gerarSequenciaFibonacci(numero);
    console.log("Sequência de Fibonacci até " + numero + ": " + sequenciaFibonacci.join(", "));
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}