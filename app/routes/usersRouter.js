var express = require('express');
var router = express.Router();
var userModel = require("../Models/usersModel");



/* login */
router.post('/login', async function(req, res, next) {
  let result = await userModel.login(req.body.email, req.body.contribuinte);
  res.status(result.status).
     send(result.data);
});


/* obter todos os dadores */
router.get('/', async function(req, res, next) {
  let result = await userModel.getDadores();
  res.status(result.status).
     send(result.data);
});



router.get('/', async function(req, res, next) {
  let result = await userModel.getAdmin();
  res.status(result.status).
     send(result.data);
});



router.get('/', async function(req, res, next) {
  let result = await userModel.getFuncRecolha();
  res.status(result.status).
     send(result.data);
});



router.get('/', async function(req, res, next) {
  let result = await userModel.getUtilizador();
  res.status(result.status).
     send(result.data);
});


router.post('/', async function(req, res, next) {
  let result = await userModel.novoUtilizador();
  res.status(result.status).
     send(result.data);
});

module.exports = router;
