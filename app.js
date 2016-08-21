var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//�����ղؼ�ͼ��
var logger = require('morgan');//������־��ӡ����
var cookieParser = require('cookie-parser');//����cookie����cokkie���ԡ�
var bodyParser = require('body-parser');//����������

var routes = require('./routes/index');
var user = require('./routes/user');
var artical=require('./routes/artical');

var app = express();

// view engine setup����ģ������
app.set('views', path.join(__dirname, 'views'));//���ô��Ŀ¼
app.set('view engine', 'html');//����ģ������
app.engine('html',require('ejs').__express);


// uncomment after placing your favicon in /public
//���㽫����ղ�ͼ��λ����/pblicĿ¼��
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/user', user);
app.use('/artical',artical);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
