window.onload = function() {
	var marcacoes = await $.ajax({
		url: "/api/marcacoesRecolha/",
		method: "getAll",
		dataType: "json"
	});
	let html = "";
	for (let i=0; i < marcacoes.length; i++){
		html += "<li><span>" + marcacoes[i].data + "</span> <span>" + marcacoes[i].dador + "</span> <span>" + marcacoes[i].zona + "</span> <span>"+ marcacoes[i].equipa + "</span></li>";
	}
	document.getElementById("listaMarcacoes").innerHtml = html;
}
