function move(i,j,dir) {

	if (i==6||i==-1) {return};
	if (j==6||j==-1) {return};
	
	Gameboard[i][j].flip(dir)

	if (dir == 'right') {setTimeout(function(){move(i-1,j,"right")},100)}
	else if (dir == 'left') {setTimeout(function(){move(i+1,j,"left")},100)}
	else if (dir == 'up') {setTimeout(function(){move(i,j+1,"up")},100)}
	else if (dir == 'down') {setTimeout(function(){move(i,j-1,"down")},100)}
	else
	{
		setTimeout(function(){move(i-1,j,"right")},100)
		setTimeout(function(){move(i+1,j,"left")},100)
		setTimeout(function(){move(i,j+1,"up")},100)
		setTimeout(function(){move(i,j-1,"down")},100)
	};
}





Gameboard = new Array(6)

for (var i = 0; i < Gameboard.length; i++) { 
    Gameboard[i] = new Array(6); 
} 


for (var III = Gameboard.length - 1; III >= 0; III--) {
	for (var JJJ = Gameboard.length - 1; JJJ >= 0; JJJ--) {
		Gameboard[III][JJJ] = new square(III,JJJ,colors[5-III])
		// Gameboard[III][JJJ] = new square(III,JJJ,colors[5])
	}
}


setTimeout(function(){
for (var i = 4 - 1; i >= 0; i--) {
	I = Math.floor(Math.random()*6)
	J = Math.floor(Math.random()*6)
	// Cascade(I,J)
	// Cascade(I,J)
	// Cascade(I,J)
	// Cascade(I,J)
	// Cascade(I,J)
};
 backgroundTrack.play();
 },1000)