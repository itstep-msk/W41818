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
		price: "100 000 P",
		brand: "daewoo"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Mersedes",
		price: "500 000 P",
		brand: "mersedes"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	}
]

var app = new Vue({
	el: "#app",
	data: {
		cars: carList,
		search: "",
		brands: [],
		price: []
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
		},
		brands: function() {
			var self = this;

			if(self.brands.length == 0) {
				self.cars = carList;
			} else {
				self.cars = [];

				for(var i = 0; i < self.brands.length; i++) {
					self.cars = self.cars.concat(carList.filter(function(item) {
							if(self.brands[i] == item.brand) {
								return true;
							}
						})
					)
				}
			}
		},
		price: function() {
			var self = this;

			if(self.price.length == 0) {
				self.cars = carList;
			} else {
				for(var i = 0; i < self.price.length; i++) {
					self.cars = carList.filter(function(item) {
						var priceFrom = +self.price[0] || 0;
						var priceTo = +self.price[1] || Number.MAX_VALUE;
						var priceCar = +item.price.replace(/\D/gi,"");

						if(priceFrom <= priceCar && priceTo >= priceCar && priceTo > priceFrom) {
							return true;
						}
					})
				}
			}
		}
	}
})
