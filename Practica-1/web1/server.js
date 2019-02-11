var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

http.createServer((req, res) => {
  console.log("---> Peticion recibida");
  console.log("Recurso solicitado (URL): " + req.url);
  var q = url.parse(req.url, true);
  console.log("pathname: " + q.pathname);

  var filename = "";

  if (q.pathname == "/"){
     filename += "/index.html"
  }else{
     filename = q.pathname
  }

  tipo = filename.split(".")[1];
  filename = "." + filename

  console.log("Filename: " + filename);
  console.log("Tipo: " + tipo);
  console.log();

  fs.readFile(filename, function(err, data){
    if (err) {
      res.writeHead(404, {'Content_Type': 'text/html'});
      return res.end("404 Not Found");
    }

    mime = "text/html"

    if(['png', 'jpg'].includes(tipo)){
      mime = "image/" + tipo
    }

    if(tipo == "css"){
      mime = "text/css"
    }

    res.write(data);
    console.log("Peticion atendida");
    console.log();
    return res.end();
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
