var Event = require("events");
var kuzya = new Event();
// прослушивание события
kuzya.on("plotiNologi", function(e) {
	console.log("Заплотил нологи")
	console.log("А что это у нас в аргументе: " + e)
})
// генерация события
kuzya.emit("plotiNologi", "nalog");