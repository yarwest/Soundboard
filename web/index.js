/*
 Yarno Boelens
 Soundboard index.js
 created on: 25 06 2017
 */

var audio = new Audio(),
    container = document.getElementById('soundItemContainer');

draw();

function draw() {
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
        container.appendChild(div);
    });
}

function play(file) {
    audio.pause()
    audio = new Audio('../audio/mp3/'+file+'.mp3');
    audio.play();
}

function sortByAuthor() {
    alert("sorted");
}
