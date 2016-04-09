var net = require('net');

function zero(i) {
  return (i < 10 ? '0' : '') + i;
}

function now () {
  var date = new Date();
  return date.getFullYear() + '-' + zero(date.getMonth()+1) + '-'
    + zero(date.getDate()) + ' ' + zero(date.getHours()) + ':'
    + zero(date.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
