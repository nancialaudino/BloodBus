var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = "SELECT EstadoRecolha.estado as 'estado', Utilizador.nome as 'dador', Hora.hora as 'hora', EquipaRecolha.id_equipaRecolha as 'equipa' FROM MarcacaoRecolha JOIN EstadoRecolha ON MarcacaoRecolha.estado_id=id_estado JOIN Utilizador ON MarcacaoRecolha.user_id=id_user JOIN Hora ON MarcacaoRecolha.hora_id=id_hora JOIN EquipaRecolha ON Hora.equipa_id=EquipaRecolha = id_equipaRecolha;";
        let marcacoes = await pool.query(sql);
        console.log(marcacoes)
        return {status:200, data: marcacoes};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}
