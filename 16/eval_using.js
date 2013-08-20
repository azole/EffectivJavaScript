// 避免使用eval來建立區域變數

// demo01
function test (x) {
	eval("var y=x;"); // 動態繫結(dynamic binding)
	return y;
}
test("hello");

// demo02
var y="global";
function test (x) {
	if(x){
		eval("var y= 'local';"); // 動態繫結(dynamic binding)
	}
	return y;
}
test(true);
test(false); 

// demo03
var y="global";
function test (src) {
	eval(src); //可能會動態繫結
	return y;
}
test("var y='local';");
test("var z='local';");

//demo04
var y="global";
function test (src) {
	eval(src);//可能會動態繫結
	return y;
}
test("var y = 'local';");
test("var z = 'local';");

// 請記住
// 避免使用eval建立會汙染呼叫者範疇(caller's  scope)的變數。
// 可能的話，優先選用間接的eval(indirect eval)，而非直接的eval。
