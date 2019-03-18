var doc = document;
var field = doc.querySelector(".field");
var clientId = doc.querySelector(".client-id");
var connection = doc.querySelector(".connection");
var server = new XMLHttpRequest;
var timer;
var player = {
	el: doc.querySelector(".player"),
	move: function (x, y) {
		this.el.style.left = (x - this.el.offsetWidth / 2) + "px";
		this.el.style.top = (y - this.el.offsetHeight / 2) + "px";
	},
	id: 1,
	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
	resolution: false
}

field.addEventListener("click", function(e) {
	var x = e.x - this.offsetLeft;
	var y = e.y - this.offsetTop;

	player.x2 = x;
	player.y2 = y;
	player.resolution = true;
	clearInterval(timer);
})

function serverSend(x1, y1, x2, y2, id) {
	server.open("GET", "http://localhost/19.03.06/RPG_GAME/server/server.php?id=" + id + "&x1=" + x1 + "&y1=" + y1 + "&x2=" + x2 + "&y2=" + y2, true);
	server.send();
}

function serverReceive() {
	var x;
	var y;
	var clients;

	server.onreadystatechange = function() {
		if(server.status == 200 && server.readyState == 4) {
			clients = JSON.parse(server.responseText);
			for(client in clients) {
				if(client != "id_" + player.id) {
					
					var el = document.querySelector(".id_" + player.id);
					
					if(el) {
						el.style.left = clients[client].x2 + "px";
						el.style.top = clients[client].y2 + "px";
					} else {
						el = doc.createElement("div");
						el.classList.add("id_" + player.id);
						el.classList.add("anotherPlayer");
						el.style.left = clients[client].x2 + "px";
						el.style.top = clients[client].y2 + "px";
						field.appendChild(el);
					}
				}
			}

			var x1 = Number(JSON.parse(server.responseText)["id_" + player.id].x1);
			var y1 = Number(JSON.parse(server.responseText)["id_" + player.id].y1);
			var x2 = Number(JSON.parse(server.responseText)["id_" + player.id].x2);
			var y2 = Number(JSON.parse(server.responseText)["id_" + player.id].y2);
			
			if(player.resolution) {
				drawLine(x1,y1,x2,y2, player);
			}
		}
	}
}

function clientStatus() {
	serverSend(player.x1, player.y1, player.x2, player.y2, player.id);
	serverReceive();
}

connection.addEventListener("click", function() {
	player.id = clientId.value;
	connection.disabled = true;
	setInterval(clientStatus, 100);
})

function drawLine(x1, y1, x2, y2, object) {
	var deltaX = Math.abs(x2 - x1);
	var deltaY = Math.abs(y2 - y1);
	var signX = x1 < x2 ? 1 : -1;
	var signY = y1 < y2 ? 1 : -1;
	var error = deltaX - deltaY;
	object.resolution = false;

	timer = setInterval(function() {
		if(x1 != x2 || y1 != y2) 
		{
			var error2 = error * 2;

			if(error2 > -deltaY) 
			{
				error -= deltaY;
				x1 += signX;
				object.x1 = x1;
			}
			if(error2 < deltaX) 
			{
				error += deltaX;
				y1 += signY;
				object.y1 = y1;
			}

			object.move(object.x1, object.y1);
		} else {
			clearInterval(timer);
		}
	}, 10);
}