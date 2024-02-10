const card = document.getElementById("cards");
const sidebar = document.getElementById("sidebar");
const containerSidebar = document.getElementById("containerSidebar");

const fetchData = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const results = await data.json();

  results.map((product) => {
    const { id, title, price, image } = product;
    const limitHuruf = title.length > 10 ? title.slice(0, 15) + "..." : title;
    const convert = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
    card.innerHTML += `
    <div class="rounded-t-2xl mt-4 shadow-2xl h-80 bg-white">
          <img
            src=${image}
            class="rounded-t-2xl shadow-lg w-full h-[240px]"
            alt=""
          />
          <h1 class="flex justify-center font-semibold">${limitHuruf}</h1>
          <div class="flex items-center justify-center gap-3 mt-2">
            <p class="flex justify-center font-semibold">price : ${convert}</p>
            <button onclick="addToChart(${id})"
              class="flex text-sm items-center justify-center py-1.5 px-1 rounded-xl text-white bg-blue-500"
            >
              add to chart
            </button>
          </div>
        </div>
    `;
    product.quantity = 0; // Add quantity property to product object
    cards.push(product);
  });
};

fetchData();

let cards = [];

function closeElement() {
  sidebar.classList.toggle("hidden");
  console.log(sidebar);
}

function shopping() {
  sidebar.classList.toggle("hidden");
}

function addToChart(productId) {
  console.log(productId);
  addToCart(productId);
}

function addToCart(productId) {
  const productIndex = cards.findIndex((product) => product.id == productId);
  if (productIndex !== -1) {
    cards[productIndex].quantity++;
    addCartToHtml();
  }
}

function addCartToHtml() {
  containerSidebar.innerHTML = "";
  let totalPrice = 0;
  let totalQuantity = 0;

  cards.forEach((product) => {
    totalQuantity += product.quantity;
    const subtotalPrice = product.price * product.quantity;
    totalPrice += subtotalPrice;

    if (product.quantity > 0) {
      const limitHuruf =
        product.title.length > 10
          ? product.title.slice(0, 20) + "..."
          : product.title;

      containerSidebar.innerHTML += `
          <div  class="flex">
            <img src=${product.image} class="w-20 h-20 mt-5" alt="" />
            <div class="ml-2">
              <p class="font-poppins text-sm mt-4 ml-5">${limitHuruf}</p>
              <p class="font-poppins mt-2 ml-5 text-sm">Price: ${subtotalPrice}</p>
            </div>
          </div>
        `;
    }
  });

  count.textContent = totalQuantity;
}
