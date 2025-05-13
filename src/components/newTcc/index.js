// Classe base Pessoa
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// Herança: Aluno e Professor
class Aluno extends Pessoa {
    constructor(nome) {
        super(nome);
    }
}

class Professor extends Pessoa {
    constructor(nome) {
        super(nome);
    }
}

// Classe TCC
class TCC {
    constructor({ data_hora, orientador, convidado1, convidado2, alunos, nome, curso, instituicao, cidade, nota }) {
        this.id = Date.now();
        this.data_hora = data_hora;
        this.prof_orientador = orientador.nome;
        this.prof_convidado_01 = convidado1.nome;
        this.prof_convidado_02 = convidado2.nome;
        this.aluno_01 = alunos[0]?.nome || "";
        this.aluno_02 = alunos[1]?.nome || "";
        this.aluno_03 = alunos[2]?.nome || "";
        this.nome_tcc = nome;
        this.curso = curso;
        this.instituicao = instituicao;
        this.cidade = cidade;
        this.nota = nota;
        this.aprovado = nota >= 6 ? "Sim" : "Não";
    }
}

// Gerenciador de TCCs
class TCCManager {
    static salvar(tcc) {
        const cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];
        cadastro.push(tcc);
        localStorage.setItem("cadastro", JSON.stringify(cadastro));
    }
}

// DOM + Validação
document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById("btn_submit");

    if (!btnSubmit) return;

    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        const form = document.getElementById("form_tcc");

        if (!form.checkValidity()) {
            form.reportValidity();
            alert("Preencha o formulário corretamente!");
            return;
        }

        const novoTCC = new TCC({
            data_hora: document.getElementById("data_hora").value,
            orientador: new Professor(document.getElementById("prof_orientador").value),
            convidado1: new Professor(document.getElementById("prof_convidado_01").value),
            convidado2: new Professor(document.getElementById("prof_convidado_02").value),
            alunos: [
                new Aluno(document.getElementById("aluno_01").value),
                new Aluno(document.getElementById("aluno_02").value),
                new Aluno(document.getElementById("aluno_03").value),
            ],
            nome: document.getElementById("nome_tcc").value,
            curso: document.getElementById("curso").value,
            instituicao: document.getElementById("instituicao").value,
            cidade: document.getElementById("cidade").value,
            nota: parseFloat(document.getElementById("nota").value)
        });

        TCCManager.salvar(novoTCC);

        alert("Informações cadastradas com sucesso!");
        location.reload();
    });
});
