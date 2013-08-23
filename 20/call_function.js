// 使用call以自定的接收者來呼叫方法
// 正常情況下，一個函式和方法的接收著(receiver，也就是繫結到特殊關鍵字this的值)是由呼叫著所使用的語法而定的。特別是方法呼叫的語法,會把在其中查照著方法可行的物件,繫結到this。然而,有時候我們需要以自定的接受者來呼叫一個函式,而且此函式還是可能不是我們接受這物件的一個特性。當然，你能夠把這個方法加工件動作為一個新的特性：

// #call 方法可以用來代替另一個對象調用一個方法。call 方法可將一個函數的對象上下文從初始的上下文改變為由 thisObj 指定的新對象。 
// 如果沒有提供 thisObj 參數，那麼 Global 對象被用作 thisObj。 
//call跟apply很像

// function hello(username){
//   return "hello, " + this.username + username;
// }

// var obj = {
//   hello: function(){ return "Hi, " + this.username},
//   username: "cyril"
// };
// // obj.hello = hello;
// console.log(hello.call(obj, 'asdf'));
// console.log(obj.hello());

// obj.temporary = f; //如果obj.temporary已經存在了怎麼辦？
// var result = obj.temporary(arg1, arg2, arg3);
// delete obj.temporary;// //如果obj.temporary已經存在了怎麼辦？

// //以上是危險做法

// // 幸運的是，函式內建有一個call方法，可以來自定接受者，你只要透過call方法來調用一個函式：

// f.call(obj, arg1, arg2, arg3);

// // 他的行為類似直接的呼叫：
// f(arg1, arg2, arg3);

// // 只不過call的第一個引述明確的指出接受者物件。

// // 參考條款45

dict.hasOwnProperty = 1;
console.log(dict.hasOwnProperty(foo););

var hasOwnProperty={}.hasOwnProperty;
dict.foo=1;
delete dict.hasOwnProperty;
hasOwnProperty.call(dict, "foo");
hasOwnProperty.call(dict, "hasOwnProperty");


var table ={
 entires: [],
 addEntry: function(key, value){
   this.entires.push({key: key, valur: valur});
 },
 forEach: function (f,thisArg) {
   var entires=this.entires;
   for(var i=0, n=entires.length;i<n;i++){
     var entry = entry[i];
     f.call(thisArg, entry.key, entry.value, i);
   }
 }
};
