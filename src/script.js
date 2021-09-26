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
  e.target.style.backgroundColor = 'yellow'
  response = sentence_script[sentence_text]
  e.preventDefault();
  if (!timer) {
    timer = setTimeout(onlongtouch, touchduration);
  }
}


var sentence_script = {
  'Switzerland is one of the most beautiful countries in Europe.': 'Statement is an opinion. No government data',
  'Visitors are able to appreciate the country through many wonderful modes of transportations such as trains, bikes, and less sustainable approaches with cars.': 'Classified as opinion. No government data',
  'Evidently, more developed cities tend to cluster housing closer to the train station.': 'Classified as opinion. No government data',
  'For instance, the Zuerich region has the lowest share of people living in proximity of a busstop.': 'According ValueNet: Which region had the lowest share of people living in proximity of a trainstation in the year 2015? ("Region Zuerich")',
  'Whereas, the canton of Fribourg has the most cars per 1000 people in Switzerland.': 'Which municipality has the highest number of cars per capita? (Dielsdorf,)',
  'According to trends, more people in large cities are living closer to the trainstations. ': 'Classified as opinion. No government data',
  'For example, the population of Geneva and Zurich living in Zurich for the past 5 years has been growing.': 'Classified as opinion. No government data',
  'Due to climate change and noise pollution, it becomes evident that the electric and hybrid vehicles will help resolve the problem.': 'Classified as opinion. No government data',
  'For instance, Ticino has been the canton that has adopted the most electric vehicles in 2020.': 'Classified as opinion. No government data'
}



function touchend() {
  console.log('Touch end is fired')
  //stops short touches from firing the event
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

var response

function onlongtouch() {

  console.log('displaying notification')
  timer = null;
  var text = `<div class="notification">
    
  <div class="title">
  <img id='logo'src='./src/logo.png'></img>
  <h3>SwissChecker: Fact cannot be classified</h3>
  </div>

  <div class="content"><p>` + response + `</p>
  </div>

  <a href="" id="innacurate_fact">Report</a>
  
  <div class="indicator success"></div>
  <span id='x'>x<span>
  </div>`

  document.getElementById('article').innerHTML += text

  document.getElementById('x').addEventListener('click', function () { hideToolTip() })

};


document.addEventListener("DOMContentLoaded", function (event) {


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

  setTimeout(function () {
    notification_div.remove()
  }, 1000)

}

SERVER = "https://inference.hackzurich2021.hack-with-admin.ch"
APP_PATH = "api/question/hack_zurich"

function getInfoForQuestion(questionText, beamsize = 1){
  let responseText = {};
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      responseText = xmlHttp.response;
    }
    else {
      console.log("status " + xmlHttp.status);
    }
  }

  httpPath = SERVER + "/" + APP_PATH;
  xmlHttp.open("POST", httpPath, true); // true for asynchronous
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  xmlHttp.setRequestHeader("X-API-Key", "sjNmaCtviYzXWlS");
  xmlHttp.send({ "question": questionText, "beam_size": beamsize });
  console.log("request to " + httpPath);

  return responseText;
}


