window.onload = function(){
	loadMarcacoes();
}

async function loadMarcacoes() {
	try{
		let html = "<tr><th>data/hora</th><th>Nome do dador</th><th>Zona</th><th>Equipa de recolha</th></tr>";
		let marcacoes = await $.ajax({
			url: "/api/marcacoesRecolha",
			method: "get",
			dataType: "json"
		});
		for (let i=0; i < marcacoes.length; i++){
			html += "<tr><th>" + marcacoes[i].hora + "</th> <th>" + marcacoes[i].dador + "</th> <th>" + marcacoes[i].zona + "</th> <th>"+ marcacoes[i].equipa + "</th></tr>";
		}
		document.getElementById("marcacoes").innerHTML = html;
	}	catch(err){
		console.log(err);
		document.getElementById("marcacoes").innerHTML = "<tr><th<Ocorreu um problema, tente mais tarde!</th></tr>";
		
	}


}
 