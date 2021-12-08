var http = require('http')

http.createServer(function(req, res){
    res.end("Hi there!")


}).listen(1909)

console.log("Servidor está rodando!")

