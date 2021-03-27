var http = require('http');
var fs = require('fs');
const { normalize } = require('node:path');

var port = normalize(process.env.PORT || '3000');
http.createServer(function(req, res){
    res.writeHead('200',{'Content-Type':'text/html'});
    var url = req.url;
    if(url=='/'){
        fs.readFile('index.html',function(error,data){
            if (!error) {
               
                res.write(data);
                res.end();
            } else {
                res.end('abc');
            }
        });
    } else if (url=='/show'){

    }else if (url=='/insert'){
        fs.writeFile('test.txt',"Hello SonHandSome",function(err){
            if(!err){
                res.end('insert thanh cong');
            }
        });
    }
    else if (url=='/update'){      
        fs.appendFile('test.txt',"Hello SonHandSome01",function(err){
            if(!err){
                res.end('update thanh cong');
            }
        });
    }else if (url=='/delete'){
        fs.unlink('test.txt',function(err){
            if(!err){
                res.end('delete thanh cong');
            }
        });
    }else if (url=='/rename'){
        fs.rename('test.txt',"text.txt",function(err){
            if(!err){
                res.end('rename thanh cong');
            }
        });
    }
}).listen(port);