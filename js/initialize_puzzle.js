var settings_button = document.getElementById('Settings')
var settings = document.getElementById('settings')
var settings_shown = false
window.onclick = function(){

	// init_sound()
backgroundTrack = new Audio("Ambient.mp3");
backgroundTrack.volume = .1;
backgroundTrack.loop = true;
backgroundTrack.currentTime = Math.random()*100;



settings_button.onclick = function(){togglee_settings()}

function togglee_settings() {
	if (settings_shown) {settings.style.transform = "scaleY(0)";}
	if (!settings_shown) {settings.style.transform = "scaleY(1)";}
	settings_shown = ! settings_shown
		
		// self.element.style.boxShadow = ((-1)**self.Hflip_counter*.3)+"vmin "+((-1)**self.Vflip_counter*.3)+"vmin 0px 0px";

}

 // backgroundTrack.play();
 window.onclick = function()
 {
 	// alert('a')
 	
 }
 

};

function generate_puzzle()
{
	for (var i = 6 - 1; i >= 0; i--) {
	I = Math.floor(Math.random()*6)
	J = Math.floor(Math.random()*6)
	move(I,J,"",true)
};
}

document.getElementById('Start').onclick = generate_puzzle

$('#Start').on('click', function() {
    var body = $("html, body");
    body.stop().animate({scrollTop:$('#game').offset().top}, 1000);
})

window.addEventListener('click', function(e){   
  if (settings_button.contains(e.target)){
    // alert('contained')
  }
  else if (settings.contains(e.target)){
    // alert('contained')
  }
   else{

    if (settings_shown) {settings.style.transform = "scaleY(0)";}
	// if (!settings_shown) {settings.style.transform = "scaleY(1)";}
	settings_shown = ! settings_shown
  }
});