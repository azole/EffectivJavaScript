var x = 'outer';
(function() {
	var x = 'inner';
	eval('console.log("direct call: " + x)');
	(1, eval)('console.log("indirect call: " + x)');
})();