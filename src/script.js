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
    
    displayed_paragraph = document.getElementById('text').children[1]}