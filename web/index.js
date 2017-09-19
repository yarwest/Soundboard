/*
	Yarno Boelens
	Soundboard index.js
	created on: 25 06 2017
*/

var files = [
    {
        name:'flokkie_Pak ze',
        title:'Pak ze',
        author:'flokkie'
    },
    {
        name:'flokkie_Hey Evert',
        title:'Hey Evert',
        author:'flokkie'
    },
    {
        name:'flokkie_Koekoek',
        title:'Koekoek',
        author:'flokkie'
    },
    {
        name:'flokkie_Twee men',
        title:'Twee men',
        author:'flokkie'
    },
    {
        name:'flokkie_Verkeerde knopje',
        title:'Verkeerde knopje',
        author:'flokkie'
    },
    {
        name:'flokkie_WTF Ricardo',
        title:'WTF Ricardo?!',
        author:'flokkie'
    },
    {
        name:'flokkie_Wat doet ie nou',
        title:'Wat doet ie nou',
        author:'flokkie'
    },
    {
        name:'flokkie_Wat doe je nou Jos',
        title:'Wat doe je nou Jos?',
        author:'flokkie'
    },
    {
        name:'flokkie_Zo fucking kansloos',
        title:'Zo fucking kansloos',
        author:'flokkie'
    },
    {
        name:'flokkie_Jaja ja',
        title:'Jaja ja',
        author:'flokkie'
    },
    {
        name:'flokkie_Are you the aardappel',
        title:'Are you the aardappel?',
        author:'flokkie'
    },
    {
        name:'flokkie_I am the aardappel',
        title:'I am the aardappel',
        author:'flokkie'
    },
    {
        name:'jos_Hey klootzak',
        title:'Hey! Klootzak!',
        author:'jos'
    },
    {
        name:'wim_Goed gehydrateerd blijven',
        title:'Goed gehydrateerd blijven',
        author:'wim'
    },
    {
        name:'wim_Ha! Ik heb mijn neus dicht',
        title:'Ha! Ik heb mijn neus dicht',
        author:'wim'
    },
    {
        name:'jelle_Kutkutkut',
        title:'Kutkutkut',
        author:'jelle'
    },
    {
        name:'yarno_Best Reload Moment Ever',
        title:'Best Reload Moment Ever',
        author:'yarno'
    },
    {
        name:'yarno_Zo jammer',
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
