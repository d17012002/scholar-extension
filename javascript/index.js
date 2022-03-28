let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search")
searchBtn.addEventListener('click', showDef);
document.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        document.querySelector(".eg").style.visibility = "hidden";
        showDef();
    }
});
function showDef(){
    document.querySelector(".eg").style.visibility = "hidden";
    let word = input.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    if (word === ''){
        alert('Word is required')
        return;
    }

    fetch(url).then(res =>{
        return res.json();
    }).then(data => {

        document.querySelector(".overlay").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector(".wrapper").style.visibility = "hidden";
        
        if(data[0].meanings[0].definitions[0].example == undefined){
            document.querySelector("#word").innerHTML = ` ${data[0].word}`;
            document.querySelector("#speech").innerHTML = ` (${data[0].meanings[0].partOfSpeech})`;
            document.querySelector("#def").innerHTML = ` ${data[0].meanings[0].definitions[0].definition}`;
        }else{
            document.querySelector(".eg").style.visibility = "visible";
            document.querySelector("#word").innerHTML = ` ${data[0].word}`;
            document.querySelector("#speech").innerHTML = ` (${data[0].meanings[0].partOfSpeech})`;
            document.querySelector("#def").innerHTML = ` ${data[0].meanings[0].definitions[0].definition}`;
            document.querySelector("#eg").innerHTML = ` ${data[0].meanings[0].definitions[0].example}`;
        }
        

        document.querySelector("#back").addEventListener('click', function () {
            document.querySelector(".overlay").style.visibility = "visible";
            document.querySelector(".wrapper").style.visibility = "visible";
            document.querySelector(".popup").style.visibility = "hidden";
            document.querySelector(".eg").style.visibility = "hidden";
            input.value = '';
          })

    })
    .catch((error) => {
        document.querySelector("#word").innerHTML = " No such word";
        document.querySelector("#speech").innerHTML = " undefined";
        document.querySelector("#def").innerHTML = " undefined";
      })
}
const quoteBox = document.querySelector(".wrapper");
document.querySelector(".dd-button").addEventListener('click', function(){
    document.querySelector(".wrapper").classList.toggle("wrapperBox");

})
document.querySelector(".fa-gear").addEventListener('click', function(){
    let name = prompt("Enter your nick name.");
    localStorage.setItem("NAME", name);
    setInterval(function () {
        window.location.replace("../public/home.html");
    }, 600);
})


// Get random quotes
const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
synth = speechSynthesis;

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

randomQuote();

quoteBtn.addEventListener("click", randomQuote);