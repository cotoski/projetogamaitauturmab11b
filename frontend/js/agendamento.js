

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

