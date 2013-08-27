// function callMethod(obj, method) {
//   //arguments.shift();  
//   var shift = [].shift;
//   console.log(arguments);  
//   shift.call(arguments);
//   shift.call(arguments);
//   console.log(arguments);  
//   console.log('obj'+obj);
//   console.log('method'+method);
//   //return obj[method].apply(obj, arguments);
// };
// var obj = {
//   add: function(x, y) {
//     return x + y;
//   }
// };
// callMethod(obj, "add", 17, 25);

// function strict (x) {
//   "use strict";
//   arguments[0] = "modified";
//   console.log(x);
//   return x === arguments[0];  // unmodified === modifed
// };
// function nonstrict (x) {
//   arguments[0] = "modified";
//   console.log(x);
//   return x === arguments[0];  // unmodified === modifed
// };
// console.log(strict("unmodified"));// false
// console.log(nonstrict("unmodified"));// true

// function callMethod (obj, method) {
//   var args = [].slice.call(arguments, 2);
//   console.log(arguments);
//   console.log(args);
//   console.log(obj);
//   return obj[method].apply(obj, args);
// };
// var obj = {
//   add: function(x, y) {
//     return x + y;
//   }
// };
// console.log(callMethod(obj, "add", 17, 25));

"use strict";
function test(ary)
{
  ary[0] = 'azole';
}
var a = ['cyril', 'eden'];
test(a);
console.log(a);