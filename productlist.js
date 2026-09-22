// const tops = [
//   {
//     brand: "Pull and bear",
//     sizes: ["s", "m", "l", "xl"],
//     color: "pink",
//     price: "350kr.",
//   },
//   {
//     brand: "Next",
//     sizes: ["s", "m", "l"],
//     color: "black",
//     price: "325kr",
//   },
//   {
//     brand: "Pull and bear",
//     sizes: ["m", "l", "xl"],
//     color: "brown",
//     price: "400kr",
//   },
// ];
// const topslist = document.querySelector(".topslist");
// tops.forEach(showTops);

// function showTops(top) {
//   topslist.innerHTML += `
//   <article class="card">
//   <h3>${top.brand}</3>
//   <h2>${top.sizes}</h2>
//   <p>${top.color}</p>
//   <p>${top.price}</p>
//   </article>
//   `;
// }

const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=20`;

const topslist = document.querySelector(".topslist");

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  json.forEach((element) => {
    topslist.innerHTML += `
   <article class="card">
   <h2>${element.productdisplayname}</2>
   <h3>${element.brandname}</3>
   <p>${element.price}</p>
   </article>
 `;
  });
}
