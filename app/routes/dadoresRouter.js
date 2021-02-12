var express = require('express');
var router = express.Router();
var dadorModel = require("../Models/dadoresModels");


/* login */
router.post('/login', async function(req, res, next) {
  let result = await dadorModel.login(req.body.email, req.body.contribuinte);
  res.status(result.status).
     send(result.data);
});


/* obter todos os dadores */
router.get('/', async function(req, res, next) {
  let result = await dadorModel.getAll();
  res.status(result.status).
     send(result.data);
});


/* inserir novos dadores */
router.post('/', async function(req, res, next) {
  let utilizador = req.body;
  let result = await dadorModel.novoDador(utilizador);
  res.status(result.status).send(result.data);
});

/* Saber as marcações de um certo dador */
router.get('/:pos/marcacoes', async function(req, res, next) {
  let pos = req.params.pos;
  let result = await dadorModel.getMarcacoes(pos);
  res.status(result.status).send(result.data);
});


module.exports = router;



