var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//处理收藏夹图标
var logger = require('morgan');//请求日志打印工具
var cookieParser = require('cookie-parser');//处理cookie增加cokkie属性。
var bodyParser = require('body-parser');//处理请求体

var routes = require('./routes/index');
var user = require('./routes/user');
var artical=require('./routes/artical');

var app = express();

// view engine setup设置模板引擎
app.set('views', path.join(__dirname, 'views'));//设置存放目录
app.set('view engine', 'html');//设置模板引擎
app.engine('html',require('ejs').__express);


// uncomment after placing your favicon in /public
//在你将你的收藏图标位置在/pblic目录下
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
