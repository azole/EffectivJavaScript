// function wrapElements(a) {
//   var result = [], i, n;
//   n = a.length;
//   for (i = 0; i < n; i++) {
//     result[i] = function(){ return a[i];};
//     //     ^-value                   ^-reference (i 為參考) 
//   };
//   return result;
// }
// var wrapped = wrapElements([10, 20, 30, 40, 50]);
// var f = wrapped[0];
// console.log(f());

// function wrapElements(a) {
//   var result = [];
//   n = a.length;
//   for (i = 0; i < n; i++) {
//     (function() {
//       var j = i;
//       //      ^-value
//       result[i] = function() {return a[j];};
//       //                               ^-reference (因為 j 為重新 var 過)
//     })();
//   };
//   return result;
// }
// var wrapped = wrapElements([10, 20, 30, 40, 50]);
// var f = wrapped[0];
// console.log(f());

// IIFE
function wrapElements(a) {
  var result = [];
  n = a.length;
  for (i = 0; i < n; i++) {
    (function(j) {
      result[i] = function() {return a[j];};     
    })(i);	// pass by value 
  };
  return result;
}
var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log(f());
