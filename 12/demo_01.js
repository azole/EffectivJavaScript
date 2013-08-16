function isWinner(player, others){
	console.log(1, player);
	var highest = 0;

	for (var i =0, n = others.length; i<n; i++){
		var player = others[i];
		console.log(2, player);
		if(player.score > highest){
			highest = player.score;
		}
	}
	
	console.log(3, player);
	console.log(highest);
	return player.score > highest;
}

var player = {score:10};
var others = [{score:20},{score:1}];
var result = isWinner(player, others);
console.log(result);