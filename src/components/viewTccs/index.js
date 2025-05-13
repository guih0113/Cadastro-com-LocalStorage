const tabela = document.getElementById("dados");
const registros = JSON.parse(localStorage.getItem("cadastro")) || [];

//Exibir informações cadastradas, se existirem
if (registros.length === 0) {
    const linhaVazia = document.createElement("tr");
    linhaVazia.innerHTML = `<td colspan="15" class="px-4 py-4 text-black">Nenhum registro encontrado.</td>`;
    tabela.appendChild(linhaVazia);
} else {
    registros.forEach((tcc) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
                <td class="px-4 py-2">${tcc.id}</td>
                <td class="px-4 py-2">${tcc.data_hora}</td>
                <td class="px-4 py-2">${tcc.prof_orientador}</td>
                <td class="px-4 py-2">${tcc.prof_convidado_01}</td>
                <td class="px-4 py-2">${tcc.prof_convidado_02}</td>
                <td class="px-4 py-2">${tcc.aluno_01}</td>
                <td class="px-4 py-2">${tcc.aluno_02}</td>
                <td class="px-4 py-2">${tcc.aluno_03}</td>
                <td class="px-4 py-2">${tcc.nome_tcc}</td>
                <td class="px-4 py-2">${tcc.curso}</td>
                <td class="px-4 py-2">${tcc.instituicao}</td>
                <td class="px-4 py-2">${tcc.cidade}</td>
                <td class="px-4 py-2">${tcc.nota}</td>
                <td class="px-4 py-2">${tcc.aprovado}</td>
                <td class="px-4 py-2">
                    <img src="../../assets/lixeira.png" alt="Excluir" class="w-6 h-6 cursor-pointer excluir-btn" data-id="${tcc.id}" />
                </td>
            `;
        tabela.appendChild(linha);
    });

    //Excluir cadastro
    document.querySelectorAll(".excluir-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            let cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];
            cadastro = cadastro.filter(tcc => tcc.id != id);

            if (cadastro.length === 0) {
                localStorage.removeItem("cadastro");
            } else {
                localStorage.setItem("cadastro", JSON.stringify(cadastro));
            }

            alert("Cadastro excluído com sucesso!")
            location.reload();
        });
    });
}

