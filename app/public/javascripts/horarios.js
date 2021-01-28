
window.onload = async function() {
    console.log("Erro");
try {

    let horas = await $.ajax({
        url: "/api/horarios",
        method: "get",
        dataType: "json"
    });

    let aux = "";
    for (let hora of horas) {
        aux += "<option value='"+ hora.Equipa  +"'>" + hora.Hora + "</option>";
    }
    document.getElementById("hora").innerHTML = aux;

} catch(err) {
    console.log(err);
}
}