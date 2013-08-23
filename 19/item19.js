'use strict';

// #1
// var temp = [40, 100, 1, 5, 25, 10];

// function compareNumbers(x, y) {
//   return x - y;
// };
// console.log('只使用sort()');// 字母排列
// console.log(temp.sort());// [ 1, 10, 100, 25, 40, 5 ]
// console.log('\n利用callback function');// 數字排列
// console.log(temp.sort(compareNumbers));// [ 1, 5, 10, 25, 40, 100 ]

// #2
// var names = ["Fred", "Wilma", "Pebbles"];
// var upper1 = [];
// for (var i = 0, n = names.length; i < n; i++) {
//   upper1[i] = names[i].toUpperCase();
// };
// console.log(upper1);// [ 'FRED', 'WILMA', 'PEBBLES' ]

// var upper2 = names.map(function(name) {
//   return name.toUpperCase();
// });
// console.log(upper2);// [ 'FRED', 'WILMA', 'PEBBLES' ]

// #3
// var aIndex = 'abc'.charCodeAt(0),// 97
//   alphabet = '',
//   i = 0;
// for (i = 0; i < 26; i++) {
//   alphabet += String.fromCharCode(aIndex + i);
// };
// console.log(alphabet);// abcdefghijklmnopqrstuvwxyz

// var digits = '';
// for (i = 0; i < 10; i++) {
//   digits += i;
// };
// console.log(digits);// 0123456789

// var random = '';
// for (i = 0; i < 8; i++) {
//   random += String.fromCharCode(Math.floor(Math.random()*26)+aIndex);
// };
// console.log(random);// msvxokye(每次不同結果)

// #4
function bulidString (n, callback) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += callback(i);
  };
  return result;
};

var aIndex = 'a'.charCodeAt(0);
var alphabet = bulidString(26, function(i) {
  return String.fromCharCode(aIndex + i);
});
console.log(alphabet);

var digits = bulidString(10, function(i) {
  return i;
});
console.log(digits);

var random = bulidString(8, function(i) {
  return String.fromCharCode(Math.floor(Math.random()*26)+aIndex);
});
console.log(random);