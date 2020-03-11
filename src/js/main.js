document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  
  // Функция добавляет класс "modal--visible"
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  // Функция закрывает модальное окно клавишей "Escape"
  const escapeBtn = (event) => {
    if (modal.classList.contains('modal--visible')) {
      if (event.which == 27) {
        switchModal();
      };
    };
  };

  // Функция закрывает модальное окно при клике вне модального окна
  const clickFreeSpace = (e) => {
    if (e.target.classList.contains('modal')) {
      switchModal();
    };
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', escapeBtn);  
  modal.addEventListener('click', clickFreeSpace);
});