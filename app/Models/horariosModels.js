var pool = require("./connection");

//horarios
module.exports.getHoras = async function() {
    try {
    	console.log("test");
        let sql = "select id_hora, EquipaRecolha.id_equipaRecolha as 'Equipa', DATE_FORMAT(Hora.hora,'%d-%m-%y %H:%i') as 'Horario'"
        +"from Hora join EquipaRecolha on Hora.equipa_id=id_equipaRecolha;"
        let horas = await pool.query(sql);
        console.log(horas)
        return {status:200, data: horas};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}


