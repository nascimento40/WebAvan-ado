const http = require ('http');

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    response.end('Olá mundo! Node.js');
}).listen(8000, 'localhost');

console.log('Rodando no servidor http://localhost:8000/!');