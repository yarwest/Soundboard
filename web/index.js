/*
	Yarno Boelens
	Soundboard index.js
	created on: 25 06 2017
*/

var files = [
    {
        name:'flokkie|Pak ze',
        title:'Pak ze',
        author:'flokkie'
    },
    {
        name:'flokkie|Hey Evert',
        title:'Hey Evert',
        author:'flokkie'
    },
    {
        name:'flokkie|Koekoek',
        title:'Koekoek',
        author:'flokkie'
    },
    {
        name:'flokkie|Twee men',
        title:'Twee men',
        author:'flokkie'
    },
    {
        name:'flokkie|Verkeerde knopje',
        title:'Verkeerde knopje',
        author:'flokkie'
    },
    {
        name:'flokkie|WTF Ricardo',
        title:'WTF Ricardo?!',
        author:'flokkie'
    },
    {
        name:'flokkie|Wat doet ie nou',
        title:'Wat doet ie nou',
        author:'flokkie'
    },
    {
        name:'flokkie|Wat doe je nou Jos',
        title:'Wat doe je nou Jos?',
        author:'flokkie'
    },
    {
        name:'flokkie|Zo fucking kansloos',
        title:'Zo fucking kansloos',
        author:'flokkie'
    },
    {
        name:'flokkie|Jaja ja',
        title:'Jaja ja',
        author:'flokkie'
    },
    {
        name:'flokkie|Are you the aardappel',
        title:'Are you the aardappel?',
        author:'flokkie'
    },
    {
        name:'flokkie|I am the aardappel',
        title:'I am the aardappel',
        author:'flokkie'
    },
    {
        name:'jos|Hey klootzak',
        title:'Hey! Klootzak!',
        author:'jos'
    },
    {
        name:'wim|Goed gehydrateerd blijven',
        title:'Goed gehydrateerd blijven',
        author:'wim'
    },
    {
        name:'wim|Ha! Ik heb mijn neus dicht',
        title:'Ha! Ik heb mijn neus dicht',
        author:'wim'
    },
    {
        name:'jelle|Kutkutkut',
        title:'Kutkutkut',
        author:'jelle'
    },
    {
        name:'yarno|Best Reload Moment Ever',
        title:'Best Reload Moment Ever',
        author:'yarno'
    },
    {
        name:'yarno|Zo jammer',
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
