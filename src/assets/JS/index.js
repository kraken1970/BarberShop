const linkPopup = document.querySelector(".login");
const popup = document.querySelector(".modal-content");
const closePopup = popup.querySelector(".modal-content-close");
const form = popup.querySelector("form");
const login = form.querySelector(".icon-user");
const password = form.querySelector(".icon-password");
const storage = localStorage.getItem("login");
const overlay = document.querySelector(".modal-overlay");

linkPopup.addEventListener("click", event => {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

closePopup.addEventListener("click", event => {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

const linkSearchMap = document.querySelector(".search-map");
const linkSearchMap2 = document.querySelector(".search-map2");
const map = document.querySelector(".modal-content-map");
const closeMap = map.querySelector(".modal-content-close");

linkSearchMap.addEventListener("click", event => {
  event.preventDefault();
  map.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

linkSearchMap2.addEventListener("click", event => {
  event.preventDefault();
  map.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

closeMap.addEventListener("click", event => {
  event.preventDefault();
  map.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("modal-map-show")) {
      map.classList.remove("modal-map-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
