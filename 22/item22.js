// demo1 - 對arguments簡單的講解
function add(a, b){
	//console.log(arguments);
	return a+b;
}
console.log(add(1, 3));
//console.log(add(1, 3, 4));


//---------------------------------------------------
// demo2 
// function sum_fix(ary)	// 利用元數固定(fixed-arity)來實作可變參數函式
// {
// 	var sum = 0;
// 	for(var i=0, len=ary.length; i<len; i++)
// 		sum += ary[i];  // sum = sum + ary[i];
// 	return sum;
// }

// console.log(sum_fix([1,2,3,4,5]));

// function sum_arg()	// 利用內建的arguments來實作可變參數函式 (元數可變版)
// {
// 	var sum = 0;
// 	for(var i=0, len=arguments.length; i<len; i++)
// 		sum += arguments[i];  // sum = sum + ary[i];
// 	return sum;
// }

// console.log(sum_arg(1,2,3,4,5));

// function sum_arg2()	// 利用元數固定的版本來實作元數可變的可變參數函式
// {
// 	return sum_fix(arguments);
// }
// console.log(sum_arg2(1,2,3,4,5));