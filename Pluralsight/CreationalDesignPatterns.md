1. Constructor Pattern: Use to create new object with their own object scope.

function ObjectName(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
	this.toString = function() {
		return this.param1 + ' ' + this.param2;
	}
}

#The toString() is replicated everytime this object has been instanciated. Enters Prototypes:
Prototype: An encapsulation of properties that an object links to. So we would change the above to the following:

function ObjectName(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
}

ObjectName.prototype.toString = function() {
	return this.param1 + ' ' + this.param2;
}

# ES6 way:
'use strict'

class ObjectName {
	constructor(param1, param2) {
		this.param1 = param1;
		this.param2 = param2;
	}

	toString() {
		return this.param1 + ' ' + this.param2;
	}
}

# Factory Pattern: Used to simplify object creation.
1. Simplifies object creation
2. Creating differnet objects based on need
3. Repository Creation

# Singleton: Used to restrict an object to one instance of that object across the application.

