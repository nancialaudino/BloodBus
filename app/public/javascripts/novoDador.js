window.onload = function(){
	
}



async function novoDador() {
    
        let dador = {
            nome: document.getElementById("nome").value,
            data_nasc: document.getElementById("data").value,
            morada: document.getElementById("morada").value,
            cod_postal: document.getElementById("codpostal").value,
            sexo: document.getElementById("sexo").value,
            telefone: document.getElementById("telefone").value,
            email: document.getElementById("email").value,
            contribuinte: document.getElementById("contribuinte").value
            
        }
    
        sessionStorage.setItem("dador", JSON.stringify(dador));
    
        window.location="finalizarMarcacao.html";
       
      }
   
  