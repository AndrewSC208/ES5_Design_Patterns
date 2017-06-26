// Object Literal:
var myObjectLiteral = {
	variableKey: var,
	functionKey: function() {
		//..
	}
};

// complete example of a module defined using object literal notation:
var myModule = {
	myProperty: 'someValue',
	// object literals can contain properties and methods.
	// defin a further object for module config:
	myConfig: {
		useCaching: true,
		language: 'en'
	},

	// Basic Method:
	saySomething: function() {
		console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestias facilis eum tempora ea, ad quasi. Error quod consectetur fugiat sunt in soluta mollitia ex, repellendus veritatis illo, magni voluptatum?");
	},

	// Output value based on current config:
	reportMyConfig: function() {
		console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
	}

	// Override the current config:
	updateMyConfig: function(newConfig) {
		if( typeof newConfig === "object") {
			this.myConfig = newConfig;
			console.log(this.myConfig.language);
		}
	};
}

// calls saySomthing function resulting in the action of printing text.
myModule.saySomething();

// outputs: Caching is: enabled 
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
	language: 'fr',
	useCaching: false
});

// outputs: Caching is: disabled
myModule.reportMyConfig();

// === Basic Module using the module pattern === //
var testModule = (function() {
	var counter = 0;

	return {
		incrementCounter: function() {
			return counter++;
		},

		resetCounter: function() {
			console.log('counter value prior to reset: ' + counter);
			counter = 0;
		}
	};
})();

// Incement our counter:
testModule.incrementCounter();

// Check the counter value and reset
testModule.resetCounter();

// === Template for getting started with modules === //
var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    }
  };
 
})();

// === Basket Example === //
var basketModule = (function () {
 
  // privates
  var basket = [];
 
  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }
 
  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
    // Public alias to a private function
    doSomething: doSomethingPrivate,
    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
          p = 0;
 
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  };
})();

// using the basket module:
// basketModule returns an object with a public API we can use
basketModule.addItem({
  item: "bread",
  price: 0.5
});
basketModule.addItem({
  item: "butter",
  price: 0.3
});
// Outputs: 2
console.log( basketModule.getItemCount() );
// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work: 
// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );
 
// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log( basket );

// === IMPORT === //
// Global module
var myModule = (function ( jQ, _ ) {
    function privateMethod1(){
        jQ(".container").html("test");
    }
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
// Pull in jQuery and Underscore
})( jQuery, _ );

myModule.publicMethod();

// === EXPORT === //
// Global module
var myModule = (function () {
  // Module object
  var module = {},
    	privateVariable = "Hello World";
 
  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };
 
  return module;
})();

// === JQUERY VERSION === //
// In the following example, a library function is defined which declares a new library and automatically binds up the init function to document.ready when new libraries (ie. modules) are created.
function library( module ) {
 
  $( function() {
    if ( module.init ) {
      module.init();
    }
  });
 
  return module;
}
 
var myLibrary = library(function () {
 
  return {
    init: function () {
      // module implementation
    }
  };
}());










