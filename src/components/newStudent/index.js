//Cadastrar novo aluno
document.addEventListener("DOMContentLoaded", function() {
    const submitNewStudent = document.getElementById("btn_create_student")
    
    if (submitNewStudent) {
        submitNewStudent.addEventListener('click', function (e) {
            const formNewStudent = document.getElementById("form_new_student")
            e.preventDefault()

            if (!formNewStudent.checkValidity()) {
                formNewStudent.reportValidity();
                alert("Preencha o formulário corretamente!")
                return;
            }
    
            const id = Date.now(); // gera um ID único com base na data
            const newStudent = {
                id,
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                senha: document.getElementById("senha").value
            };
    
            let student = JSON.parse(localStorage.getItem("student")) || [];
            student.push(newStudent);
            localStorage.setItem("student", JSON.stringify(student));

            alert("Informações cadastradas com sucesso!")
            location.reload()
        })
    }
})
