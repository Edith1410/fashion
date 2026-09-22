const tops = [
  {
    brand: "Pull and bear",
    sizes: ["s", "m", "l", "xl"],
    color: "pink",
    price: "350kr.",
  },
  {
    brand: "Next",
    sizes: ["s", "m", "l"],
    color: "black",
    price: "325kr",
  },
  {
    brand: "Pull and bear",
    sizes: ["m", "l", "xl"],
    color: "brown",
    price: "400kr",
  },
];

// console.log(tops[2].color);
const topslist = document.querySelector("#topslist");

function showTops(tops) {
  console.log(tops);
  let markup = "";
  tops.forEach(
    (top) =>
      (markup += `
  <article class="card">
  <h3>${top.brand}</h3>
  <h2>${top.price}</h2>
  <p>${top.sizes}</p>
  <p>${top.color}</p>
</article>
  `),
  );
  topslist.innerHTML = markup;
}
