var audio_list = [];

for (var i = 15 - 1; i >= 0; i--) {
	var a = new Audio('click1.wav')
	a.volume = 0.1
	audio_list.push(a)
}

for (var i = 15 - 1; i >= 0; i--) {
	var a = new Audio('click2.wav')
	a.volume = 0.1
	audio_list.push(a)
}

for (var i = 15 - 1; i >= 0; i--) {
	var a = new Audio('click3.wav')
	a.volume = 0.1
	audio_list.push(a)
}

for (var i = 15 - 1; i >= 0; i--) {
	var a = new Audio('click4.wav')
	a.volume = 0.1
	audio_list.push(a)
}

function click() {
	chosen_click = random_choice(audio_list);
	chosen_click.volume = Math.random()/10+.25/50
	setTimeout(function(){chosen_click.play()},Math.random()*25);
}