var express = require('express');
var router = express.Router();
var marcModel = require("../Models/marcacoesModels");

/* obter todas as marcações */
router.get('/', async function(req, res, next) {
  let result = await marcModel.getMarcacoes();
  res.status(result.status).
     send(result.data);
});

router.post('/', async function(req, res, next) {
  let marcacao = req.body;
  let result = await marcModel.novaMarcacao(marcacao);
  res.status(result.status).send(result.data);
});


module.exports = router;



