var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

http.createServer((req, res) => {
  console.log("---> Peticion recibida");
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data){
    console.log("Recurso solicitado (URL): " + req.url);
    if (err) {
      res.writeHead(404, {'Content_Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.write(data);
    return res.end();
    console.log("Peticion atendida");
  });
}).listen(8080);
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log("Peticion atendida")
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data){
    if (err) {
      res.writeHead(404, {'Content_Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    console.log("Peticion atendida")
  })
}).listen(8080);
*/
