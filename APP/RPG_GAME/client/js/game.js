var doc = document;
var field = doc.querySelector(".field");
var clientId = doc.querySelector(".client-id");
var connection = doc.querySelector(".connection");
var server = new XMLHttpRequest;
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
	//player.move(x, y);
	//serverSend(x, y, player.id);
	//serverReceive();
})

function serverSend(x, y, id) {
	server.open("GET", "http://localhost/19.03.06/RPG_GAME/server/server.php?id=" + id + "&x=" + x + "&y=" + y, true);
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
					//console.log(clients[client])
					var el = document.querySelector(".id_" + player.id);
					
					if(el) {
						el.style.left = clients[client].x + "px";
						el.style.top = clients[client].y + "px";
					} else {
						el = doc.createElement("div");
						el.classList.add("id_" + player.id);
						el.style.cssText = "width:30px;height:30px;background:red;position: absolute;transition:all 5s linear;";
						el.style.left = clients[client].x + "px";
						el.style.top = clients[client].y + "px";
						field.appendChild(el);
					}
				}
			}

			x = JSON.parse(server.responseText)["id_" + player.id].x;
			y = JSON.parse(server.responseText)["id_" + player.id].y;
			
			//player.move(x, y);
			if(player.resolution) {
				drawLine(player.x1,player.y1,player.x2,player.y2);
			}
		}
	}
}

function clientStatus() {
	serverSend(player.x, player.y, player.id);
	serverReceive();
}

connection.addEventListener("click", function() {
	player.id = clientId.value;
	connection.disabled = true;
	setInterval(clientStatus, 10);
})

function drawLine(x1, y1, x2, y2) {
	var deltaX = Math.abs(x2 - x1);
	var deltaY = Math.abs(y2 - y1);
	var signX = x1 < x2 ? 1 : -1;
	var signY = y1 < y2 ? 1 : -1;
	var error = deltaX - deltaY;
	player.resolution = false;

	var timer = setInterval(function() {
		if(x1 != x2 || y1 != y2) 
		{
			var error2 = error * 2;

			if(error2 > -deltaY) 
			{
				error -= deltaY;
				x1 += signX;
				player.x1 = x1;
			}
			if(error2 < deltaX) 
			{
				error += deltaX;
				y1 += signY;
				player.y1 = y1;
			}
			player.move(player.x1, player.y1);
		} else {
			clearInterval(timer);
			//player.resolution = true;
		}
	}, 10);
}