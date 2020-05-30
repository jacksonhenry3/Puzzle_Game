var audio_list = ['click1.wav','click2.wav','click3.wav','click4.wav'];




function click() {
	
	var chosen_click = random_choice(audio_list);
	var click_element = new Audio(chosen_click)
	click_element.volume = Math.random()/30+.1
	click_element.playbackRate = Math.random()/5+1
	setTimeout(function(){click_element.play()},Math.random()*50);
}