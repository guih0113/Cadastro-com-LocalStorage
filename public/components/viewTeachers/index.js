const tabela = document.getElementById("dados");
const registros = JSON.parse(localStorage.getItem("teacher")) || [];

//Exibir informações cadastradas, se existirem
if (registros.length === 0) {
    const linhaVazia = document.createElement("tr");
    linhaVazia.innerHTML = `<td colspan="15" class="px-4 py-4 text-black">Nenhum registro encontrado.</td>`;
    tabela.appendChild(linhaVazia);
} else {
    registros.forEach((teacher) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
                <td class="px-4 py-2">${teacher.id}</td>
                <td class="px-4 py-2">${teacher.nome}</td>
                <td class="px-4 py-2">${teacher.email}</td>
                <td class="px-4 py-2">${teacher.senha}</td>
                <td class="px-4 py-2">
                    <img src="../../assets/lixeira.png" alt="Excluir" class="w-6 h-6 cursor-pointer excluir-btn" data-id="${teacher.id}" />
                </td>
            `;
        tabela.appendChild(linha);
    });

    //Excluir cadastro
    document.querySelectorAll(".excluir-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            let teacher = JSON.parse(localStorage.getItem("teacher")) || [];
            teacher = teacher.filter(teacher => teacher.id != id);

            if (teacher.length === 0) {
                localStorage.removeItem("teacher");
            } else {
                localStorage.setItem("teacher", JSON.stringify(teacher));
            }

            alert("Cadastro excluído com sucesso!")
            location.reload();
        });
    });
}

