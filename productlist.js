const cat = new URLSearchParams(window.location.search).get("cat");

// const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=21`;
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const topslist = document.querySelector(".topslist");

const h2 = document.querySelector("h2");
h2.textContent = cat;

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  json.forEach((element) => {
    topslist.innerHTML += `
    <a href=productdetails.html?id=${element.id}>
   <article class="card">
   <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede"/>
   <h2>${element.productdisplayname}</2>
   <h3>${element.brandname}</3>
   <p>${element.price}</p>
   <p>${element.gender}</p>
   <p>${element.category}</p>
   </article>
   </a>
 `;
  });
}
