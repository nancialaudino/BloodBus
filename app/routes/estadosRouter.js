var express = require('express');
var router = express.Router();
var estadosModel = require('../Models/estadosModels');

router.get('/', async function(req, res, next) {
    let result = await estadosModel.getEstados();
    res.status(result.status).send(result.data);
});

module.exports = router;