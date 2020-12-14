window.onload = function(){
	loadMarcacoes();
}

async function loadMarcacoes() {
	try{
		let marcacoes = await $.ajax({
			url: "/api/marcacoesRecolha",
			method: "get",
			dataType: "json"
		});
		let html = "";
		for (let i=0; i < marcacoes.length; i++){
			html += "<li><span>" + marcacoes[i].hora + "</span> <span>" + marcacoes[i].dador + "</span> <span>" + marcacoes[i].zona + "</span> <span>"+ marcacoes[i].equipa + "</span></li>";
		}
		document.getElementById("marcacoes").innerHTML = html;
	}	catch(err){
		document.getElementById("marcacoes").innerHTML = "<li>Occureu um problema, se faz favor tentar mais tarde</li>";
		console.log(err);
	}


}
