module.exports= function (name) {
    //��ȡ���������е�degbugֵ
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

