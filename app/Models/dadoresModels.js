var pool = require("./connection");



/* login Dador */
module.exports.login = async function(email, contribuinte) {
    try {
        let sql = "SELECT * FROM Utilizador WHERE email=? AND contribuinte=?";
        let utilizador = await pool.query(sql,[email, contribuinte] );
        if (utilizador.length > 0)
            return {status:200, data: utilizador[0]};
        else return {status:401, data: {msg: "Incorrect name or email"}};
    } catch(err) {
        console.log(err);
        return {status:500, data: {msg: "Server Problems. Try again later", err:err}};
    }
}

module.exports.getAll = async function() {
    try {
    	console.log("test");
        let sql = "select * from Utilizador join Categoria_Utilizador on Utilizador.categoria_id=id_categoria where categoria_id=1;"
        let dadores = await pool.query(sql);
        console.log(dadores)
        return {status:200, data: dadores};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}



//novo dador
module.exports.novoDador = async function(Utilizador) {
    try {

        let sql = "insert into Utilizador (nome, data_nasc, morada, cod_postal, sexo, telefone, email, contribuinte, categoria_id)" + "VALUES (?,?,?,?,?,?,?,?,?,1)"
        let user = await pool.query(sql, [Utilizador.nome,Utilizador.data_nasc,Utilizador.morada,Utilizador.cod_postal,Utilizador.sexo,Utilizador.telefone,Utilizador.email,Utilizador.contribuinte,Utilizador.categoria_id]);
        return {status:200, data: user[0]};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}