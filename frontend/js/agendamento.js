function validarLogin(event){
    event.preventDefault(); // evita o comportamento padrão, enviar o formulário

    let txtUser = document.getItem("inputNome").value;
    let txtSenha = document.getItem("inputEmail").value;

    console.log(txtUser + " : " + txtSenha);
}