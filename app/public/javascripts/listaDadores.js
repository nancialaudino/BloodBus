window.onload = function(){
	
}

async function loadDadores(){
	try{
		let html = "<tr><th>Nome</th><th>Zona</th><th>"
		let dadores = await $.ajax({
			url: "api/dadores",
			method: "get",
			dataType: "json"
		});
		for(let i = 0; i < dadores.length; i++) {
			html += "";
		}

	}catch(err){
		console.log(err);
		document.getElementById("dadores").innerHTML = "<tr><th>Occoreu um problema, se faz favor tentar mais tarde</th></tr>";
	}
}