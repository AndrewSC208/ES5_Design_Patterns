// 3 comoons ways to create objects:
var newObject = {};
var newObject = Object.create(Object.prototype);
var newObject = new Object();

// 4 ways to assigne key/values to an object:

// ES3 Compatible Approches:

// 1. Dot Syntax:
// set:
newObject.someKey = 'Hello World';
// get:
var value = newObject.someKey;

// 2. Square Bracket Syntax:
// set:
newObject['someKey'] = 'Hello World';
// get:
var value = newObject['someKey'];

// ES5 Compatiable Approaches:

// 3. Object.defineProperty:
// set:
Object.defineProperty(newObject, 'someKey', {
	value: 'for more control',
	writable: true,
	enumerable: true,
	configurable: true
});

// Short-hand for the above:
var defineProp = function(obj, key, value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	Object.defineProperty(obj, key, config);
};

// To use, create a new empty "person" object:
var person = Object.create(Object.prototype);

// Set:
// Populate the object:
defineProp(person, 'car', 'delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);
// Output:
// Object {
// 	car: 'delorean',
// 	dateOfBirth: '1981',
// 	hasBeard: false
// }

// 4. Object.defineProperties
// set:
Object.defineProperties(newObject, {
	'someKey': {
		value: 'Hello',
		writable: true
	},
	'anotherKey': {
		value: 'Foo Bar',
		writable: false
	}
});

// GET:
// Getting prop's for 3 or 4 can be done using optons 1 or 2. 

// Basic Constructors:
function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return this.model + " has done " + this.miles + " miles";
	};
}

// Usage:
// crate a new instance of the car:
var civic = new Car('Honda Civic', 2009, 20000);

// output:
console.log(civic.toString());
// Main issues:
// 1. Inheritance is very difficult
// 2. function such as toString() are redifined for each of the new objects create using the Car constructor.


// Constructors With Prototypes:
function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}

// now the toString method will be shared with all instanciated car.
Car.prototype.toString = function() {
	return this.model + " has done " + this.miles " miles";
};

console.log(civic.toString());