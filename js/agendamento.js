

function obterAgencias(){
    fetch("http://localhost:8080/agencia/all")
    .then(res => res.json())
    .then(result => preencheAgencias(result));
}

function preencheAgencias(resposta){
    console.log(resposta);
    let agencias = '';

    for (let index = 0; index < resposta.length; index++) {
        agencias = agencias + `<option value = ${resposta[index].id}> ${resposta[index].nome_agencia} </option>`;
    }

    document.getElementById("sel_agencias").innerHTML = agencias;
}


function validaData(){
    var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("data").setAttribute("min", today);
}

function agenda(){
    //event.preventDefault();//evitar comprogament
    let txtNome = document.getElementById("inputNome").value;
    let txtEmail = document.getElementById("inputEmail").value;
    let txtCelular = document.getElementById("inputCelular").value;
    let txtData = document.getElementById("data").value;
    let agencia = document.getElementById("sel_agencias");
    let txtAgencia = agencia[agencia.selectedIndex].value;
    //let txtAgencia = document.getElementById("sel_agencias").value;
    let txtInicio = document.getElementById("inputInicio").value;
    let txtFim = document.getElementById("inputFim").value;

    let loginMsg = {
        nomeCli: txtNome,
        emailCli:txtEmail,
        celularCli:txtCelular,
        dataAgendamento:txtData,
        horaAgendamento:txtInicio,
        observacao:txtNome,
        agencia: {id:txtAgencia}
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(loginMsg), //convertendo objeto java script em texto
        headers: {
            'Content-type': 'application/json'
        }
    }

    
    fetch("http://localhost:8080/agendamento/new", msg)
    //fetch("https://itau-backend.herokuapp.com/agendamento/new", msg)
        .then(res => tratarRetorno(res))

    
}

function validar(event) {
    event.preventDefault();//evitar comprogament
    // pegando o valor do nome pelos names
    var inputNome = document.getElementById("inputNome");
    var inputEmail = document.getElementById("inputEmail");
    var inputCelular = document.getElementById("inputCelular");
    var data = document.getElementById("data");
    var inputInicio = document.getElementById("inputInicio");
    var inputFim = document.getElementById("inputFim");

  
    // verificar se o nome está vazio
    if (inputNome.value == "") {
      alert("Nome não informado");
      inputNome.focus();
      return;
    }

    if (inputEmail.value == "") {
        alert("Email não informado");
        inputCelular.focus();
        return;
    }
    
    if (inputCelular.value == "") {
      alert("Celular não informado");
      inputCelular.focus();
      return;
    }

    if (data.value == "") {
        alert("Incio não informada");
        data.focus();
        return;
      }

    if (inputInicio.value == "") {
      alert("Incio não informada");
      inputInicio.focus();
      return;
    }

    if (inputFim.value == "") {
      alert("Telefone não informado");
      inputFim.focus();
      return;
    }
  
    alert("Formulário enviado!");
    // envia o formulário
    agenda();
  }

function tratarRetorno(retorno) {
    if (retorno.status == 200) { //sucesso
        document.getElementById("msgRetorno").innerHTML = "Cadastro realizado com sucesso!";
        retorno.json()
            .then(res => fazerLogin(res) );

    } else {//falha
        document.getElementById("msgRetorno").innerHTML = "Cadastro não realizado!";
    }

}



