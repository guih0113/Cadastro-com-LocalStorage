document.addEventListener("DOMContentLoaded", function () {
    const teacherData = localStorage.getItem("loggedTeacher");
    const teacherNameSpan = document.getElementById("teacher-name");

    if (teacherData && teacherNameSpan) {
        const teacher = JSON.parse(teacherData);
        teacherNameSpan.textContent = `${teacher.nome}!`;
    } else {
        window.location.href = "../loginTeacher/index.html";
    }

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedTeacher");
        window.location.href = "../loginTeacher/index.html";
    });
});
