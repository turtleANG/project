let images = [{
  url: "/image/gallery_1.jpg",
  alt: "gallery",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br>LCD admiral",
  area: "81 m<sup>2</sup>",
  repairTime: "3.5 months",
  repairCost: "Upon request",
  descriptionText: "(1)Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
}, {
  url: "/image/gallery_2.jpg",
  alt: "gallery",
  title: "Sochi, Thieves",
  city: "Sochi<br>Thieves",
  area: "105 m<sup>2</sup>",
  repairTime: "4 months",
  repairCost: "Upon request",
  descriptionText: "(2)Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
}, {
  url: "/image/gallery_3.jpg",
  alt: "gallery",
  title: "Rostov-on-Don, Patriotic",
  city: "Rostov-on-Don<br>Patriotic",
  area: "93 m<sup>2</sup>",
  repairTime: "3 months",
  repairCost: "Upon request",
  descriptionText: "(3)Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
}];




function initSlider() {

  let sliderImages = document.querySelector(".projects-slider__images");
  let smallSliderImages = document.querySelector(".projects").querySelector(".slider-small__images");
  let sliderArrows = document.querySelector(".projects-slider__control");
  let smallSliderArrows = document.querySelector(".projects").querySelector(".slider-small__control");
  let sliderDots = document.querySelector(".projects-slider__dots");
  let sliderItemTitle = document.querySelector(".projects-slider__title");
  let sliderItemCity = document.querySelector(".project-item__city");
  let sliderItemArea = document.querySelector(".project-item__area");
  let sliderItemRepairTime = document.querySelector(".project-item__repair-time");
  let sliderItemRepairCost = document.querySelector(".project-item__repair-cost");
  let sliderItemdescriptionText = document.querySelector(".projects-description__text");

  if (!images || !images.length) return;

  initImages();
  initArrows();
  initDots();
  initTitles();


  function initImages() {
    images.forEach((image, index) => {
      let itemImage = `<img src="${images[index].url}" alt="gallery" class="img-fluid n${index} ${index === 0 ? "active" : ""}" data-index="${index}">`;
      sliderImages.innerHTML += itemImage;
      smallSliderImages.innerHTML += itemImage;
    });
    sliderItemCity.innerHTML = images[0].city;
    sliderItemArea.innerHTML = images[0].area;
    sliderItemRepairTime.innerHTML = images[0].repairTime;
    sliderItemRepairCost.innerHTML = images[0].repairCost;
    sliderItemdescriptionText.innerHTML = images[0].descriptionText;
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("prev-button")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
    smallSliderArrows.querySelectorAll(".arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("prev-button")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="dot n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".dot").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initTitles() {
    images.forEach((image, index) => {
      let titleLi = `<li class="n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[0].title}</li>`;
      sliderItemTitle.innerHTML += titleLi;
    })
    sliderItemTitle.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", function () {
        console.log(this.dataset.index);
        moveSlider(this.dataset.index);
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    smallSliderImages.querySelector(".active").classList.remove("active");
    smallSliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderItemTitle.querySelector(".active").classList.remove("active");
    sliderItemTitle.querySelector(".n" + num).classList.add("active");
    sliderItemCity.innerHTML = images[num].city;
    sliderItemArea.innerHTML = images[num].area;
    sliderItemRepairTime.innerHTML = images[num].repairTime;
    sliderItemRepairCost.innerHTML = images[num].repairCost;
    sliderItemdescriptionText.innerHTML = images[num].descriptionText;
  }

}


document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});