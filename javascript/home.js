//skip youtube ad
setInterval(function(){
  var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
  if(skipButton != undefined && skipButton.length>0){
    console.log("Ad detected!");
    skipButton[0].click();
  }
},3000)



// Display Name from local storage
var i = 0;
if(localStorage.getItem("NAME")===null){
  name = "User";
}else{
  name = localStorage.getItem("NAME");
}
var text = "Welcome! "+ name;
document.getElementById("name").setAttribute("data-text", text);
function typing() {
  if (i < text.length) {
    setTimeout(typing, 80);
    document.getElementById("name").innerHTML += text.charAt(i);
    i++;
  }
}
typing();
setInterval(function () {
  window.location.replace("../public/index.html");
}, 1500);
