
var express = require('express');
var router = express.Router();
var horariosModel = require('../Models/horariosModels');

router.get('/', async function(req, res, next) {
    let result = await horariosModel.getHoras();
    res.status(result.status).send(result.data);
});

module.exports = router;