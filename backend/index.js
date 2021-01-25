const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.end('Hello Socket.io');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('new-color', (color) => {
		console.log(color);

		socket.broadcast.emit('receive-color', color);
	});
});
const port = process.env.PORT;
http.listen(port, () => {
	console.log('listening on *:', port);
});
