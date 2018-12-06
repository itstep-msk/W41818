Vue.component("card", {
	props: ["item"],
	template:`
		<div class="uk-card uk-card-default uk-card-body uk-width-1-3">
			<div class="uk-width-1-1 uk-height-small uk-background-contain" v-bind:style="'background-image: url(' + item.pic + ')'"></div>
			<h3 class="uk-card-title">{{ item.caption }}</h3>
			<p>{{ item.price }}</p>
		</div>`
})

var carList = [
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Daewoo nexia",
		price: "100 000 P"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Mersedes",
		price: "500 000 P"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P"
	}
]

var app = new Vue({
	el: "#app",
	data: {
		cars: carList,
		search: ""
	},
	watch: {
		search: function() {
			var self = this;

			if(this.search == "") this.cars = carList;

			this.cars = carList.filter(function(item) {
				var cardItem = item.caption.toLowerCase();
				var searchItem = self.search.toLowerCase();

				if(cardItem.includes(searchItem)) {
					return true;
				}
			})
		}
	}
})
