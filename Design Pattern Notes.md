# JavaScript Design Pattern Notes:
These are all my notes, and examples from Addy Osmani's book:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/

## Categories of Design Patterns

###Creational Design Patterns:
1. Focus on handling obejct creation mechanisms where objects are created in a manner suitable for the situation we're working in.

Examples: Constructor, Factory, Abstract, Prototype, Singleton, and Builder

### Structural Design Patterns:
1. Concerned with object composition and typically identify simple ways to realize relationships between different objects. 
2. Help ensure that when one part of the a system changes, the entire structure of the system dosen't need to do the same.
3. They also assist in recasting parts of the system which don't fit a particular purpose into those that do.

Examples: Decorator, Facade, Flyweight, Adapter and Proxy

### Behavioral Design Patterns
1. Focus on improving or streamlining the communication between disparate objects.

Examples: Iterator, mediator, Observer and Visitor.

## A Note on js classes: Not es6 classes
- There will be patternes that refrence the concept of "Classes". JavaScript is a class-less language, however classes can be simulated using functions.

Below is an Example:

// A car "Class"
function Car (model) {
	this.model = model;
	this.color = 'Silver';
	this.year = '2012';

	this.getInfo = function() {
		return this.model + " " + this.year;
	};

}

// not instantiate the object:
var myCar = new Car('ford');

myCar.year = "2010";

console.log( myCar.getInfo());

##Creational: Based on the concept of creating an object.
  Class:
    Factory Method:	    This makes an instance of several derived classes based on interfaced data or events.
  Object:
    Abstract Factory:	  Creates an instance of several families of classes without detailing concrete classes.
    Builder:          	Separates object construction from its representation, always creates the same type of object.
    Prototype:	        A fully initialized instance used for copying or cloning.
    Singleton:        	A class with only a single instance with global access points.
 	 	 	 	 	 	 	 
##Structural: Based on the idea of building blocks of objects.
  Class:
    Adapter:  	Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
  Object
  	Adapter:  	Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
    Bridge:     Separates an object's interface from its implementation so the two can vary independently.
    Composite:	A structure of simple and composite objects which makes the total object more than just the sum of its parts.
    Decorator: 	Dynamically add alternate processing to objects.
    Facade:   	A single class that hides the complexity of an entire subsystem.
    Flyweight:	A fine-grained instance used for efficient sharing of information that is contained elsewhere.
    Proxy:    	A place holder object representing the true object.

##Behavioral: Based on the way objects play and work together.
	Class
  	Interpreter:	    A way to include language elements in an application to match the grammar of the intended language.
   	Template Method:	Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.
  Object
  	Chain of Responsibility:	A way of passing a request between a chain of objects to find the object that can handle the request.
    Command:	Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.
    Iterator:	Sequentially access the elements of a collection without knowing the inner workings of the collection.
    Mediator:	Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
    Memento:	Capture an object's internal state to be able to restore it later.
    Observer:	A way of notifying change to a number of classes to ensure consistency between the classes.
    State:	Alter an object's behavior when its state changes.
    Strategy:	Encapsulates an algorithm inside a class separating the selection from the implementation.
    Visitor:	Adds a new operation to a class without changing the class.

// ===** PATTERNS **=== //
The patterns we will be exploring in this section are the:

1. Constructor Pattern (done)
2. Module Pattern (done)
3. Revealing Module Pattern (done)
4. Singleton Pattern (done)
5. Observer Pattern (currently on)
6. Mediator Pattern
7. Prototype Pattern
8. Command Pattern
9. Facade Pattern
10. Factory PatternsMixin Pattern
11. Decorator Pattern
12. Flyweight Pattern

##1. The Constructor Pattern: Object constructors are used to create specific types of objects.
A. Object Creation: SEE "ConstructorPattern_pg1.js"
	1. 3 comoons ways to create objects: 

 		var newObject = {};
 		var newObject = Object.create(Object.prototype);
 		var newObject = new Object();
		
		// where the "object" constructor in the final example creates an object wrapper.

  2. Four ways to assign key / value pairs:
		A. Dot syntax
  	B. Square braket
		C. Object Define Property
		D. Object Define Properties

B. Basic Constructors:
	1. By prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.
	2. Inside a constructor, the keyword "this" references the new object that's being created.
	
	SEE "ConstructorPattern_pg1.js" for examples.

	Main issues:
		1. Inheritance is very difficult
		2. function such as toString() are redifined for each of the new objects create using the Car constructor.

C. Constructors With Prototypes:
	1. Functions, like almost all objects in JavaScript, contain a "prototype" object.
	2. When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object.
	3. Use the "prototype" object to create methods that all new objects will share. (See example).

##2. The Module Pattern:
Options for implementing modules:
	1. Object Literal Notation
	2. The Module Pattern
	3. AMD Modules
	4. CommonJS modules
	5. ECMAScript Harmony modules

1. OBJECT LITERAL NOTATION: 
		**An object is described as a set of comma-separated name/value pairs enclosed in curly braces ({}).

