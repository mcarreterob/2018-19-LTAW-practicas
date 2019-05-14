var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3000

var clients_number = 0;
var clients_name = [];

//-- Punto de entrada pricipal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Página principal: /")
});

//-- Servir el CSS
app.get('/chat.css', function(req, res){
  res.sendFile(__dirname + '/chat.css');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Fichero de estilo solicitado")
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
  socket.on('new_name', user_name =>{
     clients_name += user_name + ',' + '\n';
     socket.emit('new_message', 'Bienvenido ' + user_name + '<br>');
     socket.broadcast.emit('new_message', 'Hay un nuevo usuario, bienvenido ' + user_name + '!<br>');
  })
  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario desconectado');
    clients_number -= 1;
    io.emit('new_message', 'Se ha desconectado un usuario<br>');
    console.log(clients_number);
  });
  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    command = msg.split(" ")[1]
    switch (command) {
      case '/help':
        msg = '<br>Help:' + '<br>' + '/list: to know the number of connected users'
              + '<br>' + '/hello: to receive a message from server' + '<br>'
              + '/date: to know the date<br>'
        socket.emit('new_message', msg);
        break;
      case '/list':
        msg = 'Connected users: ' + clients_number
        socket.emit('new_message', msg);
        break;
      case '/hello':
        socket.emit('new_message', 'Hi! I´m the server');
        break;
      case '/date':
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth() + 1;
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
        date = 'Today: ' + weekday + ', ' + day + '/' + month + '/' + year
        socket.emit('new_message', date);
        break;
      default:
        //-- Se lo envio a todos los clientes conectados
        io.emit('new_message', msg);
        break;
    }
      //-- Lo notifico en la consola
      console.log("Mensaje recibido: " + msg);
      //console.log(socket.id);
  })
});
