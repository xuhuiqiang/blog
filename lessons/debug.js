//用于打印一些调试信息
var debug=require('debug');
console.log(process.env.DEBUG);
var loggerServer=debug('logger:server');
loggerServer('server');

var loggerClient=debug('logger:client');
loggerClient('client');
