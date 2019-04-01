var authorization = document.querySelector(".authorization");
var room = document.querySelector(".room");
var connect = document.querySelector(".connect");
var chat = document.querySelector(".chat");
var messages = document.querySelector(".messages");
var text = document.querySelector(".text");
var send = document.querySelector(".send");
var server;

connect.addEventListener("click", function() {
	authorization.style.display = "none";
	chat.style.display = "block";

	server = new Bugout(room.value);
	server.on("message", function(address, message) {
		if(address != this.address()) {
			messages.innerHTML += "<div class='row clearfix'><div class='message message--left'>" + address +": " + message + "</div></div>";
		} else {
			messages.innerHTML += "<div class='row clearfix'><div class='message message--right'>" + "I'm: " + message + "</div></div>";
		}
	})
})

send.addEventListener("click", sendMessage);

text.addEventListener("keydown", e => e.keyCode == 13 && sendMessage());

function sendMessage() {
	server.send(text.value);
	text.value = "";
}