const cat = new URLSearchParams(window.location.search).get("cat");

// const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=21`;
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const topslist = document.querySelector(".topslist");

const h2 = document.querySelector("h2");
h2.textContent = cat;

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  json.forEach((element) => {
    const Tilbudspris = Math.round(element.price - (element.price * element.discount) / 100);
    topslist.innerHTML += `
   <a href=productdetails.html?id=${element.id} class=${element.soldout ? "udsolgt" : ""}>
   <article class="card">
   <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede"/>
   ${element.soldout ? `<p class="SoldOut">Sold Out</p>` : ""}
   <h2>${element.productdisplayname}</2>
   <h3>${element.brandname}</3>
   ${
     element.discount
       ? `<p class="Discountlabel">-${element.discount}%</p> 
      <p> Før kr. ${element.price},- Nu ${Tilbudspris},-</p>`
       : `<p> kr. ${element.price},-</p>`
   }
   </article>
   </a>
 `;
  });
}
