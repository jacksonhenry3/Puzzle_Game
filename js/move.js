function domove(i,j,dir,inv = false) {

	

	if (i==6||i==-1) {return};
	if (j==6||j==-1) {return};
	
	board[i][j].flip(dir,inv)

	if (dir == 'right') {setTimeout(function(){move(i-1,j,"right",inv)},100*Math.random()+115)}
	else if (dir == 'left') {setTimeout(function(){move(i+1,j,"left",inv)},100*Math.random()+115)}
	else if (dir == 'up') {setTimeout(function(){move(i,j+1,"up",inv)},100*Math.random()+115)}
	else if (dir == 'down') {setTimeout(function(){move(i,j-1,"down",inv)},100*Math.random()+115)}
	else
	{
		setTimeout(function(){move(i-1,j,"right",inv)},100*Math.random()+115)
		setTimeout(function(){move(i+1,j,"left",inv)},100*Math.random()+115)
		setTimeout(function(){move(i,j+1,"up",inv)},100*Math.random()+115)
		setTimeout(function(){move(i,j-1,"down",inv)},100*Math.random()+115)
	};
	check_win()


}

function check_win()
{
	var allred = true;
	for (var i = board.length - 1; i >= 0; i--) 
	{
		for (var j = board[i].length - 1; j >= 0; j--) 
		{
			allred = allred && (colors.indexOf(board[i][j].color)==0);
		}
	}

	if (allred) 
	{
		var buf;
		var request = new XMLHttpRequest();
		request.open('GET', "./win.mp3", true);
		request.responseType = 'arraybuffer';

		// Decode asynchronously
		request.onload = function() {
		context.decodeAudioData(request.response, function(buffer) {
		buf = buffer;
				var src = context.createBufferSource(); // creates a sound source
		src.buffer = buf;                    // tell the source which sound to play
		src.connect(gainNode);       // connect the source to the context's destination (the speakers)
		src.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
		// alert(source)
		}, onError);
		}
		request.send();
		level = level+1
		// alert("Welcome to level "+level)
		window.setTimeout(generate_puzzle,250)
	}
	// 


}

var move = domove