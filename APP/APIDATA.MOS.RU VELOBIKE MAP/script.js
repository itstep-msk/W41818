var apikey = "?api_key=14829ea065bd232db3c4f1796acecbf3";
var link = "https://apidata.mos.ru/v1/datasets/";
var param = "/features/"
var id = "918";

var query = link + id + param + apikey;

$.getJSON(query, function(data) {
	console.log(data);

	// ЯНДЕКС КАРТЫ
	ymaps.ready(init);

	function init(){  
	    var myMap = new ymaps.Map("map", {
	        center: [55.76, 37.64],
	        zoom: 10
	    });

	    for(var i = 0; i < data.features.length; i++) {
	    	var x = data.features[i].geometry.coordinates[1];
	    	var y = data.features[i].geometry.coordinates[0];

	    	console.log(data.features[i].properties.Attributes.BikeParkingSlotsAmount)

	    	myMap.geoObjects.add(new ymaps.Placemark([x,y]));
	    }

	}
	// ГРАФИК CHARTJS
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'radar',

	    // The data for our dataset
	    data: {
	        labels: [],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgb(255, 99, 132)',
	            borderColor: 'rgb(255, 99, 132)',
	            data: [],
	        }]
	    }
	});

	for(var i = 0; i < data.features.length; i++) {
		var label = data.features[i].properties.Attributes.Name;
		var slot = data.features[i].properties.Attributes.BikeParkingSlotsAmount;

		chart.data.labels.push(label);
		chart.data.datasets[0].data.push(slot);

		chart.update();
	}
})