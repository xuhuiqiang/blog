module.exports= function (name) {
    //读取环境变量中的degbug值
    return function (msg) {
        var debug=process.env.DEBUG;
        debug='^'+debug.replace('*','.*');
        console.log(debug);
        var regx=new RegExp(debug);
        if(regx.test(name)){
            console.log(name,msg);
        }
    }
}

