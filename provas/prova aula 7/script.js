const calcularGorjeta = () => {
    const totalConta = parseFloat(document.getElementById("totalConta").value);
    const qualidadeServico = parseFloat(document.getElementById("qualidadeServico").value);

    const calcularValorGorjeta = (total, qualidade) => total * qualidade;

    const exibirResultado = (gorjeta) => {
        const resultado = document.getElementById("resultado");
        resultado.textContent = `Valor da Gorjeta: R$ ${gorjeta.toFixed(2)}`;
    };

    const gorjeta = calcularValorGorjeta(totalConta, qualidadeServico);
    exibirResultado(gorjeta);
};