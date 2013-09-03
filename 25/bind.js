
var buffer={
	entries:[],
	add: function(s){		 
		this.entries.push(s);
	},
	concat:function(){
		return this.entries.join("");
	}
};
// // 方法零
// var source=["867","-","5309"];
// console.log(source.forEach(buffer.add));

// 方法一
// var source=["856","-","5396"];
// source.forEach(buffer.add, buffer);
// console.log(buffer.concat());

// 方法二
// var source=["856","-","5396"];
// source.forEach(function(s){
// 	buffer.add(s);
// });
// console.log(buffer.concat());

// 使用bind
var source=["856","-","5396"];
source.forEach(buffer.add.bind(buffer));
console.log(buffer.concat());

// 結論
buffer.add != buffer.add.bind(buffer);