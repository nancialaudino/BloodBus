var pool = require("./connection");


/*todas as marcações*/
module.exports.getMarcacoes = async function() {
    try {
    	console.log("test");
        let sql = "SELECT EstadoRecolha.estado as 'estado', Utilizador.nome as 'dador', Hora.hora as 'hora', id_equipaRecolha as 'equipa' FROM MarcacaoRecolha JOIN EstadoRecolha ON MarcacaoRecolha.estado_id=id_estado JOIN Utilizador ON MarcacaoRecolha.user_id=id_user JOIN Hora ON MarcacaoRecolha.hora_id=id_hora JOIN EquipaRecolha ON Hora.equipa_id=EquipaRecolha.id_equipaRecolha;"
        let marcacoes = await pool.query(sql);
        console.log(marcacoes)
        return {status:200, data: marcacoes};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}


module.exports.getMarcacao = async function(id_marcacao) {
    try {

        let sql = "select EstadoRecolha.estado as 'Estado da Recolha', Utilizador.nome as 'Dador', Hora.hora as 'Hora da Marcação'"
        + "from MarcacaoRecolha join EstadoRecolha on MarcacaoRecolha.estado_id=id_estado join Utilizador on MarcacaoRecolha.user_id=id_user"
        +"join Hora on MarcacaoRecolha.hora_id=id_hora where user_id=1;"
        let user = await pool.query(sql, [id_marcacao]);
        return {status:200, data: user[0]};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}



/* nova marcação*/
module.exports.novaMarcacao = async function(marcacao) {
    try {

        let sql = "insert into Utilizador (nome, data_nasc, morada, cod_postal, sexo, telefone, email, contribuinte, categoria_id)" + "VALUES (?,?,?,?,?,?,?,?,1)"
        let result = await pool.query(sql, [marcacao.nome, marcacao.data_nasc, marcacao.morada, marcacao.cod_postal, marcacao.sexo, marcacao.telefone, marcacao.email, marcacao.contribuinte, marcacao.categoria_id]);
        let id = result.insertId;

        sql = "insert into MarcacaoRecolha (hora_id, estado_id, user_id, localizacao_id)" + "VALUES (?,?,?,?)"
        result = await pool.query(sql, [marcacao.hora_id, marcacao.estado_id, id, marcacao.localizao_id]);

        return {status:200, data: result};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}

