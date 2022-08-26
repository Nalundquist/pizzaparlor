// Business Logic

function Pizza(toppings, size){
	this.toppings = toppings;
	this.size = size;
	this.price = 0;
}

Pizza.prototype.priceTab = function() {
	if (this.size === "small"){
		this.price += 8.99
		this.toppings.forEach(function(i){
			this.price += 1.99
			if (i === "sirloin" || i === "escargot" || i === "chevre" || i === "black truffle")
			this.price += 1.99
		})
	} else if (this.size === "medium"){
		this.price += 10.99
		this.toppings.forEach(function(i){
			this.price += 2.99
			if (i === "sirloin" || i === "escargot" || i === "chevre" || i === "black truffle")
			this.price += 2.99
		})
	} else if (this.size === "large"){
		this.price += 13.99
		this.toppings.forEach(function(i){
			this.price += 3.99
			if (i === "sirloin" || i === "escargot" || i === "chevre" || i === "black truffle")
			this.price += 3.99
		})
	} else {
		this.price += 16.99
		this.toppings.forEach(function(i){
			this.price += 5.49
			if (i === "sirloin" || i === "escargot" || i === "chevre" || i === "black truffle")
			this.price += 5.49
		})
	}
}