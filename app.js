var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var userInput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input


}
function errorHandler(error){
    console.log("error accured",error);
    alert("something wrong with server");
}

function clickEventHandler(){
    // output.innerHTML = "defefewfefwef"+txtInput.value;
    var textInput = txtInput.value;
    fetch(getTranslationURL(textInput)).then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        userInput.innerHTML = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickEventHandler);
