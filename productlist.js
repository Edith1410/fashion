const cat = new URLSearchParams(window.location.search).get("cat");

// const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=21`;
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=30`;

const h2 = document.querySelector("h2");
h2.textContent = cat;

const topslist = document.querySelector(".topslist");

document.querySelectorAll("#filtre button").forEach((button) => button.addEventListener("click", filtrer));
const visAntal = document.querySelector("#filtre span");

let alleData, udsnit;

fetch(endpoint).then((res) =>
  res.json().then((data) => {
    alleData = udsnit = data;
    visData(data);
  }),
);

function filtrer(e) {
  console.log(e.target.textContent);
  const valgt = e.target.textContent;
  if (valgt == "All") {
    udsnit = alleData;
  } else {
    udsnit = alleData.filter((element) => element.gender == valgt);
  }
  visData(udsnit);
}

document.querySelectorAll("#sortering button").forEach((button) => button.addEventListener("click", sorter));

function sorter(e) {
  const valgt = e.target.textContent;
  if (valgt == "Price low-high") {
    udsnit.sort((a, b) => a.price - b.price);
  } else if (valgt == "Price high-low") {
    udsnit.sort((a, b) => b.price - a.price);
  } else if (valgt == "A-Z") {
    udsnit.sort((a, b) => a.productdisplayname.localeCompare(b.productdisplayname));
  } else if (valgt == "Z-A") {
    udsnit.sort((a, b) => b.productdisplayname.localeCompare(a.productdisplayname));
  }
  visData(udsnit);
}

function visData(json) {
  visAntal.textContent = json.length;
  topslist.innerHTML = "";
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
