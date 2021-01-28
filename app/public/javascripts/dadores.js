
window.onload = function(){
	loadDadores();
	
}

async function loadDadores(){
	try{
		let html = "<tr><th>Nome</th><th>Data de Nascimento</th><th>Morada</th><th>Código Postal</th><th>Zona</th><th>Sexo</th><th>Telefone</th><th>Email</th><th>Contribuinte</th></tr>";
		let dadores = await $.ajax({
			url: "api/dadores",
			method: "get",
			dataType: "json"
		});
		for(let i = 0; i < dadores.length; i++) {
			html += "<tr><th>" + dadores[i].nome + "</th> <th>" + dadores[i].data_nasc + "</th> <th>" + dadores[i].morada + "</th> <th>"+ dadores[i].cod_postal + "</th> <th>" + dadores[i].zona+ "</th> <th>" + dadores[i].sexo+ "</th> <th>" + dadores[i].telefone+ "</th> <th>" + dadores[i].email+ "</th> <th>" + dadores[i].contribuinte + "</th> </tr>";
		}
		document.getElementById("dadores").innerHTML = html;
	}   catch(err){
		console.log(err);
		document.getElementById("dadores").innerHTML = "<tr><th>Ocoreu um problema, tente mais tarde!</th></tr>";
	}
}





async function novoDador() {

	try{
	
		let dadores = await $.ajax({
			url: "api/dadores",
			method: "get",
			dataType: "json"
		});
		for(let i = 0; i < dadores.length; i++) {
			html +=  ;
		}
		document.getElementById("dadores").innerHTML = html;
	}   catch(err){
		console.log(err);
		document.getElementById("dadores").innerHTML = ;
	}
	
    try {
        let dador = {
            nome: document.getElementById("nome").value,
            data_nasc: document.getElementById("data").value,
            morada: document.getElementById("morada").value,
            cod_postal: document.getElementById("codpostal").value,
            sexo: document.getElementById("sexo").value,
            telefone: document.getElementById("telefone").value,
            email: document.getElementById("email").value,
            contribuinte: document.getElementById("contribuinte").value,
            id_user: parseInt(document.getElementById("id_user").value)
        }
        alert(JSON.stringify(dador));
        let result = await $.ajax({
            url: "/api/dadores",
            method: "post",
            dataType: "json",
            data:JSON.stringify(dador),
            contentType: "application/json"
        });
        alert(JSON.stringify(result));
    } catch(err) {
        console.log(err);
        // mensagem para o utilizador
    }
  }

