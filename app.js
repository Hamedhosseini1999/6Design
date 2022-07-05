const photoes = document.querySelectorAll(".img-piece_inner");
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".mobile-list");
// Btns
const btnDiscover = document.getElementById("btn-discover");
const back = document.getElementById("back-home");
// Slides
const home = document.getElementById("home-main");
const who = document.getElementById("who-we");
// Elements home
const homeTitle = document.querySelector(".home-title_text_header");
const homePic = document.querySelector("#home-pictures");
// Elements Who We Are
const whoTitle = document.querySelector(".who-header");
const whoArrows = document.querySelector(".who-arrows");
const whoPic = document.querySelector(".who-we_pic");

let pieces;
photoes.forEach((photo) => {
  photo.addEventListener("mouseover", function () {
    pieces = document.querySelectorAll(`[data-img=${photo.id}]`);
    pieces.forEach((piece) => {
      piece.style.zIndex = "1";
      piece.style.transform = "translateY(0)";
    });
  });
  photo.addEventListener("mouseout", function () {
    pieces.forEach((piece) => {
      piece.style.zIndex = "0";
      if (piece.classList.contains("piece_1")) {
        piece.style.transform = "translateY(110%)";
      }
      if (piece.classList.contains("piece_2")) {
        piece.style.transform = "translateY(-100%)";
      }
      if (piece.classList.contains("piece_3")) {
        piece.style.transform = "translateY(110%)";
      }
    });
  });
});

openMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});

btnDiscover.addEventListener("click", () => {
  home.classList.add("slideHome");
  setTimeout(() => {
    home.classList.add("displayingNone");
    who.classList.add("displayingFlex");
    home.classList.remove("slideHome");
  }, 1000);
});

back.addEventListener("click", () => {
  who.classList.add("slideWho");
  setTimeout(() => {
    home.classList.remove("displayingNone");
    who.classList.remove("displayingFlex");
    who.classList.remove("slideWho");
  }, 1000);
});
