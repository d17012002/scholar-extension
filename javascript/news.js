import news_apiKey from "./apiKeys.js";

const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
let newsCarousel = document.querySelector(".carousel-inner");
let success = document.querySelector("#dyn-text");

searchFrom.addEventListener("submit", retrieve);
function retrieve(e) {
  e.preventDefault();


  let query = input.value;
  const pageSize = 4;
  const language = "en";
  let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${news_apiKey}&language=${language}&pageSize=${pageSize}`;

  fetch(url).then((res) => {
    success.innerText = "News fetched successfully!";
    return res.json();
  }).then((data) => {
    let newsHTML = "";
    data.articles.forEach(element => {

      let news = 
      `<div class="carousel-item">
        <div class="card">
          <img src=${element["urlToImage"]} class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${element["title"]}</h5>
            <p class="card-text">${element["description"]}</p>
            <a href=${element["url"]} target="-blank" class="btn btn-sm btn-outline-primary">Read More</a>
          </div>
        </div>
      </div>`;

      newsHTML+=news;
    });
    newsCarousel.innerHTML += newsHTML;
  })
};