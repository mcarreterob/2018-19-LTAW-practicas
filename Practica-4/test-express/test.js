var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3000

var clients_number = 0;

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

io.on('connection', function(socket){
  console.log('--> Usuario conectado \r\n');
  clients_number += 1;
  console.log(clients_number);
  //-- Detectar si el usuario se ha desconectado
  socket.emit('new_message', 'Bienvenido amigo');
  io.emit('new_message', 'Hay un nuevo usuario, bienvenido!');
  socket.on('disconnect', function(){
    console.log('--> Usuario desconectado');
    clients_number -= 1;
    console.log(clients_number);
  });
  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    switch (msg) {
      case ' /help':
        msg = 'Help:' + '<br>' + '/list: to know the number of connected users'
              + '<br>' + '/hello: to receive a message from server' + '<br>'
              + '/date: to know the date'
        socket.emit('new_message', msg);
        break;
      case ' /list':
        msg = 'Connected users' + clients_number
        socket.emit('new_message', msg);
        break;
      case ' /hello':
        socket.emit('new_message', 'Hi! I´m the server');
        break;
      case ' /date':
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        switch (new Date().getDay()) {
          case 0:
            weekday = "Sunday";
            break;
          case 1:
            weekday = "Monday";
            break;
          case 2:
             weekday = "Tuesday";
            break;
          case 3:
            weekday = "Wednesday";
            break;
          case 4:
            weekday = "Thursday";
            break;
          case 5:
            weekday = "Friday";
            break;
          case 6:
            weekday = "Saturday";
        }
        msg = 'Today: ' + weekday + ', ' + day + '/' + month + '/' + year
      default:
        //-- Se lo envio a todos los clientes conectados
        io.emit('new_message', msg);
        break;
    }
      //-- Lo notifico en la consola
      console.log("Mensaje recibido: " + msg);
  })
});
