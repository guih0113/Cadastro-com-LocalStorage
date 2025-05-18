//Cadastrar novo aluno
document.addEventListener("DOMContentLoaded", function() {
    const submitNewTeacher = document.getElementById("btn_create_teacher")
    
    if (submitNewTeacher) {
        submitNewTeacher.addEventListener('click', function (e) {
            const formNewTeacher = document.getElementById("form_new_teacher")
            e.preventDefault()

            if (!formNewTeacher.checkValidity()) {
                formNewTeacher.reportValidity();
                alert("Preencha o formulário corretamente!")
                return;
            }
    
            const id = Date.now(); // gera um ID único com base na data
            const newTeacher = {
                id,
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                senha: document.getElementById("senha").value
            };
    
            let teacher = JSON.parse(localStorage.getItem("teacher")) || [];
            teacher.push(newTeacher);
            localStorage.setItem("teacher", JSON.stringify(teacher));

            alert("Informações cadastradas com sucesso!")
            location.reload()
        })
    }
})
