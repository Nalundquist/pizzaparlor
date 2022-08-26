// Business Logic

function Pizza(size, toppings){
	this.toppings = toppings;
	this.size = size;
	this.price = 0;
}

Pizza.prototype.priceTab = function() {
	if (this.size === "small"){
		this.price += 8.99;
		if (typeof this.toppings != Object)	{
			return this.price;
		} else {
			this.price = this.price + (2.49 * this.toppings.length)
			return this.price
		}
	} else if (this.size === "medium"){
		this.price += 10.99; 
		if (typeof this.toppings != Object)	{
			return this.price;
		} else {
			this.price = this.price + (2.99 * this.toppings.length)
			return this.price
		}
	} else if (this.size === "large"){
		this.price += 13.99;
		if (typeof this.toppings != NodeList && typeof this.toppings != String && typeof this.toppings != Object)	{
			console.log("inside empty toppings")
			console.log(typeof this.toppings);
			return this.price;
		} else {
			this.price = this.price + (3.99 * this.toppings.length)
			console.log("inside priceTab, this.price is: " + this.price)
			return this.price
		}
	} else {
		this.price += 16.99;
		if (typeof this.toppings != Object || typeof this.toppings != String)	{
			return this.price;
		} else {
			this.price = this.price + (5.49 * this.toppings.length)
			return this.price
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
	
	const orderBox = document.getElementById("order-summary");
	orderBox.innerText = null

	const h1 = document.createElement("h1");
	const sizeh3 = document.createElement("h3");
	const toph3 = document.createElement("h3");
	const priceh3 = document.createElement("h3");
	const sizeh4 = document.createElement("h4");
	const toph4 = document.createElement("h4");
	const priceh4 = document.createElement("h4");

	console.log("price =" + pizza.price);
	console.log("toppings are: " + pizza.toppings)
	console.log(pizza)

	orderBox.append(h1);
	h1.append("Pizza Ordered!");
	h1.after(sizeh3);
	sizeh3.append("Size: ");
	sizeh3.after(sizeh4);
	sizeh4.append(pizza.size);
	sizeh4.after(toph3);
	toph3.append("Toppings: ");
	toph3.after(toph4);
	toph4.append(pizza.toppings.toString());
	toph4.after(priceh3);
	priceh3.append("Total: $");
	priceh3.after(priceh4);
	priceh4.append(pizza.price);
}

window.addEventListener("load", function(){
	let form = document.getElementById("order-form");
	form.addEventListener("submit", formSubmitHandler);
})