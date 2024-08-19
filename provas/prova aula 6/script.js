function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        alert("Por favor, preencha o peso e a altura.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
}