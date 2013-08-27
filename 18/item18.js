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
// 這邊要留意輸出的結果是hello, azole
// 因為這邊的this是obj2，並不是obj

// ===========================================================

// demo2-2: methods demo
// function hello(username){
// 	return "hello, " + this.username;
// }
// //var username = 'eden';
// //username = 'eden';
// console.log(hello('azole'));
// 因為hello中的this沒有被繫結，可能是繫結到global object或是undefined

// var obj = {
// 	hello: hello,
// 	username: "cyril"
// };
// console.log(obj.hello());	// 此時this就繫結到obj

// var obj2 = {
// 	hello: hello,
// 	username: "azole"
// };
// console.log(obj2.hello());	// 此時this繫結到obj2

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
//    //helper.call(this);	// 利用call來指定this是繫結到this (這個例子中是myObject)
// 	}
// };
// myObject.double();
// console.log(myObject.value);
// console.log(value);

// 解法2：利用一個that來儲存正確this，
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
// //eden.constructor = User;
// User.call(eden, 'eden', '大大');
// //        ^^^^^ 指定this
console.log(eden.toString());

// 補充：js已經有物件的定義方式了，為什麼還要用建構式的方式建立？
// azole: js是以原型(prototype)為基礎的語言，其實是沒有class的，所以就用函式來當來當class。
// 這邊要留意：class(類別)跟object(物件)不一樣！在js中所有東西都是物件，包括函式（函式物件）。
// 那到底為了什麼，需要用類別的方式來建立物件呢？ (以下參考：openhome.cc/Gossip/JavaScript/Constructor.html)
// 例如你有以下建立物件的需求：
// var p1 = { name : 'azole', age : 18};
// var p2 = { name : 'cyril', age : 22};
// var p3 = { name : 'eden', age : 28};
// ....
// 這些物件在建立的時候只是值不一樣，但所具有的屬性是一樣的，
// 那如果我們這樣做：
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// 那就可以用這個函式當成class來建立物件：
// var p1 = new Person('azole', 18);
// var p2 = new Person('cyril', 22);
// var p3 = new Person('eden', 28);
// 這樣不是方便許多嗎？

// 補充資料：
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
// ==> Every function in JavaScript is actually a Function object.
