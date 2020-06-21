var settings_button = document.getElementById('Settings')
var settings = document.getElementById('settings')
var instructions_button = document.getElementById('Instructions')
var instructions = document.getElementById('instructions')
var settings_shown = false
var instructions_shown = false
var level = 1.;
function toggle_settings() {
	if (settings_shown) {settings.style.transform = "scaleY(0) translate(-50%, -50%)";}
	if (!settings_shown) {settings.style.transform = "scaleY(1) translate(-50%, -50%)";}
	settings_shown = ! settings_shown
		
		// self.element.style.boxShadow = ((-1)**self.Hflip_counter*.3)+"vmin "+((-1)**self.Vflip_counter*.3)+"vmin 0px 0px";

}

function toggle_instructions() {
	if (instructions_shown) {instructions.style.transform = "scaleY(0) translate(-50%, -50%)";}
	if (!instructions_shown) {instructions.style.transform = "scaleY(1) translate(-50%, -50%)";}
	instructions_shown = ! instructions_shown
		
		// self.element.style.boxShadow = ((-1)**self.Hflip_counter*.3)+"vmin "+((-1)**self.Vflip_counter*.3)+"vmin 0px 0px";

}

settings_button.onclick = function(){toggle_settings()}
instructions_button.onclick = function(){toggle_instructions()}

window.onclick = function(){

	init_sound()
backgroundTrack = new Audio("Ambient.mp3");
backgroundTrack.volume = parseFloat(document.getElementById("click_volume").value);
backgroundTrack.loop = true;
backgroundTrack.currentTime = Math.random()*100;
backgroundTrack.play();






 
 window.onclick = function()
 {
 	// alert('a')
 	
 }
 

};

function generate_puzzle()
{
	for (var i = board.length - 1; i >= 0; i--) {
		row = board[i]
		for (var j = row.length - 1; j >= 0; j--) {
			while (colors.indexOf(row[j].color) != 0)
			{
				row[j].flip()
			}

		}
	}
	n = parseInt(document.getElementById("dificulty").value)-1
	n = n+level
	for (var i = n - 1; i >= 0; i--) {
	I = Math.floor(Math.random()*6)
	J = Math.floor(Math.random()*6)
	move(I,J,"",true)
	document.getElementById('Start').innerHTML = "reset level "+n
};
}

document.getElementById('Start').onclick = function(){

		init_sound()
// backgroundTrack = new Audio("Ambient.mp3");
// backgroundTrack.volume = .1;
// backgroundTrack.loop = true;
// backgroundTrack.currentTime = Math.random()*100;
generate_puzzle();
document.getElementById('Start').onclick = generate_puzzle

}


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

    if (settings_shown) {settings.style.transform = "scaleY(0) translate(-50%, -50%)";settings_shown = ! settings_shown;}
	// if (!settings_shown) {settings.style.transform = "scaleY(1)";}
	
  }
  if (instructions_button.contains(e.target)){
    // alert('contained')
  }
  else if (instructions.contains(e.target)){
    // alert('contained')
  }
   else{

    if (instructions_shown) {instructions.style.transform = "scaleY(0) translate(-50%, -50%)";instructions_shown = ! settings_shown;}
	// if (!settings_shown) {settings.style.transform = "scaleY(1)";}
	
  }
});

var range = document.getElementById("dificulty");
var bubble = document.getElementById("bubble");
range.addEventListener("input", () => {
  bubble.innerHTML = range.value;
  setBubble(range, bubble)
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  console.log(range.offsetWidth)
  console.log(newVal)
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  // bubble.style.left = (range.offsetWidth*newVal/100.) +"px";
   // bubble.style.left = `calc(${newVal}% + (${0}px))`;
}