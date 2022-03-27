let blogContainer = document.querySelector(".blog-container");

const medium_url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40bitbybit_vitb";
function displayBlog() {
    fetch(medium_url).then(res=>{
        return res.json();
    }).then(data => {
        let blogData = "";
        data.items.forEach(element =>{
            
            let blog = `
            <div class="blog-card container">
                <div class="blog-img">
                    <a href="${element["link"]}" target="-blank">
                    <img src="${element["thumbnail"]}">
                    </a>
                </div>
                <button class="blog-acc">${element["title"]}   <i class="fa-solid fa-caret-down d1">  </i></button>
                <div class="blog-body">
                    <p> ${element["description"]} </p>
                </div>
            </div>
            <br>`;
            
            blogData += blog;
        })
        blogContainer.innerHTML = blogData;
        
        var acc = document.getElementsByClassName("blog-acc");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

    })
}

displayBlog();








