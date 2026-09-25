const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=21`;

const topslist = document.querySelector(".topslist");

const productid = 123456;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  json.forEach((element) => {
    topslist.innerHTML += `
   <article class="card">
   <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede"/>
   <h2>${element.productdisplayname}</2>
   <h3>${element.brandname}</3>
   <p>${element.price}</p>
   <p>${element.gender}</p>
   <p>${element.category}</p>
   </article>
 `;
  });
}
