### describe Pizza()

#### test: create pizza constructor that contains keys for toppings and size attributes

	code: const pepAndOlivePizza = new Pizza(["pepperoni", "olive"], "large")
	console.log(pepAndOlivePizza.size)

	Expected Output: "large"

#### test: add pizza price key to be modified by future prototype method

code: const pepAndOlivePizza = new Pizza(["pepperoni", "olive], "large")
console.log(pepAndOlivePizza.size)

Expected Output: 0

### describe Pizza.prototype.priceTab();

#### test: method modifies Pizza.price value based upon topping and size values of Pizza

code: const pepAndOlivePizza = new Pizza(["pepperoni", "olive], "large")
pepAndOlivePizza.priceTab();
console.log(pepAndOlivePizza.price);

Expected Output = 14

#### test: pizza price is modified by topping values independent of size

code: const pizza1 = new Pizza(["escargot", "chevre"], "gargantuan");
pizza1.priceTab();
console.log(pizza1.price);

Expected Output = 46.38

#### test: pizza can take no toppings and will have base size price

code: const pizza2 = new Pizza (large);
pizza2.priceTab();
console.log(pizza2.price)

Expected Output = 13.99