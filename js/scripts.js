const selectElement = (s) => document.querySelector(s);

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  grabCursor: true,
  speed: 2000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Gallery

let filterItem = document.querySelector(".project-items-links"); // Corrected selector
let filterImages = document.querySelectorAll(".project-img");

window.addEventListener("load", () => {
  filterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("project-item-link")) {
      document.querySelector(".menu-active").classList.remove("menu-active");
      selectedItem.target.classList.add("menu-active");

      let filterName = selectedItem.target.getAttribute("data-name");

      filterImages.forEach((image) => {
        // Corrected arrow function parameter
        let filterImage = image.getAttribute("data-name");
        if (filterImage == filterName || filterName == "all") {
          // Corrected comparison
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});
