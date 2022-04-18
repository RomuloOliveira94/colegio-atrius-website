/*=============== EFEITO DE SCROLL ===============*/
const menuItems = document.querySelectorAll('.nav-list a[href^="#"]');
console.log(menuItems);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) + 20;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

/*=============== GALERIA ===============*/

let swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
  },
  disableOnInteraction: true,
  mousewheel: {
    invert: false,
  },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({ distance: "80%" });
ScrollReveal().reveal(".text-banner", {
  origin: "left",
  delay: 500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".banner-img", {
  origin: "right",
  delay: 500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".banner-sobre", {
  origin: "left",
  delay: 500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".paragrafos-sobre", {
  origin: "right",
  delay: 500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".dif-01", {
  origin: "right",
  delay: 500,
  duration: 800,
  reset: true,
});
ScrollReveal().reveal(".dif-02", {
  origin: "right",
  delay: 1000,
  duration: 800,
  reset: true,
});
ScrollReveal().reveal(".dif-03", {
  origin: "right",
  delay: 1500,
  duration: 800,
  reset: true,
});
ScrollReveal().reveal(".footer-dif", {
  origin: "bottom",
  delay: 1800,
  duration: 800,
  reset: true,
});
