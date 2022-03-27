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
        document.querySelector(".setting").style.visibility = "hidden";
        
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
            document.querySelector(".setting").style.visibility = "visible";
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

document.querySelector(".fa-gear").addEventListener('click', function(){
    let name = prompt("Enter your nick name.");
    localStorage.setItem("NAME", name);
    setInterval(function () {
        window.location.replace("../public/home.html");
    }, 600);
})

