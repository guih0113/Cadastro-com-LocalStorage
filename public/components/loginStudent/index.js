const defaultStudent = {
    id: Date.now(),
    nome: "Guilherme Henrique",
    email: "guilherme.henrique@example.com",
    senha: "123456"
};

let students = JSON.parse(localStorage.getItem("student")) || [];

const exists = students.some(s => s.email === defaultStudent.email);

if (!exists) {
    students.push(defaultStudent);
    localStorage.setItem("student", JSON.stringify(students));
}

// Função de login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value;

        const students = JSON.parse(localStorage.getItem("student")) || [];

        const student = students.find(s => s.email === emailInput && s.senha === passwordInput);

        if (student) {
            alert("Login realizado com sucesso!");
            // Você pode salvar dados da sessão aqui, ex:
            localStorage.setItem("loggedStudent", JSON.stringify(student));
            window.location.href = "../homeStudent/index.html";
        } else {
            alert("Email ou senha inválidos!");
        }
    });
});