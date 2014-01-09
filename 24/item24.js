// #1
// function values() {
//   var i = 0,
//     n = arguments.length;
//     console.info(arguments);
//   return {
//     hasNext: function() {
//       return i < n;
//     },
//     next: function() {
//       if (i >= n) {
//         throw new Error("end of iterator");
//       };
//       console.info(arguments);
//       return arguments[i++];
//     }
//   };
// };
// var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// 預期
// it.next(); // 1
// it.next(); // 4
// it.next(); // 1
// 實際
// it.next(); // undefined
// it.next(); // undefined
// it.next(); // undefined

// #2
function values() {
  var i = 0,
    n = arguments.length;
    a = arguments;
    console.info(a);
  return {
    hasNext: function() {
      return i < n;
    },
    next: function() {
      if (i >= n) {
        throw new Error("end of iterator");
      };
      return a[i++];
    }
  };
};
var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
console.info(it.next()); // 1
console.info(it.next()); // 4
console.info(it.next()); // 1