var pool = require("./connection");



/* login  */
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


/*
login Admin
module.exports.login2 = async function(email, contribuinte) {
    try {
        let sql = "SELECT * FROM Utilizador WHERE email=? AND contribuinte=? AND id_user=2";
        let utilizador = await pool.query(sql,[email, contribuinte] );
        if (utilizador.length > 0)
            return {status:200, data: utilizador[0]};
        else return {status:401, data: {msg: "Incorrect name or email"}};
    } catch(err) {
        console.log(err);
        return {status:500, data: {msg: "Server Problems. Try again later", err:err}};
    }
}



 login Equipa recolha
module.exports.login3 = async function(email, contribuinte) {
    try {
        let sql = "SELECT * FROM Utilizador WHERE email=? AND contribuinte=? AND id_user=3";
        let utilizador = await pool.query(sql,[email, contribuinte] );
        if (utilizador.length > 0)
            return {status:200, data: utilizador[0]};
        else return {status:401, data: {msg: "Incorrect name or email"}};
    } catch(err) {
        console.log(err);
        return {status:500, data: {msg: "Server Problems. Try again later", err:err}};
    }
}






module.exports.getDadores = async function() {
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


module.exports.getAdmin = async function() {
    try {
    	console.log("test");
        let sql = "select * from Utilizador join Categoria_Utilizador on Utilizador.categoria_id=id_categoria where categoria_id=2;"
        let dadores = await pool.query(sql);
        console.log(dadores)
        return {status:200, data: dadores};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}


module.exports.getFuncRecolha = async function() {
    try {
    	console.log("test");
        let sql = "select * from Utilizador join Categoria_Utilizador on Utilizador.categoria_id=id_categoria where categoria_id=2;"
        let dadores = await pool.query(sql);
        console.log(dadores)
        return {status:200, data: dadores};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}

module.exports.getUtilizador = async function(id_user) {
    try {

        let sql = "select * from Utilizador join Categoria_Utilizador on Utilizador.categoria_id=id_categoria where categoria_id=?;"
        let user = await pool.query(sql, [id_user]);
        return {status:200, data: user[0]};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}



module.exports.novoUtilizador = async function(Utilizador) {
    try {

        let sql = "insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id)" + "VALUES (?,?,?,?,?,?,?,?,?,?)"
        let user = await pool.query(sql, [Utilizador.nome,Utilizador.data_nasc,Utilizador.morada,Utilizador.cod_postal,Utilizador.zona,Utilizador.sexo,Utilizador.telefone,Utilizador.email,Utilizador.contribuinte,Utilizador.categoria_id]);
        return {status:200, data: user[0]};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}


*/