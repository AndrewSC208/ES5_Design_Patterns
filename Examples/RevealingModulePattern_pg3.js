// === REVEALING MODULE PATTERN === //
var myRevealingModule = (function() {
	var privateVar = 'Andrew',
			publicVar  = 'Hello there!'

	function privateFunction() {
		console.log("Name:" + privateVar);
	}

	function publicSetName(strName) {
		privateVar = strName;
	}

	function publicGetName() {
		privateFunction();
	}

	// Reveal public pointers to private function and properties
	return {
		setName: publicSetName,
		getName: publicGetname,
		greetings: publicVar
	};
})();
// use it!
myRevealingModule.setName( "Paul Kinlan" );