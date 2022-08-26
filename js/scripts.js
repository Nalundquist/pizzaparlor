// Business Logic

function Pizza(size, toppings){
	this.toppings = toppings;
	this.size = size;
	this.price = 0;
}

Pizza.prototype.priceTab = function() {
	if (this.size === "small"){
		this.price += 8.99;
		if (typeof this.toppings != Object || typeof this.toppings != String)	{
			return this.price;
		} else {
			this.price = this.price + (2.49 * this.toppings.length)
		}
	} else if (this.size === "medium"){
		this.price += 10.99;
		if (typeof this.toppings != Object || typeof this.toppings != String)	{
			return this.price;
		} else {
			this.price = this.price + (2.99 * this.toppings.length)
		}
	} else if (this.size === "large"){
		this.price += 13.99;
		if (typeof this.toppings != Object || typeof this.toppings != String)	{
			return this.price;
		} else {
			this.price = this.price + (3.99 * this.toppings.length)
		}
	} else {
		this.price += 16.99;
		if (typeof this.toppings != Object || typeof this.toppings != String)	{
			return this.price;
		} else {
			this.price = this.price + (5.49 * this.toppings.length)
		}
	}
}

// User Interface Logic

function formSubmitHandler(event){
	event.preventDefault();

	const sizeSelect = document.getElementById("pizza-size");
	const topSubmit = document.getElementById("top-submit-1");

	sizeSelect.addEventListener("select", function(){
		topSubmit.removeAttribute("class", "hidden");
	})

	const size = document.getElementById("pizza-size").value;
	const toppings = document.querySelectorAll("input[name=toppings]:checked");
	
	let pizza = new Pizza(size, toppings);
	pizza.priceTab();
	
	const h1 = document.createElement("h1");
	const sizeh3 = document.createElement("h3");
	const toph3 = document.createElement("h3");
	const priceh3 = document.createElement("h3");
	const sizeh4 = document.createElement("h4");
	const toph4 = document.createElement("h4");
	const priceh4 = document.createElement("h4");
	const orderBox = document.getElementById("order-summary");

	orderBox.append(h1);
	h1.append("Pizza Ordered!");
	sizeh3.after(h1);
	sizeh3.append("Size: ");
	sizeh4.after(sizeh3);
	sizeh4.append(pizza.size);
	toph3.after(sizeh4);
	toph3.append("Toppings: ");
	toph4.after(toph3);
	toph4.append(pizza.toppings);
	priceh3.after(toph4);
	priceh3.append("Total: $");
	priceh4.after(priceh3);
	priceh4.append(pizza.price);
}

window.addEventListener("load", function(){
	let form = document.getElementById("order-form");
	form.addEventListener("submit", formSubmitHandler);
})