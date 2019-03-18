var http = require("http");
var fs = require("fs");

/*
fs.readFile(f(file){})
fs.readFileSync()
fs.writeFile(f(file){})
fs.writeFileSync()
*/
var count = 0;
var file;

http.createServer(server).listen(7777);

function server(request, response) {
	// async
	/*
	fs.readFile("data.txt","utf8",function(err, file) {
		response.write(file)
		//console.log(file);
		response.end();
	})
	*/
	// sync
	/*
	var file = fs.readFileSync("data.txt", "utf8");
	response.write(file)
	response.end();
	*/
	fs.writeFileSync("data.txt", "Hola");

}