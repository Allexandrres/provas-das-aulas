const adicionarNota = () => {
    const notaInput = document.getElementById("notaInput");
    const notaTexto = notaInput.value;

    if (notaTexto.trim() !== "") {
        const listaNotas = document.getElementById("listaNotas");
        const novaNota = document.createElement("li");
        novaNota.textContent = notaTexto;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "delete-btn";
        botaoExcluir.addEventListener("click", () => {
            listaNotas.removeChild(novaNota);
        });

        novaNota.appendChild(botaoExcluir);
        listaNotas.appendChild(novaNota);

        notaInput.value = "";
    } else {
        alert("Por favor, digite uma nota válida.");
    }
};