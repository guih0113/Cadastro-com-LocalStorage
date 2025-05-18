const defaultTeacher = {
    id: Date.now(),
    nome: "Jonatas Cerqueira",
    email: "jonatas.cerqueira@example.com",
    senha: "123456"
};

let teachers = JSON.parse(localStorage.getItem("teacher")) || [];

// Verifica se já existe um professor com o mesmo e-mail
const exists = teachers.some(t => t.email === defaultTeacher.email);

if (!exists) {
    teachers.push(defaultTeacher);
    localStorage.setItem("teacher", JSON.stringify(teachers));
}

// Função de login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value;

        const teachers = JSON.parse(localStorage.getItem("teacher")) || [];

        const teacher = teachers.find(t => t.email === emailInput && t.senha === passwordInput);

        if (teacher) {
            alert("Login realizado com sucesso!");
            localStorage.setItem("loggedTeacher", JSON.stringify(teacher));
            window.location.href = "../homeTeacher/index.html";
        } else {
            alert("Email ou senha inválidos!");
        }
    });
});