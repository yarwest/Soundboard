/*
	Yarno Boelens
	Soundboard index.js
	created on: 25-06-2017
*/
function play(file) {
    var audio = new Audio('../audio/'+file+'.ogg');
    audio.play();
}
