// Business Logic

function Pizza(size, toppings){
	console.log(toppings)
	this.toppings = Array.from(toppings);
	this.size = size;
	console.log(this.toppings)
	console.log(typeof this.toppings)
	this.price = 0;
}

Pizza.prototype.priceTab = function() {
	if (this.size === "Small"){
		this.price += 8.99;
		if (typeof this.toppings != "object")	{
			return this.price;
		} else {
			this.price = this.price + (2.49 * this.toppings.length)
			return this.price
		}
	} else if (this.size === "Medium"){
		this.price += 10.99; 
		if (typeof this.toppings != "object")	{
			return this.price;
		} else {
			this.price = this.price + (2.99 * this.toppings.length)
			return this.price
		}
	} else if (this.size === "Large"){
		this.price += 13.99;
		if (typeof this.toppings != "object")	{
			return this.price;
		} else {
			this.price = this.price + (3.99 * this.toppings.length)
			return this.price
		}
	} else {
		this.price += 16.99;
		if (typeof this.toppings != "object")	{
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
	const toppingsArray = Array.from(toppings);
	
	
	let pizza = new Pizza(size, toppings);
	pizza.priceTab();


	const orderBox = document.getElementById("order-summary");
	orderBox.innerText = null

	const h1 = document.createElement("h1");
	const sizeh3 = document.createElement("h3");
	const toph3 = document.createElement("h3");
	const priceh3 = document.createElement("h3");
	const sizeh4 = document.createElement("h4");
	const topul = document.createElement("ul");
	const priceh4 = document.createElement("h4");

	orderBox.append(h1);
	h1.append("Pizza Ordered!");
	h1.after(sizeh3);
	sizeh3.append("Size: ");
	sizeh3.after(sizeh4);
	sizeh4.append(pizza.size);
	sizeh4.after(toph3);
	toph3.append("Toppings: ");
	toph3.after(topul);
	
	if (pizza.toppings.length <= 0){
		const li = document.createElement("li");
		topul.append(li);
		li.append("Cheese");
	} else {
		for (i = 0; i <= toppingsArray.length - 1; i++){
			const li = document.createElement("li");
			topul.append(li);
			li.append(toppingsArray[i].value);
		}
	}

	topul.after(priceh3);
	priceh3.append("Total:");
	priceh3.after(priceh4);
	priceh4.append("$" + parseFloat(pizza.price).toFixed(2));
}

window.addEventListener("load", function(){
	let form = document.getElementById("order-form");
	form.addEventListener("submit", formSubmitHandler);
})