

var audio_list = ['click1.wav','click2.wav','click3.wav','click4.wav'];
var click_buffers = [null,null,null,null]

var context;
function init_sound(argument) {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

for (var i = audio_list.length - 1; i >= 0; i--) {
	load_sound(audio_list[i],i)
}
}


function load_sound(url,i) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      click_buffers[i] = buffer;
    }, onError);
  }
  request.send();
}


onError = function()
{
	alert("err")
}
function play_sound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}

function click()
{
	play_sound(random_choice(click_buffers))
}

