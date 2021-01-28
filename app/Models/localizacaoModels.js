var pool = require("./connection");

module.exports.getAll = async function() {
    try {
    	console.log("test");
        let sql = "select * from Localizacao;"
        let localizacoes = await pool.query(sql);
        console.log(localizacoes)
        return {status:200, data: localizacoes};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }

}