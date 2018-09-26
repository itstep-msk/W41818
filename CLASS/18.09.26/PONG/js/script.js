var ball = document.querySelector(".ball");
var player = document.querySelector(".player");
var x = 0;
var y = 0;
var playerY = 0;
var resolutionX = true;
var resolutionY = true;
// Синтаксис setInterval(function(){}, 1000), 
// Первым аргументом - функция
// Вторым - интервал времени

setInterval(function() {
	if(resolutionX == true) {
		if(x >= 389) {
			resolutionX = false;
		}
		x++;
	}

	if(resolutionX == false) {
		if(x <= 0) {
			resolutionX = true;
		}
		x--;
	}

	if(resolutionY == true) {
		if(y >= 189) {
			resolutionY = false;
		}
		y++;
	}

	if(resolutionY == false) {
		if(y <= 0) {
			resolutionY = true;
		}
		y--;
	}
	
	ball.style.left = x + "px";
	ball.style.top = y + "px";
}, 10);

document.addEventListener("keydown", function(e) {
	
	
	switch(e.keyCode) {
		case 38:
			if(playerY > 0) {
				playerY--;
			}
			break;
		case 40:
			if(playerY < 150) {
				playerY++;
			}
			break;
	}


	player.style.top = playerY + "px";
})