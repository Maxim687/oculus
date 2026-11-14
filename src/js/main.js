/**
 * Головний JS-файл
 * Імпортуй сюди всі модулі
 */

// Приклад модульного підходу
// import { initHeader } from './modules/header.js';
// import { initSlider } from './modules/slider.js';

import tabs from "./modules/tabs";
import menu from "./modules/burger-menu";
import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", () => {
  tabs(
    ".tabs__buttons",
    ".tabs__content-item",
    ".tabs__buttons-item",
    "tabs__buttons-item--active",
    "tabs__content-item--active",
  );
  menu(".menu-btn", ".menu", ".menu-close-btn");
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  delay: 200,
  reset: false,
});

sr.reveal(".scroll-left", { delay: 200, interval: 200, origin: "left" });
sr.reveal(".features__titles", { delay: 100, origin: "top" });
sr.reveal(".tabs__buttons", { delay: 400, origin: "left" });
sr.reveal(".tabs__contents", { delay: 800, origin: "right" });
sr.reveal(".game__title", { delay: 300, origin: "left" });
sr.reveal(".game__descr", { delay: 600, origin: "left" });
sr.reveal(".game__item", { delay: 1000, interval: 200, origin: "bottom" });
sr.reveal(".equipment__subtitle", { delay: 300, origin: "left" });
sr.reveal(".equipment__box-item", {
  delay: 900,
  interval: 200,
  origin: "right",
});
sr.reveal(".equipment__box-item--one", { delay: 600, origin: "left" });
sr.reveal(".accessories__subtitle", { delay: 300, origin: "left" });
sr.reveal(".accessories__text", { delay: 600, origin: "left" });
sr.reveal(".accessories__item", { delay: 900, interval: 300, origin: "right" });
sr.reveal(".contacts__title", { delay: 300, origin: "left" });
sr.reveal(".contacts__form", { delay: 600, origin: "bottom" });
sr.reveal(".contacts__email", { delay: 900, origin: "bottom" });
