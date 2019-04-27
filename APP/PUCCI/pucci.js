function colorNeuralNetwork(color) {
	var colors = {
		blue: [0, 0, 255],
		lightblue: [0, 255, 255],
		red: [255, 0, 0],
		yellow: [255, 255, 0],
		green: [0, 255, 0],
		orange: [255, 128, 0],
		violet: [255, 0, 255],
		black: [0, 0, 0],
		white: [255, 255, 255]
	}
	var inter = {}

	for(key in colors) {
		inter[key] = [];

		for(var i = 0; i < colors[key].length; i++) {
			if(colors[key][i] > 128 && color[i] > 128) {
				inter[key].push(1)
			} else if (colors[key][i] < 128 && color[i] < 128) {
				inter[key].push(1)
			} else {
				inter[key].push(0)
			}
		}
	}
	console.log(inter)
}

colorNeuralNetwork([150, 90, 255]);
