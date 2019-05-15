//var ipcRenderer = require('electron').ipcRenderer;

function main(){
  //const io = require('socket.io-client');
  const socket = io('http://localhost:3000');

  console.log("Hola!!!!");
  //var socket = io();
  //-- Obtenemos los elementos de interfaz:
  //-- Boton de envio
  var send = document.getElementById('send')
  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')
  //-- Caja con el mensaje a enviar
  var msg = document.getElementById('msg')

  // -- Enviar el mensaje pulsando la tecla ENTER
  msg.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
      event.preventDefault();
      document.getElementById('send').click();
    }
  })

  send.onclick = () => {
    //-- Enviamos el mensaje
    //ipcRenderer.send('new_message', msg);
    socket.emit('new_message', msg.value)
    //-- Lo notificamos en la consola del servidor
    console.log("Mensaje emitido");
    msg.value = "";
  }

  //ipcRenderer.on('bienvenida', (event,msg) => {
    // display.innerHTML += msg + '<br>';
 //});
  //-- Cuando se reciba un mensaje del
  //-- servidor se muestra en el parrafo
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
});
}
