var swiper = new Swiper(".swiper", {
  initialSlide: 3,
  centeredSlides: true,
  loop: true,
  speed: 900,
  grabcursor: true,
  allowTouchMove: false,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: true,
  },
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const slides = document.querySelectorAll(".swiper-slide");

function flipActiveSlide() {
  const activeSlide = document.querySelector(".swiper-slide-active");
  const button = activeSlide?.querySelector("button");

  if (button) {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      // Toggle instead of add
      activeSlide.querySelector(".card").classList.toggle("flipped");
    });
  }
}

function handleButtonClick(event) {
  event.stopPropagation();
  const card = this.closest(".swiper-slide").querySelector(".card");
  card.classList.toggle("flipped");
}

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const card = slide.querySelector(".card");
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped");
    }
  });
});

swiper.on("slideChangeTransitionStart", () => {
  document.querySelectorAll(".card.flipped").forEach((card) => {
    card.classList.remove("flipped");
  });
  flipActiveSlide();
});

flipActiveSlide();
