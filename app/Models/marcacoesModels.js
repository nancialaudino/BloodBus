var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = "select EstadoRecolha.estado as 'Estado da Recolha', Utilizador.nome as 'Dador', Hora.hora as 'Hora da Marcação' from MarcacaoRecolha join EstadoRecolha on MarcacaoRecolha.estado_id=id_estado join Utilizador on MarcacaoRecolha.user_id=id_user join Hora on MarcacaoRecolha.hora_id=id_hora";
        let marcacoes = await pool.query(sql);
        return {status:200, data: marcacoes};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}