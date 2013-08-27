// call() 和 apply() 的差別主要在於 call() 只接受一個參數，即 call(thisArg) ；而
//  apply() 接受兩個參數，即 apply(thisArg, argArray) 。透過 call() 和 apply() 
//  調用函數的主要目的，在於改變函數內部的 this 名稱所指涉的對象。對一般函數而言，當 
//  programmer 在函數內部使用 this 名稱時，指涉對象是 global object 。global object 
//  是運行環境中最頂層的個體，在瀏覽器環境中，global object 就是 window 此一個體。
//  但是 call() 和 apply() 可以改變 this 名稱所指涉的對象。
// http://blog.roodo.com/rocksaying/archives/2532303.html

// // demo1
// function hello(username){
//   return "hello, " + this.username + username;
// }

// var obj = {
//   hello: function(){ return "Hi, " + this.username},
//   username: "cyril"
// };
// // obj.hello = hello;
// console.log(hello.call(obj, 'asdf'));
// console.log(hello.apply(obj, ['asdf']));
// console.log(obj.hello());

// // demo2
// function sum(a, b)
// {
// 	return a+b;
// }
// console.log(sum(1, 3));
// console.log(sum(1, 3, 4));

// function sum2(ary)	//  利用陣列來增加參數的彈性
// {
// 	var sum = 0;
// 	for(var i=0, len=ary.length; i<len; i++)
// 		sum += ary[i];  // sum = sum + ary[i];
// 	return sum;
// }
// console.log(sum2([1, 3, 4, 5, 6, 7]));

// demo3
function sum3()	// 利用內建的arguments
{
	var sum = 0;
	for(var i=0, len=arguments.length; i<len; i++)
		sum += arguments[i];  // sum = sum + ary[i];
	return sum;
}

console.log(sum3(1, 3));
console.log(sum3(1, 3, 4, 5, 6, 7));

console.log(sum3.call(null, 1, 3));

console.log(sum3.apply(null, [1, 3]));