// function f() {return 'global';};
// function test(x) {
//   function f() {return 'local';};
//   var result = [];
//   if (x) {
//     result.push(f());
//   };
//   result.push(f());
//   return result;
// };
// console.log(test(false));// [ 'local' ]
// console.log(test(true));// [ 'local', 'local' ]

// function f() {return 'global';};
// function test(x) {
//   var result = [];
//   if (x) {
//     function f() {return 'local';};// 有關
//     result.push(f());
//   };
//   result.push(f());
//   return result;
// };
// console.log(test(false));// [ 'local' ]
// console.log(test(true));// [ 'local', 'local' ]

// 'use strict';
// function f() {return 'global';};
// function test(x) {
//   var result = [];
//   if (x) {
//     function f() {return 'local';};// error(使用嚴謹模式，不允許一般的block內新增具名函式)
//     result.push(f());
//   };
//   result.push(f());
//   return result;
// };
// console.log(test(false));
// console.log(test(true));

// 補充
// function f() {return 'global';};
// function test(x) {
//   var result = [];
//   if (x) {
//     function f() {
//       'use strict';// strict mode 只會影響他所在的 scope (不清楚 strict 影響的區塊是 函式區塊 還是  一般的區塊)
//       return 'local';
//     };
//     result.push(f());
//   };
//   result.push(f());
//   return result;
// };
// console.log(test(false));// [ 'local' ]
// console.log(test(true));// [ 'local', 'local' ]

//'use strict';
// function f() {return 'global';};
// function test(x) {
//   var g = f,
//   result = [];
//   if (x) {
//     g = function() {return 'local';};// assign
//     result.push(g());
//   };
//   result.push(g());
//   return result;
// };
// console.log(test(false));// [ 'global' ]
// console.log(test(true));// [ 'local', 'local' ]

//結論:
//總是將宣告放在最外層
//用 var 來宣告任何變數, 函式