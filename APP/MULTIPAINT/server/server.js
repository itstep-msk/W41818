var io = require("socket.io")(7777);

io.on("connection", function(clients) {
	clients.on("clientEvent", function(data) {
		io.emit("serverEvent", data);
	})
})