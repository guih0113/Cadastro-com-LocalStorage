document.addEventListener("DOMContentLoaded", function () {
    const studentData = localStorage.getItem("loggedStudent");

    if (!studentData) {
        window.location.href = "../loginStudent/index.html";
        return;
    }

    const student = JSON.parse(studentData);

    document.getElementById("student-name").textContent = student.nome;
    document.getElementById("info-nome").textContent = student.nome;
    document.getElementById("info-email").textContent = student.email;
    document.getElementById("info-senha").textContent = student.senha;

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedStudent");
        window.location.href = "../loginStudent/index.html";
    });
});