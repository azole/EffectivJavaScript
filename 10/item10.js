var Widget = function() {
  // 建立prototype
  this.setBackground = function(param) {};
  this.setForeground = function(param) {};
  this.setText = function(param) {};
  this.show = function() {};
};

// function status(info) {
//   var widget = new Widget();
//   with(widget) {
//     // 逐一找 widget prototype
//     setBackground("blue"); //widget.setBackground("blue");
//     setForeground("white"); //widget.setForeground("white");
//     setText("Status: " + info); //widget.setText("Status: " + info);
//     console.log("Status: " + info); //widget.console.log(widget.info); -> console.log(widget.info);
//     //                         ^- doesn't exist "widget.console.log"
//     show(); //widget.show();
//   }
// }
// status("connnecting");
// Widget.prototype.info = "[[widget info]]"; //動態新增 Widget 屬性
// status("connnectied");

// function demo(x) {
//   with(Math) {
//     console.log(abs(x));
//   }
// }
// Math.x = 0;
// demo(-1);

// 若真要簡化程式，請這樣用
function status(info) {
  var w = new Widget();
  w.setBackground("blue");
  w.setForeground("white");
  w.setText("Status: " + info);
  console.log("Status: " + info);
  w.show();
}
status("connnecting");
Widget.prototype.info = "[[widget info]]";
status("connnectied");

function demo() {
  var abs = Math.abs;
  console.log(abs(-1));
}
Math.x = 0;
demo();
