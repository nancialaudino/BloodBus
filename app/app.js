var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
var marcacoesRouter = require('./routes/marcacoesRouter');
var dadoresRouter = require('./routes/dadoresRouter');
var horariosRouter = require('./routes/horariosRouter');
var localizacaoRouter = require('./routes/localizacaoRouter');
var estadosRouter = require('./routes/estadosRouter');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/marcacoesRecolha', marcacoesRouter);
app.use('/api/dadores', dadoresRouter);
app.use('/api/horarios', horariosRouter);
app.use('/api/localizacoes',localizacaoRouter);
app.use('/api/estados', estadosRouter);



module.exports = app;
