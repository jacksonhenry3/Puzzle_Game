// Kallan Berglund with Jackson Henry Rainbow Puzzle
function Cascade (i,j) {
	Gameboard[i,j].flip()
	for (var a = i - 1; a >= 0; a--) {
		Gameboard[a,j].flip()
	}
	for (var a = 5; a >= i+1; a--) {
		Gameboard[a,j].flip()
	}
	for (var b = j - 1; b >= 0; b--) {
		Gameboard[i,b].flip()
	}
	for (var b = 5; b >= j+1; b--) {
		Gameboard[i,b].flip()
	}
}