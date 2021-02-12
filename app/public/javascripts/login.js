async function login() {
    try {
        let login = {
            email: document.getElementById("email").value,
            contribuinte: document.getElementById("contribuinte").value,
        }
        
        let utilizador = await $.ajax({
            url: "/api/users/login",
            method: "post",
            data: JSON.stringify(login),
            dataType: "json",
            contentType: "application/json"
        });
        sessionStorage.setItem("id_user",utilizador.id_user);
        //alert(JSON.stringify(utilizador))
        alert("Bem-vindo ao BloodBus "+" "+utilizador.nome)
        window.location = "perfilAdmin.html";
    } catch (err) {
        console.log(err);
        // when there is an error the JSON will be inside the responseJSON property
        document.getElementById("err").innerHTML = err.responseJSON.msg;
    }
}
