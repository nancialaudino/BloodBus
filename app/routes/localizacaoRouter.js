var express = require('express');
var router = express.Router();
var localizacaoModel = require("../Models/localizacaoModels");


/* login */
router.get('/', async function(req, res, next) {
  let result = await localizacaoModel.getAll();
  res.status(result.status).
     send(result.data);
});

module.exports = router;