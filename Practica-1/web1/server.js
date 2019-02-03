var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data){
    if (err) {
      res.writeHead(404, {'Content_Type': 'text/html'; 'text/css'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html; text/css'});
    res.write(data);
    return res.end();
    console.log("Peticion atendida")
  });
}).listen(8080);
