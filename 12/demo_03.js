function test () {
	var x="var",result=[];
	result.push(x);
	try{
		x = "try";
		throw "exception";
	} catch (x){	
		x="catch";
	}
	result.push(x);
	return result;
}
x=5;
console.log(test());
console.log(x);