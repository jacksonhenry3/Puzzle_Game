
setTimeout(function(){
	for (var i = 6 - 1; i >= 0; i--) {
	for (var j = 6 - 1; j >= 0; j --) {
	move(i,j,"",true)
	// move(i,j,"",false)
}
}

for (var i = 6 - 1; i >= 0; i--) {
	I = Math.floor(Math.random()*6)
	J = Math.floor(Math.random()*6)
	move(I,J,"",true)
};


backgroundTrack = new Audio("Ambient.mp3");
backgroundTrack.volume = .1;
backgroundTrack.loop = true;
backgroundTrack.currentTime = Math.random()*100;

 backgroundTrack.play();
 },0)