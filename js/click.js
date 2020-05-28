var audio_list = ['click1.wav','click2.wav','click3.wav','click4.wav'];

click_element = new Audio()


function click() {
	chosen_click = random_choice(audio_list);
	click_element.setAttribute('src',chosen_click);
	click_element.load();
	setTimeout(function(){click_element.play()},Math.random()*0);
}