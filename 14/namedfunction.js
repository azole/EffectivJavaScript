var constructor = function(){return null};
var f = function f(){
	return constructor();
};

console.log(f());

// var f = function (i){
// 	console.log(i);
// 	if(i<=1)
// 		return 11;
// 	else
// 		return f(--i);
// };
// console.log(f(5));
// //console.log(g());	// 在標準環境下是不合法的
