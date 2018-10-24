var ctx = document.getElementById('myChart').getContext('2d');
var link = "https://blockchain.info/ticker";
var chart;

$.getJSON(link, function(data) {
    var valuteLabels = [];
    var valutePrice = [];

    for(valute in data) {
        valuteLabels.push(valute);
        valutePrice.push(data[valute].buy);
    }

    console.log(data)

    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: valuteLabels,
            datasets: [{
                label: "My First dataset",
                borderColor: 'rgb(255, 99, 132)',
                data: valutePrice,
            }]
        },

        // Configuration options go here
        options: {}
    });


})