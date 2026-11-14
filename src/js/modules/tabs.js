const tabs = (
  tabsParentSelector,
  tabsContentSelector,
  tabsBtns,
  activeClass,
  activeContentCLass,
) => {
  const tabsBtnsParent = document.querySelector(tabsParentSelector),
    tabsButtons = document.querySelectorAll(tabsBtns),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function showContent(i = 3) {
    tabsContent.forEach((item) => {
      item.classList.remove(activeContentCLass);
    });
    tabsContent[i].classList.add(activeContentCLass);

    tabsButtons.forEach((item) => {
      item.classList.remove(activeClass);
      if (
        item.getAttribute("data-button") === tabsContent[i].getAttribute("id")
      ) {
        item.classList.add(activeClass);
      }
    });
  }

  showContent();

  tabsBtnsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.getAttribute("data-button")) {
      tabsContent.forEach((tab, i) => {
        if (target.getAttribute("data-button") === tab.getAttribute("id")) {
          showContent(i);
        }
      });
    }
  });
};

export default tabs;
