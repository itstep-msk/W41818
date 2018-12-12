var home = { template: '<div>Текст про яблоки</div>' }
var catalog = { template: '#catalog' }
var about = { template: '<div>Текст про апельсины</div>' }

// Связываем ссылки с компонентами
var myRoutes = [
	{ path: '/', component: home },
	{ path: '/catalog', component: catalog },
	{ path: '/about', component: about }
]
// Инициализация VueRouter
var myRouter = new VueRouter({
	routes: myRoutes
})

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
		caption: "Daewoo nexia",
		price: "50 000 P",
		brand: "daewoo"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Daewoo matiz",
		price: "200 000 P",
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
		price: [],
		tempArray: []
	},
	router: myRouter,
	watch: {
		search: function() {
			var self = this;

			if(this.search == "") {
				this.cars = carList;
			}

			if(this.tempArray.length == 0) {
				this.tempArray = carList;
			}

			this.cars = this.tempArray.filter(function(item) {
				var cardItem = item.caption.toLowerCase();
				var searchItem = self.search.toLowerCase();

				if(cardItem.includes(searchItem)) {
					return true;
				}
			})
		},
		brands: function() {
			this.filter();
		},
		price: function() {
			this.filter();
		}
	},
	methods: {
		filter: function() {
			var self = this;
			this.tempArray = [];

			function findBrand() {
				if(self.brands.length != 0) {
					for(var i = 0; i < self.brands.length; i++) {
						self.tempArray = self.tempArray.concat(self.cars.filter(function(item) {
								if(self.brands[i] == item.brand) {
									return true;
								}
							})
						)
					}

					self.cars = self.tempArray;
				}
			}

			function findPrice() {
				self.cars = carList.filter(function(item) {
					var priceFrom = +self.price[0] || 0;
					var priceTo = +self.price[1] || Number.MAX_VALUE;
					var priceCar = +item.price.replace(/\D/gi,"");

					if(priceFrom <= priceCar && priceTo >= priceCar && priceTo > priceFrom) {
						return true;
					}
				})
			}

			if(self.price.length == 0/* && self.brands.length == 0 && this.search == ""*/) {
				self.cars = carList;

				findBrand()

			} else {
				self.cars = [];

				findPrice();
				findBrand();
			}
		}
	}
})
