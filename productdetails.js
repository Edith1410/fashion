const id = new URLSearchParams(window.location.search).get("id");

console.log("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const produkt = document.querySelector("#produkt");

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(element);
  produkt.innerHTML = `<a href=productdetails.html?id=${element.id}>
        <article class="topslist">
        <div>
        <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
        </div>
        <div class="text">
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            <p>kr. ${element.price},-</p>
            <p>${element.category}</p>
            <p>${element.gender}</p>
            </div>
        </article>
        </a>`;
}
