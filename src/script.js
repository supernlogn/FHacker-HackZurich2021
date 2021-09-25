function getSelectionText(){

    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    /* If nothing is highlighted, do nothing */

    let output_text = ''+document.getSelection().toString()

    if(text=''){return console.log('Nothing was highlighted')}
    
    
    console.log(output_text)
}

var article = document.getElementById('article')

article.addEventListener('dblclick', function(){
    console.log('event click works')
    console.log(getSelectionText())
})