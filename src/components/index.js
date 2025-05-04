const bntSubmit = document.getElementById("btn_submit");

document.addEventListener('DOMContentLoaded', function() {
    if(bntSubmit){
        bntSubmit.addEventListener('click', function(e) {
            const form = document.getElementById("form_tcc");

            if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity(); 
                return;
            }
            e.preventDefault();

            const id = Date.now(); // gera um ID único com base na data
            const novoTCC = {
                id, // adiciona o ID ao objeto
                codigo: document.getElementById("codigo").value,
                data_hora: document.getElementById("data_hora").value,
                prof_orientador: document.getElementById("prof_orientador").value,
                prof_convidado_01: document.getElementById("prof_convidado_01").value,
                prof_convidado_02: document.getElementById("prof_convidado_02").value,
                aluno_01: document.getElementById("aluno_01").value,
                aluno_02: document.getElementById("aluno_02").value,
                aluno_03: document.getElementById("aluno_03").value,
                nome_tcc: document.getElementById("nome_tcc").value,
                curso: document.getElementById("curso").value,
                instituicao: document.getElementById("instituicao").value,
                cidade: document.getElementById("cidade").value,
                nota: document.getElementById("nota").value,
                aprovado: document.getElementById("nota").value >= 6 ? "Sim" : "Não"
            };
        
            let cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];
            cadastro.push(novoTCC);
            localStorage.setItem("cadastro", JSON.stringify(cadastro));
        });
    }

    const tabela = document.getElementById("dados");
    const registros = JSON.parse(localStorage.getItem("cadastro")) || [];

    if (registros.length === 0) {
        const linhaVazia = document.createElement("tr");
        linhaVazia.innerHTML = `<td colspan="15" class="px-4 py-4 text-black">Nenhum registro encontrado.</td>`;
        tabela.appendChild(linhaVazia);
    } else {
        registros.forEach((tcc) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td class="px-4 py-2">${tcc.codigo}</td>
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

                location.reload();
            });
        });
    }
})
