/*
	Yarno Boelens
	Soundboard index.js
	created on: 25-06-2017
*/

var files = [
    {
        name:'flokkie|Are-you-the-aardappel?',
        title:'Pak ze',
        author:'flokkie'
    },
    {
        name:'flokkie|Koekoek',
        title:'Koekoek',
        author:'flokkie'
    },
    {
        name:'flokkie|Twee-men',
        title:'Twee men',
        author:'flokkie'
    },
    {
        name:'flokkie|Verkeerde-knopje',
        title:'Verkeerde knopje',
        author:'flokkie'
    },
    {
        name:'flokkie|WTF-Ricardo',
        title:'WTF Ricardo?!',
        author:'flokkie'
    },
    {
        name:'flokkie|Jaja-ja',
        title:'Jaja ja',
        author:'flokkie'
    },
    {
        name:'flokkie|Are-you-the-aardappel?',
        title:'Are you the aardappel?',
        author:'flokkie'
    },
    {
        name:'flokkie|I-am-the-aardappel',
        title:'I am the aardappel',
        author:'flokkie'
    },
    {
        name:'jos|Hey-klootzak',
        title:'Hey! Klootzak!',
        author:'jos'
    },
    {
        name:'jelle|Kutkutkut',
        title:'Kutkutkut',
        author:'jelle'
    },
    {
        name:'yarno|Zo-jammer',
        title:'Zo jammer',
        author:'yarno'
    }
];

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
    audio = new Audio('../audio/'+file+'.ogg');
    audio.play();
}
