var onlongtouch; 
var timer;
var touchduration = 300; //length of time we want the user to touch before we do something

var sentence_text = ''
var sentence_element = null

window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("selectionchange", e => e.preventDefault());

function touchstart(e) {
    console.log('Touch Start is fired')
    sentence_text = e.target.innerHTML
    sentence_element = e.target
    e.preventDefault();
    if (!timer) {
        timer = setTimeout(onlongtouch, touchduration);
    }
}

function touchend() {
  console.log('Touch end is fired')
    //stops short touches from firing the event
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

function onlongtouch(){ 

    console.log('displaying notification')
    timer = null;

    var response = 'Only 90% of it is correct'
    var text = `<div class="notification">
    
  <div class="title">
    <h3>SwissChecker</h3>
  </div>
  <div class="content">
    <p>Notification body (success)</p>
  </div>
  
  <div class="content"><p>` + response + `</p>
  </div>
  
  <div class="indicator success"></div>
  <span id='x'>x<span>
  </div>`
    document.body.innerHTML += text

    document.getElementById('x').addEventListener('click', function(){hideToolTip()})

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


function hideToolTip() {
    var notification_div = document.getElementsByClassName('notification')[0]
    notification_div.classList += ' slide-out' 
    
    setTimeout(function(){
        notification_div.remove()}, 1000)

}

SERVER  = "inference.hackzurich2021.hack-with-admin.ch"
APP_PATH = "api/question/hack_zurich"

function getInfoForQuestion(questionText, beamsize=1)
{   let responseText = {};
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            responseText = xmlHttp.response;
        }
        else {
            console.log("status " + xmlHttp.status);
        }
    }
    httpPath = SERVER + "/" + APP_PATH;
    xmlHttp.open("PUT", httpPath, true); // true for asynchronous
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xmlHttp.setRequestHeader("X-API-Key", "sjNmaCtviYzXWlS");
    xmlHttp.send({"question": questionText, "beam_size": beamsize});
    console.log("request to " + httpPath);
    return responseText;
}


