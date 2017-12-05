/*
	Yarno Boelens
	Soundboard index.js
	created on: 25 06 2017
*/

var audio = new Audio(),
    pageBody = document.getElementById('page-body');

files.forEach(function(file){
    var p = document.createElement("p"),
        text = document.createTextNode(file.title);
    p.appendChild(text);
    var div = document.createElement("div");
    div.appendChild(p);
    div.className += "soundItem " + file.author;
    div.onclick = function(){
        play(file.name);
    };
    pageBody.appendChild(div);
});

function play(file) {
    audio.pause()
    audio = new Audio('/SoundBoard/audio/mp3/'+file+'.mp3');
    audio.play();
}
