var chicken = document.querySelector(".chicken");
var eggs = document.querySelector(".eggs");
var brick = document.querySelector(".brick");
var degree = 0;

function getRandomPos() {
	var sign = [1, 1];
	var x = Math.floor(Math.random() * 500) * sign[Math.floor(Math.random()*2)];
	var y = Math.floor(Math.random() * 500) * sign[Math.floor(Math.random()*2)];
	
	brick.style.left = x + "px";
	brick.style.top = y + "px";
	console.log(brick.offsetLeft, brick.offsetTop);
	var egg = document.querySelector(".egg");
	drawLine(egg.offsetLeft, egg.offsetTop, brick.offsetLeft, brick.offsetTop, egg)
}

function move() {
	degree++;
	chicken.style.transform = "rotateZ(" + degree + "deg)";
}

function shoot() {
	var el = document.createElement("div");
	el.classList.add("egg");
	eggs.appendChild(el);
}

function init() {
	setInterval(move);
}

shoot();

function drawLine(x1, y1, x2, y2, object) {
	var egg = document.querySelector(".egg");
	var deltaX = Math.abs(x2 - x1);
	var deltaY = Math.abs(y2 - y1);
	var signX = x1 < x2 ? 1 : -1;
	var signY = y1 < y2 ? 1 : -1;
	var error = deltaX - deltaY;
	//object.resolution = false;

	timer = setInterval(function() {
		if(x1 != x2 || y1 != y2) 
		{
			var error2 = error * 2;

			if(error2 > -deltaY) 
			{
				error -= deltaY;
				x1 += signX;
				//object.x1 = x1;
			}
			if(error2 < deltaX) 
			{
				error += deltaX;
				y1 += signY;
				//object.y1 = y1;
			}

			egg.style.left = x1 + "px";
			egg.style.top = y1 + "px";
		} else {
			clearInterval(timer);
		}
	}, 10);
}