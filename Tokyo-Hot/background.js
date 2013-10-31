var audio = new Audio();
audio.src = 'sonar.mp3';
audio.id = 'sonar';
audio.onerror = function(a) { console.log(a);console.log('load error'); };
console.log(audio);
audio.load();
audio.addEventListener("canplaythrough",function() { audio.play(); }, false);

function play(){
	audio.play();
}

chrome.extension.onRequest.addListener(play);

var soundsLib = {
	tag:{
		a:'',
		div:'',
		
	}
}