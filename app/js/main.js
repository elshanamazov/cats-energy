/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
document.addEventListener("DOMContentLoaded", function () {
  // Burger
  (() => {
    const burger = document.querySelector(".js-burger");
    const menu = document.querySelector(".js-nav");
    burger.addEventListener("click", toggleMenu);
    function toggleMenu() {
      burger.classList.toggle("_active");
      menu.classList.toggle("_active");
    }
  })();

  // Show more
  (() => {
    const showMoreBtn = document.querySelector(".js-show-more");
    const productsList = document.querySelectorAll("._hidden");
    const allProducts = document.querySelector(".js-producst-all");
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", showAllProducts);
      function showAllProducts() {
        productsList.forEach(product => {
          product.classList.remove("_hidden");
          allProducts.classList.add("_hidden");
        });
      }
    }
  })();
});
/******/ })()
;
//# sourceMappingURL=main.js.map