// // 避免使用eval來建立區域變數

// // demo01
// function test (x) {
// 	eval("var y=x;"); // 動態繫結(dynamic binding)
// 	return y;
// }
// var result = test("hello");
// console.log(result);
// // demo02
// var y="global";
// function test (x) {
// 	if(x){
// 		eval("var y= 'local';"); // 動態繫結(dynamic binding)
// 	}
// 	return y;
// }
// console.log(test(true));
// console.log(y);
// console.log(test(false)); 
// // // demo03
// var y="global";
// function test (src) {
// 	eval(src); //可能會動態繫結
// 	return y;
// }
// console.log(test("var y='local';"));
// console.log(test("var z='local';"));


// //demo04
var y="global";
function test (src) {
	var a=10;
	//(function (){
	if(src) {
		var b = 5;
	}

	//	eval(src);//可能會動態繫結
	//})();
	console.log(a);
	return y;
}
test(true); //"var y = 'local';");
test(false); //"var z = 'local';");

// 請記住
// 避免使用eval建立會汙染呼叫者範疇(caller's  scope)的變數。
// 可能的話，優先選用間接的eval(indirect eval)，而非直接的eval。
