// Test V1: 可以參考外部變數，連回傳後也都還可以

// function OutFunction(){
//   var outStr = "outter ";
//   function make(inStr){
//     return outStr + inStr;
//   }
//   return make;
// }

// var f = OutFunction();
// console.log(f('AA'));
// console.log(f('BB'));
// console.log(f('CC'));

//--------------------------------------------------------------------------

// Test V2: 可以直接簡寫成這樣

// function OutFunction(outP){  
//   return function(inStr){    
//     return outP + inStr;
//   } 
// }

// var f1 = OutFunction('Azole');
// var f2 = OutFunction('Cyril');
// console.log(f1(' HI'));
// console.log(f2(' HELLO'));

//--------------------------------------------------------------------------
// Test V3: 注意，是"參考"

function OutFunction(outP){  
  var outStr = 'Hi, ';
  return function(inStr){  
    outStr = outStr + '1';  
    return outStr + inStr;
  }  
}

var f1 = OutFunction('Azole');
var f2 = OutFunction('Cyril');
console.log(f1(' HI'));
console.log(f2(' HELLO'));
console.log(f1(' HI'));   // 這邊的outStr會多一個1 --> 上一個加的

//--------------------------------------------------------------------------
// 因為是"參考"，這也就是為什麼下面的範例中
// 最後alert出來的都是3 (若有三個button)
// var button = document.getElementsByTagName("button");
// function init(){
//     for( var i=0; i<button.length; i++){
//         button[i].onclick = function(){
//             alert(i);
//         }
//     }
// }
// init();

//----------------------------------------------
// 改成傳值進去 --> 沒問題了，會正確alert出0, 1, 2
//
// button[i].onclick = function(i){
//     return function(e){
//         alert(i);
//     };
// }(i);


//----------------------------------------------
// 把傳值的變數換成不同名稱，就更清楚
//
// button[i].onclick = function(a){
//     return function(e){
//         alert(a);	// 這裡如果還是放i的話，一樣也會是3
//     };
// }(i);


//----------------------------------------------
// 改成傳物件--> 又是傳參考，所以alert出來的永遠是2
//
// function init(){
//     var obj = {p:-1};
//     for( var i=0; i<button.length; i++){                   
//         obj.p = i;
//         button[i].onclick = function(a){
//             return function(e){
//                 alert(a.p);
//             };
//         }(obj);
//     }
// }
// init();