var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3000

//-- Punto de entrada pricipal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Página principal: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Fichero js solicitado")
});

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado

var clients= [];
io.on('connection', function(socket){
  console.log('--> Usuario conectado \r\n');
  clients.push(socket.id);
  //-- Detectar si el usuario se ha desconectado
  io.emit('new_message', 'Hay un nuevo usuario, bienvenido!');
  console.log(clients);
  socket.on('disconnect', function(){
    console.log('--> Usuario desconectado');
    disconnected = clients.filter(clients[i] == socket.id)
    console.log(disconnected);
    clients.pop(socket.id);
    console.log(clients);
  });
  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    //-- Lo notifico en la consola
    console.log("Mensaje recibido: " + msg);
    //-- Se lo envio a todos los clientes conectados
    io.emit('new_message', msg);
  })
});