SERVER  = "inference.hackzurich2021.hack-with-admin.ch"
APP_PATH = "api/question/hack_zurich"

var lastToolTipChosen = null;
function createToolTip(el, text) {
   lastToolTipChosen = el;
   el.opacity = 1;
   el.style.opacity = 1;
   el.setAttribute("data-tooltip",text);
   // newDiv.style.left = x + "px";
   // newDiv.style.top = y + "px";
}

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

// function httpPOSTAsync(whereDoYouWantToPost, dataToPost)
// {   let responseText ="";
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//             responseText = xmlHttp.responseText;
//         }
//         else {
//             console.log("status " + xmlHttp.status);
//         }
//     }
//     xmlHttp.open("POST", SERVER+"/"+APP_PATH +"/" + whereDoYouWantToPost, true); // true for asynchronous 
//     xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xmlHttp.send(dataToPost);
//     return responseText;
// }


function hideToolTip() {
  lastToolTipChosen.removeAttribute("data-tooltip");
}


function requestQuestionSRF() {
    let questionText = "";
    navigator. 
    return 
}