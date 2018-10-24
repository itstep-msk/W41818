var input = $(".js-input");
var button = $(".js-button");
var cards = $(".js-cards");
var card = "<div class='uk-card uk-card-default uk-width-1-5 js-card uk-height-small uk-background-cover uk-margin-remove'></div>";
var apiKey = "f6a6b2640636bffe9c10ae6d0a95d870e991967c68f28ec83bf46a4d29cfb7ca";
var link = "https://api.unsplash.com/search/photos/?client_id=" + apiKey + "&query="

button.on("click", function() {
	cards.empty();

	if(input.val() != "") {
		var query = link + input.val();

		$.getJSON(query, function(data) {
			for(var i = 0; i < data.results.length; i++) {
				var img = data.results[i].urls

				cards.append(card).find(".js-card").last().css({"background-image":"url(" + img.thumb +")"});
			}
		})
	}
})