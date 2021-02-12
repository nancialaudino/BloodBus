
let dador_id = sessionStorage.getItem("dador_id"); //Vai buscar o dador do id que está guardado

window.onload = async function() {

    //Vai buscar as informacoes desse dador e as respetivas marcações
    try {

        let dador = await $.ajax({
            url: "/api/dadores/"+dador_id+"/marcacoes",
            method: "get",
            dataType: "json"
        });

        //Exemplo para colocar o nome do dador
        document.getElementById("nome").innerHTML = dador.nome;

        let html = "<tr><th>Estado</th><th>Hora</th></tr>";
		
		for(let marcacao of dador.marcacoes) {
			html += "<tr><th>" + marcacao.estadoRecolha + "</th> <th>" + marcacao.horaMarcacao + "</th></tr>";
		}

		document.getElementById("marcacoes").innerHTML = html;


    } catch(err) {
        console.log(err);
        if (err.status == 404) {
            alert(err.responseJSON.msg);
        }
    }

}