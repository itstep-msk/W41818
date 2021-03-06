var ball = document.querySelector(".ball");
var player = document.querySelector(".player");
var x = 200;
var y = 100;
var playerX = 200;
var score = 0;
var resolutionX = true;
var resolutionY = false;
var statusGame = false;
var timer;
// Синтаксис setInterval(function(){}, 1000), 
// Первым аргументом - функция
// Вторым - интервал времени

// Задаем стартувую позицию
ball.style.left = x + "px";
ball.style.top = y + "px";
player.style.left = playerX + "px";

function moveBall() {
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

	collision();
	
	ball.style.left = x + "px";
	ball.style.top = y + "px";
}

timer = setInterval(moveBall, 10);

function collision() {
	 if(ball.offsetLeft > player.offsetLeft
	 	&& ball.offsetLeft < player.offsetLeft + player.offsetWidth
	 	&& ball.offsetTop + ball.offsetHeight >= player.offsetTop) {
	 	resolutionY = false;
	 	score++;
	 }

	 if(ball.offsetTop + ball.offsetHeight == 199) {
	 	console.log("GAME OVER");
	 	clearInterval(timer);
	 	statusGame = true;
	 }
}

function startGame() {
	statusGame = false;
	x = 200;
	y = 100;
	ball.style.left = x + "px";
	ball.style.top = y + "px";
	timer = setInterval(moveBall, 10);
}

document.addEventListener("keydown", function(e) {
	
	switch(e.keyCode) {
		case 37:
			if(playerX > 0) {
				playerX-=10;
			}
			break;
		case 39:
			if(playerX < 350) {
				playerX+=10;
			}
			break;
		case 32:
			if(statusGame == true) {
				startGame();	
			}
			break;
	}

	player.style.left = playerX + "px";
})