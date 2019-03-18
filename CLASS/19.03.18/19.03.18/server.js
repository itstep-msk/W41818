var http = require("http");
var data;

http.createServer(function(request, response) {
	response.setHeader("content-type", "text/html")
	
	//console.log(request.url);
	
	data = request.url.replace(/[/?]|favicon\.ico/gi, "");
	data = data.split("=");

	response.write("<h2>Hello from server " + data[0] + ": " + data[1] + "</h2>");

	response.end();
}).listen(7777, "127.0.0.1");

