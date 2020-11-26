

function obterAgencias(){
    fetch("https://itau-backend.herokuapp.com/agencia/all")
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

function agenda(event){
    event.preventDefault();//evitar comprogament
    let txtNome = document.getElementById("inputNome").value;
    let txtEmail = document.getElementById("inputEmail").value;
    let txtCelular = document.getElementById("inputCelular").value;
    let txtData = document.getElementById("data").value;
    let txtAgencia = document.getElementById("sel_agencias").value;
    let txtInicio = document.getElementById("inputInicio").value;
    let txtFim = document.getElementById("inputFim").value;

    let loginMsg = {
        nome_cli: txtNome,
        email_cli:txtEmail,
        celular_cli:txtCelular,
        data_agendamento:txtData,
        hora_agendamento:txtInicio,
        observacao:txtNome
        
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(loginMsg), //convertendo objeto java script em texto
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("https://itau-backend.herokuapp.com/agendamento/new", msg)
        .then(res => tratarRetorno(res));


}

