function move(i,j,dir,inv = false) {

	if (i==6||i==-1) {return};
	if (j==6||j==-1) {return};
	
	board[i][j].flip(dir,inv)

	if (dir == 'right') {setTimeout(function(){move(i-1,j,"right",inv)},115)}
	else if (dir == 'left') {setTimeout(function(){move(i+1,j,"left",inv)},115)}
	else if (dir == 'up') {setTimeout(function(){move(i,j+1,"up",inv)},115)}
	else if (dir == 'down') {setTimeout(function(){move(i,j-1,"down",inv)},115)}
	else
	{
		setTimeout(function(){move(i-1,j,"right",inv)},115)
		setTimeout(function(){move(i+1,j,"left",inv)},115)
		setTimeout(function(){move(i,j+1,"up",inv)},115)
		setTimeout(function(){move(i,j-1,"down",inv)},115)
	};
}
