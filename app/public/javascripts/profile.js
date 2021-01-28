window.onload = async function() {
    let id_user = sessionStorage.getItem("id_user");
    if (!id_user) {
        alert("Your are not logged!");
        window.location = "login.html";        
    }
    let utilizador = await $.ajax({
        url: "/api/users"+id_user,
        method: "get",
        dataType: "json"
    });
    console.log(utilizador);
    


    document.getElementById("email").innerHTML = utilizador.email;
    document.getElementById("contribuinte").innerHTML = "Profile of "+utilizador.contribuinte;
    let fullAddress = utilizador.morada+", "+customer.zona;

    
    //document.getElementById("artista").innerHTML = album.Name;

}
function logout() {
    sessionStorage.removeItem("id_user");
    window.location="index.html";
}