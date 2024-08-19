const converterDistancia = () => {
    const metros = parseFloat(document.getElementById("metros").value);
    const unidadeDestino = document.getElementById("unidadeDestino").value;

    let resultado;

    switch (unidadeDestino) {
        case "jarda":
            resultado = metros * 1.094;
            break;
        case "pe":
            resultado = metros * 3.281;
            break;
        case "polegada":
            resultado = metros * 39.37;
            break;
        case "milha":
            resultado = metros * 0.000621;
            break;
        default:
            resultado = "Escolha uma unidade de destino válida.";
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Resultado: ${resultado} ${unidadeDestino}`;
};