/*
	Yarno Boelens
	Soundboard index.js
	created on: 25-06-2017
*/
var audio = new Audio();

function play(file) {
    audio.pause()
    audio = new Audio('../audio/'+file+'.ogg');
    audio.play();
}
