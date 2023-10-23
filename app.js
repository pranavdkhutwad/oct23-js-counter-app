// Selectors
const totalCountEle = document.querySelector(".total-count");

const productEle1 = document.querySelector("#product-1");
const productEle2 = document.querySelector("#product-2");
const productEle3 = document.querySelector("#product-3");

const productCountEle1 = document.querySelector("#product-1 .product-count");
const productCountEle2 = document.querySelector("#product-2 .product-count");
const productCountEle3 = document.querySelector("#product-3 .product-count");

const decrementBtn1 = document.querySelector("#product-1 .btn-dec");
const incrementBtn1 = document.querySelector("#product-1 .btn-inc");
const deleteBtn1 = document.querySelector("#product-1 .btn-delete");

const decrementBtn2 = document.querySelector("#product-2 .btn-dec");
const incrementBtn2 = document.querySelector("#product-2 .btn-inc");
const deleteBtn2 = document.querySelector("#product-2 .btn-delete");

const decrementBtn3 = document.querySelector("#product-3 .btn-dec");
const incrementBtn3 = document.querySelector("#product-3 .btn-inc");
const deleteBtn3 = document.querySelector("#product-3 .btn-delete");

let productCount1 = 0;
let productCount2 = 0;
let productCount3 = 0;

function findTotal() {
  return productCount1 + productCount2 + productCount3;
}

decrementBtn1.addEventListener("click", function () {
  if (productCount1) {
    productCount1 = productCount1 - 1;
    productCountEle1.textContent = productCount1 || "zero";
    totalCountEle.textContent = findTotal();
  }
});
incrementBtn1.addEventListener("click", function () {
  productCount1 = productCount1 + 1;
  productCountEle1.textContent = productCount1;
  totalCountEle.textContent = findTotal();
});
deleteBtn1.addEventListener("click", function () {
  productEle1.remove();
  productCount1 = 0;
  totalCountEle.textContent = findTotal();
});

decrementBtn2.addEventListener("click", function () {
  if (productCount2) {
    productCount2 = productCount2 - 1;
    productCountEle2.textContent = productCount2 || "zero";
    totalCountEle.textContent = findTotal();
  }
});
incrementBtn2.addEventListener("click", function () {
  productCount2 = productCount2 + 1;
  productCountEle2.textContent = productCount2;
  totalCountEle.textContent = findTotal();
});
deleteBtn2.addEventListener("click", function () {
  productEle2.remove();
  productCount2 = 0;
  totalCountEle.textContent = findTotal();
});

decrementBtn3.addEventListener("click", function () {
  if (productCount3) {
    productCount3 = productCount3 - 1;
    productCountEle3.textContent = productCount3 || "zero";
    totalCountEle.textContent = findTotal();
  }
});
incrementBtn3.addEventListener("click", function () {
  productCount3 = productCount3 + 1;
  productCountEle3.textContent = productCount3;
  totalCountEle.textContent = findTotal();
});
deleteBtn3.addEventListener("click", function () {
  productEle3.remove();
  productCount3 = 0;
  totalCountEle.textContent = findTotal();
});

function init() {
  // initialized when app loads.
  productCountEle1.textContent = "zero";
  productCountEle2.textContent = "zero";
  productCountEle3.textContent = "zero";
  totalCountEle.textContent = findTotal();
}

init();
