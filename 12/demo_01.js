funtion isWinner(player, others){
	var highest = 0;
	for (var i =0, n = others.lenth; i<n; i++){
		var player = others[i];
		if(player.score > highest){
			highest = player.score;
		}
	}
	return player.score > highest;
}