/*
	Yarno Boelens
	Soundboard index.js
	created on: 25-06-2017
*/

var files = [
    {
        name:'pak-ze',
        title:'Pak ze',
        author:'flokkie'
    },
    {
        name:'koekoek',
        title:'Koekoek',
        author:'flokkie'
    },
    {
        name:'twee-men',
        title:'Twee men',
        author:'flokkie'
    },
    {
        name:'verkeerde-knopje',
        title:'Verkeerde knopje',
        author:'flokkie'
    },
    {
        name:'koekoek',
        title:'Koekoek',
        author:'flokkie'
    },
    {
        name:'wtf-ricardo',
        title:'WTF Ricardo?!',
        author:'flokkie'
    },
    {
        name:'jaja',
        title:'Jaja ja',
        author:'flokkie'
    },
    {
        name:'hey-klootzak',
        title:'Hey! Klootzak!',
        author:'jos'
    },
    {
        name:'kutkutkut',
        title:'Kutkutkut',
        author:'jelle'
    },
    {
        name:'zo-jammer',
        title:'Zo jammer',
        author:'yarno'
    }
];

var audio = new Audio();

files.forEach(function(file){
    var p = document.createElement("p");
    var text = document.createTextNode(file.title);
    p.appendChild(text);
    var div = document.createElement("div");
    div.appendChild(p);
    div.className += "soundItem " + file.author;
    div.onclick = function(){
        play(file.name);
    };
    document.getElementById('page-body').appendChild(div);
});

function play(file) {
    audio.pause()
    audio = new Audio('../audio/'+file+'.ogg');
    audio.play();
}
