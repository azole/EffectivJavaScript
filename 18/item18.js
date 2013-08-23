// demo1: function call
// function hello(username){
// 	return "hello, " + username;
// }

// console.log(hello("eden"));

// ===========================================================

// demo2-1: methods
// var obj = {
// 	hello: function(){
// 		return "hello, " + this.username;
// 	},
// 	username: "cyril"
// };

// console.log(obj.hello());

// var obj2 = {
// 	hello: obj.hello,
// 	username: "azole"
// };
// console.log(obj2.hello());

// ===========================================================

// demo2-2: methods demo
// function hello(username){
// 	return "hello, " + this.username;
// }
// // //var username = 'eden';
// // //username = 'eden';
// // console.log(hello('azole'));

// var obj = {
// 	hello: hello,
// 	username: "cyril"
// };
// console.log(obj.hello());

// var obj2 = {
// 	hello: hello,
// 	username: "azole"
// };
// console.log(obj2.hello());

// ===========================================================

// demo2-3: 函式呼叫模式的補充 from <JavaScript: The Good Parts>
// var value = 7;
// // value = 7;
// myObject = {
// 	value: 2,
// 	double: function(){
//     console.log('double:', this.value);
// 		var helper = function(){
// 			console.log('helper:', this.value);
// 			this.value = this.value + this.value;
// 			//因為helper是用函式的方式呼叫，所以這邊this是繫結到global object
// 		};
// 		helper();
//    //解法1
//    //helper.call(this);
// 	}
// };
// myObject.double();
// console.log(myObject.value);
// console.log(value);

// 解法：利用一個that來儲存正確this，
//var value = 7;
// value = 7;
// myObject = {
// 	value: 2,
// 	double: function(){
// 		// 把正確的this儲存起來給函式使用
// 		var that = this;  // 解法2
// 		var helper = function(){
// 			that.value = that.value + that.value;
// 		};
// 		helper();
// 	}
// };
// myObject.double();
// console.log(myObject.value);
// console.log(value);

// ===========================================================

// demo3-1: constructor 
// function User(name, title) {
// 	this.name = name;
// 	this.title = title;
// 	this.toString = function(){
// 		return this.name + this.title;
// 	};
// }

// var eden = new User('eden', '大大');  // 建構子呼叫
// //console.log(eden.name + eden.title);
// console.log(eden.toString()); // 方法呼叫

// ===========================================================

// demo3-2: constructor的補充 from <JavaScript: The Good Parts>
// var obj = new NewObject();
// 等同於
// var obj = {};	// 建立一個空物件
// obj.constructor = NewObject;	// 把proto指好
// NewObject.call(obj);	// 把NewObject這個函式裡的this指定成obj
//
// 所以demo3-1中的new等同於：
// function User(name, title) {
//   this.name = name;
//   this.title = title;
// }
// User.prototype.toString = function(){
//     return this.name + this.title;
// };

// var eden = {};
// eden.__proto__ = User.prototype;
// // eden.constructor = User;
// User.call(eden, 'eden', '大大');
// //        ^^^^^ 指定this
// console.log(eden.toString());
