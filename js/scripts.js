// Business Logic

function Pizza(toppings, size){
	this.toppings = toppings;
	this.size = size;
	this.price = 0;
}

Pizza.prototype.priceTab = function() {
	if (this.size === "small"){
		this.price += 8.99;
		this.price = this.price + (2.49 * this.toppings.length)
	} else if (this.size === "medium"){
		this.price += 10.99;
		this.price = this.price + (2.99 * this.toppings.length)
		} else if (this.size === "large"){
		this.price += 13.99;
		this.price = this.price + (3.99 * this.toppings.length)
	} else {
		this.price += 16.99;
		this.price = this.price + (5.49 * this.toppings.length)
	}
}