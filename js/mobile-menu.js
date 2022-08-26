(() => {
  const refs = {
      openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobi-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();