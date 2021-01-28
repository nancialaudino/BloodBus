var pool = require("./connection");

//estados
module.exports.getEstados = async function() {
    try {
    	console.log("test");
        let sql = "select estado from EstadoRecolha;"
        let estados = await pool.query(sql);
        console.log(estados)
        return {status:200, data: estados};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}
