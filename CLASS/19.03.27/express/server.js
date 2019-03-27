var express = require("express");
var bodyParser = require("body-parser");
var fileupload = require("express-fileupload");
var app = express();
// Добавление bodyParser в express.js
// у request появится свойство body
app.use(bodyParser.urlencoded());

app.use(fileupload({
	useTempFiles : true,
    tempFileDir : __dirname + '/tmp/'
}));

app.listen(7777);

app.get("/", function(request, response) {
	// __dirname - полный пусть от корня до папки
	// пример. C:\Users\Student\Documents\19.03.27\express
	response.sendFile(__dirname + "/index.html")
})

app.post("/kuzya", function(request, response) {
	console.log(request.body);
	console.log(request.files);

	response.send("Спасибки за " + request.body.login);
})