Example:
var myObjectLiteral = {
	variableKey: var,
	functionKey: function() {
	//..
	}
};

- Object literals don't require instantiation using the "new" operator but shouldn't be used at the start of a statement as the opening { may be interpreted as the beginning of a block.
- Outside of an object, new members may be added to it using assignment as follows

myModule.property = "someValue";

See more advanced Example in: ModulePattern_pg2.js

2. The Module Pattern: The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.
- used to emulate the concept of classes.

Privacy: The Module pattern encapsulates "privacy", state and organization using closures. 
	- Wraps a mix of public, private methods, and variables, protecting them from leaking out into the global scope. 
	- With this pattern, only a public API is returned, keeping everything else within the closure private.

Module Pattern Variations:
	- Import mixins: See example
	- Exports: See example

Advantages:
	- A lot cleaner for developers coming from an object-oriented background than the idea of true encapsulation, at least from a JavaScript perspective.
	- Supports private data - so, in the Module pattern, public parts of our code are able to touch the private parts, however the outside world is unable to touch the class's private parts (no laughing! Oh, and thanks to David Engfer for the joke).

Disadvantages:
	-Module pattern are that as we access both public and private members differently, when we wish to change visibility, we actually have to make changes to each place the member was used.
	- We also can't access private members in methods that are added to the object at a later point.

##3. The Revealing Module Pattern: Define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public

See Example: RevealingMoudlePattern_pg3.js

##4. The Singleton Pattern:
1. The singleton pattern is thus known becuase it restricts instantiation of a class to a single object.
2. Implemented by creating a class with a method that creates a new instance of the class if one dosen't exist. In the event of an instance already existing, it simply returns a reference to that object.

see example: SingletonPattern_pg4.js

Best use case:
	1. In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system.

Disadvantages:
	1. Whilst the Singleton has valid uses, often when we find ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.
	2. They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase. Singletons can be more difficult to test due to issues ranging from hidden dependencies, the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.

##5. The Observer Pattern:
	what: The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.
	how: When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

	Definition (From GoF Book: Design Patterns: Elements of Reusable Object-Oriented Software):
		"One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."

Implement the Observer pattern with the following components:
	
	Subject: maintains a list of observers, facilitates adding or removing observers
	
	Observer: provides a update interface for objects that need to be notified of a Subject's changes of state
	
	ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
	
	ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's

	See Example: ObserverPattern_pg5.js

	Steps for creating Observable:
		1. Model list of dependent Observers.
		2. Model the Subject and the ability to add, remove or notify observers on the observer list.
		3. Define a skeleton for creating new Observers.
		4. Define:
				-A button for adding new observable checkboxes to the page
				-A control checkbox which will act as a subject, notifying other checkboxes they should be checked
				-A container for the new checkboxes being added

### Differences Between The Observer And Publish/Subscribe Pattern
	1. The Observer pattern requires that the observer (or object) wishing to receive topic notifications must subscribe this interest to the object firing the event (the subject).

	2. The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application specific events which can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.

	3. This differs from the Observer pattern as it allows any subscriber implementing an appropriate event handler to register for and receive topic notifications broadcast by the publisher.

	See example: Observerpattern_pg5.js

	The general idea here is the promotion of loose coupling. Rather than single objects calling on the methods of other objects directly, they instead subscribe to a specific task or activity of another object and are notified when it occurs.

Advantages:
	1. The Observer and Publish/Subscribe patterns encourage us to think hard about the relationships between different parts of our application. They also help us identify what layers containing direct relationships which could instead be replaced with sets of subjects and observers. This effectively could be used to break down an application into smaller, more loosely coupled blocks to improve code management and potentials for re-use.

	2. Further motivation behind using the Observer pattern is where we need to maintain consistency between related objects without making classes tightly coupled. For example, when an object needs to be able to notify other objects without making assumptions regarding those objects.

	3. Dynamic relationships can exist between observers and subjects when using either pattern. This provides a great deal of flexibility which may not be as easy to implement when disparate parts of our application are tightly coupled.

	4. Whilst it may not always be the best solution to every problem, these patterns remain one of the best tools for designing decoupled systems and should be considered an important tool in any JavaScript developer's utility belt.

Disavantages:

	1. Consequently, some of the issues with these patterns actually stem from their main benefits. In Publish/Subscribe, by decoupling publishers from subscribers, it can sometimes become difficult to obtain guarantees that particular parts of our applications are functioning as we may expect. For example, publishers may make an assumption that one or more subscribers are listening to them. Say that we're using such an assumption to log or output errors regarding some application process. If the subscriber performing the logging crashes (or for some reason fails to function), the publisher won't have a way of seeing this due to the decoupled nature of the system.

	2. Another draw-back of the pattern is that subscribers are quite ignorant to the existence of each other and are blind to the cost of switching publishers. Due to the dynamic relationship between subscribers and publishers, the update dependency can be difficult to track.

### Publish/Subscribe Implementations

A new lib: https://github.com/addyosmani/pubsubz

	

	










		











