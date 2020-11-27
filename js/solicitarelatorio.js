function validaLogin(params) {
    let userTxt=localStorage.getItem("userLogged");

    if(!userTxt){
        window.location = "index.html"
    }

    let jsonUser = JSON.parse(userTxt);

    document.getElementById("user").innerHTML = `${jsonUser.nome} ( ${jsonUser.racf} )`;
    document.getElementById("imgUser").innerHTML = `<img class = "usuario" src ="${jsonUser.linkfoto}">`;
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html"
}

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

        
function filtrarAgencias(event){
    event.preventDefault();//evitar comprogament
    let cxagencia = document.getElementById("checkbox_agencia").checked;
    let cxdata = document.getElementById("checkbox_data").checked;
    let cxnome = document.getElementById("checkbox_cliente").checked;
    let agencia = document.getElementById("sel_agencias");
    let txtAgencia = agencia[agencia.selectedIndex].value;
    let txtData = document.getElementById("inputData").value;
    let txtNome = document.getElementById("inputNome").value;
    

    let objeto = {
        agencia: {id:txtAgencia},
        dataAgendamento:txtData,
        nomeCli: txtNome
        //agencia: {id:"1"}
    }

    let msg = {
        method: 'POST',
        body: JSON.stringify(objeto), //convertendo objeto java script em texto
        headers: {
            'Content-type': 'application/json'
        }
    }

    

if (cxagencia == true && cxdata == false && cxnome == false) {
    
    fetch("http://localhost:8080/agendamento/agencia",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}


if (cxdata == true && cxagencia == false && cxnome == false) {
    
    fetch("http://localhost:8080/agendamento/data",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxdata == false && cxagencia == false && cxnome == true) {
    
    fetch("http://localhost:8080/agendamento/nome",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxagencia == true && cxdata == true && cxnome == false) {
    
    fetch("http://localhost:8080/agendamento/agenciadata",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxagencia == true && cxdata == false && cxnome == true) {
    
    fetch("http://localhost:8080/agendamento/agencianome",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxagencia == false && cxdata == true && cxnome == true) {
    
    fetch("http://localhost:8080/agendamento/nomedata",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxagencia == true && cxdata == true && cxnome == true) {
    
    fetch("http://localhost:8080/agendamento/nomedataagencia",msg)
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}

if (cxagencia == false && cxdata == false && cxnome == false) {
    
    fetch("http://localhost:8080/agendamento/all")
    .then(res => res.json())
    .then(result => gerarRelatorio(result)); 
    
}


}



function gerarRelatorio(resposta) {
   // console.log(resposta);
    let agendas = '<table class = "table table-sm"> <tr> <th>agencia</th> <th>cliente</th> <th>data</th> <th>hora</th> </tr>';
    

    for (let index = 0; index < resposta.length; index++) {
        
        let amanha = new Date(resposta[index].dataAgendamento);

        amanha.setDate(amanha.getDate() + 1);

          
        let dia = amanha.getDate();
        let mes = amanha.getMonth() + 1; //jan = 0
        let ano = amanha.getFullYear();
        let minimo = dia + "-" + mes + "-" + ano;

        agendas = agendas + `<tr> <td> ${resposta[index].agencia.nome_agencia} </td> 
                                  <td> ${resposta[index].nomeCli} </td> 
                                  <td> ${minimo} </td>
                                  <td> ${resposta[index].horaAgendamento} </td> </tr>`;
    }

    agendas = agendas + '</table>';

    document.getElementById("tableResposta").innerHTML = agendas;
}
