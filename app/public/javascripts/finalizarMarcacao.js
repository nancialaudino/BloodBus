window.onload = function(){
    loadHorarios();
    loadLocalizacoes();
    loadEstados();
}

async function loadHorarios() {

try {

    let horas = await $.ajax({
        url: "/api/horarios",
        method: "get",
        dataType: "json"
    });

    let aux = "";
    for (let hora of horas) {
        aux += "<option value='"+ hora.id_hora  +"'>" + hora.Horario + "</option>";
    }
    document.getElementById("hora").innerHTML = aux;

} catch(err) {
    console.log(err);
}
}


async function loadLocalizacoes (){

    try {

		let localizacoes = await $.ajax({
			url: "/api/localizacoes",
			method: "get",
			dataType: "json"
		});
	
		let aux = "";
		for (let localizacao of localizacoes) {
			aux += "<option value='"+ localizacao.id_loc  +"'>" + localizacao.endereco+ "</option>";
		}
		document.getElementById("localizacao").innerHTML = aux;
	
	} catch(err) {
		console.log(err);
	}
    }



    async function loadEstados() {

        try {
        
            let estados = await $.ajax({
                url: "/api/estados",
                method: "get",
                dataType: "json"
            });
        
            let aux = "";
            for (let estado of estados) {
                aux += "<option value='"+ estado.id_estado  +"'>" + estado.estado + "</option>";
            }
            document.getElementById("estado").innerHTML = aux;
        
        } catch(err) {
            console.log(err);
        }
        }


    async function novaMarcacao() {

            let dador = JSON.parse(sessionStorage.getItem("dador"));
            
            let marcacao = {
                hora_id: document.getElementById("hora").value,
                estado_id: 1,
                localizao_id: document.getElementById("localizacao").value,
                nome: dador.nome,
                data_nasc: dador.data_nasc,
                morada: dador.morada,
                cod_postal: dador.cod_postal,
                sexo: dador.sexo,
                telefone: dador.telefone,
                email: dador.email,
                contribuinte: dador.contribuinte

        
            }
        
            try {
        
                let result = await $.ajax({
                    url: "/api/marcacoesRecolha",
                    method: "post",
                    data: JSON.stringify(marcacao),
                    contentType: "application/json",
                    dataType: "json"
                });
        
                window.location = "perfilAdmin.html";
                
            } catch(err) {
                console.log(err);
            }
        
        
        
    }
    