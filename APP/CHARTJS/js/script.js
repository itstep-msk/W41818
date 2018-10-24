var ctx = document.getElementById('myChart').getContext('2d');
var link = "https://www.cbr-xml-daily.ru/daily_json.js";

$.getJSON(link, function(data) {
    var valuteLabels = [];
    var valutePrice = [];

    for(valute in data.Valute) {
        valuteLabels.push(valute)
        valutePrice.push(data.Valute[valute].Value)
    }

    var chart = new Chart(ctx, {
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