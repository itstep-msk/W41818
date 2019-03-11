var doc = document;
var field = doc.querySelector(".field");
var server = new XMLHttpRequest;
var player = {
	el: doc.querySelector(".player"),
	move: function (x, y) {
		this.el.style.left = (x - this.el.offsetWidth / 2) + "px";
		this.el.style.top = (y - this.el.offsetHeight / 2) + "px";
	},
	id: 1,
	x: 0,
	y: 0
}

field.addEventListener("click", function(e) {
	var x = e.x - this.offsetLeft;
	var y = e.y - this.offsetTop;

	player.x = x;
	player.y = y;
	//player.move(x, y);
	//serverSend(x, y, player.id);
	//serverReceive();
})

function serverSend(x, y, id) {
	server.open("GET", "http://localhost/19.03.06/server/server.php?id=" + id + "&x=" + x + "&y=" + y, true);
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
						el.style.cssText = "width:30px;height:30px;border:1px solid red;position: absolute;transition:all 5s linear;";
						el.style.left = clients[client].x + "px";
						el.style.top = clients[client].y + "px";
						field.appendChild(el);
					}
				}
			}

			x = JSON.parse(server.responseText)["id_" + player.id].x;
			y = JSON.parse(server.responseText)["id_" + player.id].y;
			
			player.move(x, y);
		}
	}
}

function clientStatus() {
	serverSend(player.x, player.y, player.id);
	serverReceive();
}

setInterval(clientStatus, 10);