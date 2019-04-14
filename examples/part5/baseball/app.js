var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/game', apiRouter);

require('./services/index').readyGame();

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);
    res.status(err.status || 500);
    res.send(err);
});

app.listen(3000);

process.on('uncaughtException', (err) => {
    console.error('uncaughtException', err);
    process.exit(1);
});
process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection', err);
    process.exit(1);
});

module.exports = app;