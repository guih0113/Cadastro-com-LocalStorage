const tabela = document.getElementById("dados");
const registros = JSON.parse(localStorage.getItem("student")) || [];

//Exibir informações cadastradas, se existirem
if (registros.length === 0) {
    const linhaVazia = document.createElement("tr");
    linhaVazia.innerHTML = `<td colspan="15" class="px-4 py-4 text-black">Nenhum registro encontrado.</td>`;
    tabela.appendChild(linhaVazia);
} else {
    registros.forEach((student) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
                <td class="px-4 py-2">${student.id}</td>
                <td class="px-4 py-2">${student.nome}</td>
                <td class="px-4 py-2">${student.email}</td>
                <td class="px-4 py-2">${student.senha}</td>
                <td class="px-4 py-2">
                    <img src="../../assets/lixeira.png" alt="Excluir" class="w-6 h-6 cursor-pointer excluir-btn" data-id="${student.id}" />
                </td>
            `;
        tabela.appendChild(linha);
    });

    //Excluir cadastro
    document.querySelectorAll(".excluir-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            let student = JSON.parse(localStorage.getItem("student")) || [];
            student = student.filter(student => student.id != id);

            if (student.length === 0) {
                localStorage.removeItem("student");
            } else {
                localStorage.setItem("student", JSON.stringify(student));
            }

            alert("Cadastro excluído com sucesso!")
            location.reload();
        });
    });
}

