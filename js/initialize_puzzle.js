
setTimeout(function(){
for (var i = 4 - 1; i >= 0; i--) {
	I = Math.floor(Math.random()*6)
	J = Math.floor(Math.random()*6)
	move(I,J,"",true)
};
backgroundTrack = new Audio("Ambient.mp3");
backgroundTrack.volume = .02;
backgroundTrack.loop = true;
backgroundTrack.currentTime = Math.random()*100;

 backgroundTrack.play();
 },1000)