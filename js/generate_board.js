var board;
gen_board()
function gen_board()
{
	board = new Array(6)

for (var i = 0; i < board.length; i++) { 
    board[i] = new Array(6); 
} 

for (var III = board.length - 1; III >= 0; III--) {
	for (var JJJ = board.length - 1; JJJ >= 0; JJJ--) {
		// board[III][JJJ] = new square(III,JJJ,colors[5-III])
		board[III][JJJ] = new square(III,JJJ,colors[0])
		// board[III][JJJ].element.style.width = squarewidth+"px"
		board[III][JJJ].element.style.height = board[III][JJJ].element.offsetWidth+"px"
		board[III][JJJ].text_element.style.lineHeight = board[III][JJJ].element.offsetWidth+"px"
		// board[III][JJJ].element.style.top = 100*III
		// board[III][JJJ].element.style.left = 100*JJJ
	}
}

}


function reportWindowSize() {
  for (var III = board.length - 1; III >= 0; III--) {
	for (var JJJ = board.length - 1; JJJ >= 0; JJJ--) {
		// board[III][JJJ] = new square(III,JJJ,colors[5-III])
		// board[III][JJJ] = new square(III,JJJ,colors[5])
		// board[III][JJJ].element.style.width = squarewidth+"px"
		board[III][JJJ].element.style.height = board[III][JJJ].element.offsetWidth+"px"
		board[III][JJJ].text_element.style.lineHeight = board[III][JJJ].element.offsetWidth+"px"
		// board[III][JJJ].element.style.top = 100*III
		// board[III][JJJ].element.style.left = 100*JJJ
	}
}
}

window.onresize = reportWindowSize;

function redraw_all()
{
	for (var i = board.length - 1; i >= 0; i--) {
		for (var j = board[i].length - 1; j >= 0; j--) {
		board[i][j].redraw()
	}
	}
}