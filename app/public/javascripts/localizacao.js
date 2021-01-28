
window.onload = function(){
	loadLocalizacoes();
	
}

async function loadLocalizacoes(){

	try {

		let localizacoes = await $.ajax({
			url: "/api/localizacoes",
			method: "get",
			dataType: "json"
		});
	
		let aux = "";
		for (let localizacao of localizacoes) {
			aux += "<option value='"+ localizacao.localizacao_id  +"'>" + localizacao.nome+ "</option>";
		}
		document.getElementById("localizacao").innerHTML = aux;
	
	} catch(err) {
		console.log(err);
	}
	}
