// const productDetails = [
//   {
//     id: 1,
//     name: "Airpods Pro",
//     price: 24900,
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
//     qty: 10,
//     heading: "Wireless Noise Cancelling Earphones",
//     des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
//   },
//   {
//     id: 2,
//     name: "Apple Watch",
//     price: 40900,
//     imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
//     qty: 15,
//     heading: "You've never seen a watch like this",
//     des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built-in compass.",
//   },
//   {
//     id: 3,
//     name: "Macbook Pro",
//     price: 199900,
//     imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
//     qty: 20,
//     heading: "The best for the brightest",
//     des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we've ever made. it's the ultimate pro notebook for the ultimate user.",
//   },
//   {
//     id: 4,
//     name: "iPhone 11 pro",
//     price: 106600,
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
//     qty: 35,
//     heading: "Pro cameras. Pro display. Pro performance",
//     des: "A mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
//   },
//   {
//     id: 5,
//     name: "iPad Pro",
//     price: 71900,
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
//     qty: 25,
//     heading: "Your next computer is not a computer",
//     des: "It's a magical piece of glass. It's so fast most PC laptops can't catch up. And you can use it with touch, pencil, keyboard and now trackpad. It's the new iPad Pro.",
//   },
// ];

// window.localStorage.setItem("productDetails", JSON.stringify(productDetails));

const productDetails = JSON.parse(
  window.localStorage.getItem("productDetails")
);
console.log(productDetails);

let cardSelect = document.getElementsByClassName("card");
let cart = JSON.parse(window.localStorage.getItem("cart"));
console.log(cart);
const mainCard = document.getElementsByClassName("main-cart");
let cartQty = document.querySelector(".total-qty");
console.log(cartQty);
function renderCart() {
  let totalProduct = cart.reduce(function (acc, cur) {
    return (acc += cur.number);
  }, 0);
  console.log(cartQty.innerHTML);
  cartQty.innerHTML = totalProduct;
  console.log(productDetails);
  console.log(totalProduct);
}
// // // RENDER
function render() {
  // mainCard.innerHTML =""
  let stringHTML = "";
  for (let i in productDetails) {
    stringHTML += `
    <div class="card">
              <div class="top-bar">
                <i class="fab fa-apple"></i>
                <em class="stocks">In Stock</em>
              </div>
              <div class="img-container">
                <img
                  class="product-img"
                  src="${productDetails[i].imageUrl}"
                  alt=""
                />
                <div class="out-of-stock-cover"><span>Out Of Stock</span></div>
              </div>
              <div class="details">
                <div class="name-fav">
                  <strong class="product-name">${productDetails[i].name}</strong>
                  <button class="heart">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div class="wrapper">
                  <h5>${productDetails[i].heading}</h5>
                  <p>
                  ${productDetails[i].des}
                  </p>
                </div>
                <div class="purchase">
                  <p class="product-price">${productDetails[i].price}</p>
                  <span class="btn-add">
                    <div>
                      <button class="add-btn" onclick = "addProduct(${productDetails[i].id})">
                        Add <i class="fas fa-chevron-right"></i>
                      </button></div
                  ></span>
                </div>
              </div>
            </div>
    `;
  }
  // mainCard[0].innerHTML = stringHTML;
  //   console.log(mainCard[0].innerHTML);
  mainCard[0].innerHTML = stringHTML;
}

render();
let btn = document.getElementById("add-btn");

let cartProduct = [];

function addProduct(id) {
  let findIndex = productDetails.findIndex((e) => e.id == +id);
  //   console.log(id);
  let product = { ...productDetails[findIndex], qty: 1 };
  //   console.log(product);
  let inCartIndex = cart.findIndex((e) => e.id === +id);

  if (inCartIndex === -1) {
    product.number = 1;
    cart.push(product);
    window.localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    // console.log(cartProduct);
  } else {
    cart[inCartIndex].number += 1;
    window.localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}
renderCart();
