document.addEventListener('DOMContentLoaded', function () {
    const bntSubmit = document.getElementById("btn_submit");

    //Cadastrar informações ao clicar no botão, se as mesmas forem válidas 
    if (bntSubmit) {
        bntSubmit.addEventListener('click', function (e) {
            const form = document.getElementById("form_tcc");
            e.preventDefault()

            if (!form.checkValidity()) {
                form.reportValidity();
                alert("Preencha o formulário corretamente!")
                return;
            }

            const id = Date.now(); // gera um ID único com base na data
            const novoTCC = {
                id, // adiciona o ID ao objeto
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

            alert("Informações cadastradas com sucesso!")
            location.reload()
        });
    }
})