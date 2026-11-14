const menu = (menuBtnSelector, menuSelector, menuCloseBtnSelector) => {
  const menuBtn = document.querySelector(menuBtnSelector),
    menu = document.querySelector(menuSelector),
    menuCloseBtn = document.querySelector(menuCloseBtnSelector);

  menuBtn.addEventListener("click", () => {
    menu.classList.add("menu--active");
    document.body.style.overflow = "hidden";
  });

  menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("menu--active");
    document.body.style.overflow = "";
  });
};

export default menu;
