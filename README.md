# Hungry Hyram's Pizza Palace

### Created by Noah Lundquist in August of 2022

## Links

* [Repository](https://github.com/nalundquist/pizzaparlor)
* [Webpage](https://nalundquist.github.io/pizzaparlor)

## Description

Website for your favorite local pizza parlor.  Makes use of constructors and prototype methods to display orders and price totals.

## Features

* Price is calculated based on size/number of toppings
* User choices are reflected at end of transaction
* Escargot
* A man named "Hyram" owns this parlor

## Technologies Used

* Built in VS Code (v.1.70.1) using the following languages:
	* HTML
	* CSS
	* Javascript

* Includes the ["Mulish" font](https://fonts.google.com/specimen/Mulish) sourced through [Google Fonts](https://fonts.google.com) and created by Vernon Adams, Jacques Le Bailly, and Cyreal

* Tested in the following browsers:
	* Google Chrome (v.104.0)
	* Firefox (v.103.0.2)
	* Microsoft Edge (v.104.0)

## Installation

* Download [Git Bash](https://git-scm.com/downloads)
* Input the following into Git Bash to clone this repository onto your computer:

		>git clone https://github.com/nalundquist/pizzaparlor

* Enter the cloned project folder "pizzaparlor" and open "index.html" in browser.

## Known Bugs

* None at this point

## License

Licensed under [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

## TDD Log


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

code: const pizza2 = new Pizza ("large");
pizza2.priceTab();
console.log(pizza2.price)

Expected Output = 13.99