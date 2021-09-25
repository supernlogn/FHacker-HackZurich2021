var onlongtouch; 
var timer;
var touchduration = 800; //length of time we want the user to touch before we do something

var sentence_text = ''

window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("selectionchange", e => e.preventDefault());

function touchstart(e) {
    sentence_text = e.target.innerHTML
    e.preventDefault();
    if (!timer) {
        timer = setTimeout(onlongtouch, touchduration);
    }
}

function touchend() {
    //stops short touches from firing the event
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

onlongtouch = function() { 
    timer = null;
    alert(sentence_text)
};




document.addEventListener("DOMContentLoaded", function(event) {
    

    var sentences = document.getElementsByClassName('sentence')
    
    for (let i = 0; i < sentences.length; i++) {
        sentences[i].addEventListener("touchstart", touchstart, false);
        sentences[i].addEventListener("touchend", touchend, false);
      }
    for (let i = 0; i < sentences.length; i++) {
        sentences[i].addEventListener("mousedown", touchstart);
        sentences[i].addEventListener("mouseup", touchend);
      }

});





/* 
function getSelectionText(){

    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
     If nothing is highlighted, do nothing 

    let output_text = ''+document.getSelection().toString()

    if(text=''){return console.log('Nothing was highlighted')}
    
    
    console.log(output_text)
}

var article = document.getElementById('article')

article.addEventListener('dblclick', function(){
    console.log('event click works')
    console.log(getSelectionText())
}) */