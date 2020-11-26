function validarLogin(event) {
    event.preventDefault();//evitar comprogament
    let txtUser = document.getElementById("inputUser").value;
    let txtSenha = document.getElementById("inputPassword").value;

    let loginMsg = {
        email: txtUser,
        racf: txtUser,
        senha: txtSenha
        
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(loginMsg), //convertendo objeto java script em texto
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("https://itau-backend.herokuapp.com/usuario/login", msg)
        .then(res => tratarRetorno(res));
}


function tratarRetorno(retorno) {
    if (retorno.status == 200) { //sucesso
        document.getElementById("msgRetorno").innerHTML = "Login com sucesso!";
        retorno.json()
            .then(res => fazerLogin(res) );

    } else {//falha
        document.getElementById("msgRetorno").innerHTML = "Login com falha!";
    }

}

function fazerLogin(user){
    document.getElementById("divUser").innerHTML = "<b>" + user.nome + "</b> (" + user.email + ")";
    localStorage.setItem("userLogged", JSON.stringify(user));
    window.location = "interna.html";
}