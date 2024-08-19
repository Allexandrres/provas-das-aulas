let totalEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));
let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;

let contador = 1;
while (contador <= totalEstudantes) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"));
    
    somaNotas += nota;
    
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    
    if (nota < menorNota) {
        menorNota = nota;
    }
    
    contador++;
}

let mediaTurma = somaNotas / totalEstudantes;

console.log("Média da turma: " + mediaTurma.toFixed(2));
console.log("Maior nota: " + maiorNota);
console.log("Menor nota: " + menorNota);