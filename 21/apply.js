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