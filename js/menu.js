(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-mob-menu"),
    closeMenuBtn: document.querySelector(".menu__close-button"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();