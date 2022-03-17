function displayBlog() {
  const medium_url =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40bitbybit_vitb";
    fetch(medium_url).then(res=>{
        return res.json();
    }).then(data => {
        for(var i=0;i<data.items.length;i++){
            console.log(data.items[i].title);
        }
    })
}

displayBlog();


document.querySelector(".d1").addEventListener('click', function (){
    document.querySelector(".hide-init1").classList.toggle("hide1");
})
document.querySelector(".d2").addEventListener('click', function (){
    document.querySelector(".hide-init2").classList.toggle("hide2");
})
document.querySelector(".d3").addEventListener('click', function (){
    document.querySelector(".hide-init3").classList.toggle("hide3");
})
document.querySelector(".d4").addEventListener('click', function (){
    document.querySelector(".hide-init4").classList.toggle("hide4");
})