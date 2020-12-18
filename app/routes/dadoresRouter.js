var express = require('express');
var router = express.Router();
var dadorModel = require("../Models/dadoresModels");

/* obter todos os dadores */
router.get('/', async function(req, res, next) {
  let result = await dadorModel.getAll();
  res.status(result.status).
     send(result.data);
});


module.exports = router;