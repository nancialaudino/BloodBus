var pool = require("./connection");

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
