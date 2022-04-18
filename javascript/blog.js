import {devto_url} from "./apiKeys.js";

let blogContainer = document.querySelector(".blog-container");

function displayBlog() {
    fetch(devto_url).then(res=>{
        return res.json();
    }).then(data => {
        let blogData = "";
        data.forEach(element =>{
            
            let blog = `
            <div class="blog-card container">
                <div class="blog-img">
                    <a href="${element["url"]}" target="-blank">
                    <img src="${element["cover_image"]}">
                    </a>
                </div>
                <button class="blog-acc">${element["title"]}   <i class="fa-solid fa-caret-down d1">  </i><p>By - <B>${element["user"]["name"]}</B></p></button>
                <div class="blog-body">
                <p> ${element["description"]}
                <a href="${element["url"]}" target="-blank">Read More</a>
                </p>
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






