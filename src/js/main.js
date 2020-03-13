/*document.addEventListener("DOMContentLoaded", function(event) {
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
}); */

/*$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

}); */

$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');
  let scrollUpBtn = $('.scrollup');

  modalBtn.click( () => {
    modal.toggleClass('modal--visible');
  });

  closeBtn.click( () => {
    modal.toggleClass('modal--visible');
  });

  $(document).keydown((event) => {
    if (modal.hasClass('modal--visible')) {
      if (event.which == 27) {
        modal.toggleClass('modal--visible');
      };
    };
  });

  modal.click((e) => {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
      modal.toggleClass('modal--visible');
    };
  });

  $(window).scroll( () => {
    if ($(this).scrollTop() > 150) {
      scrollUpBtn.addClass('scrollup--visible');
      scrollUpBtn.fadeIn();
    } else {
      scrollUpBtn.fadeOut();
      scrollUpBtn.removeClass('scrollup--visible');
    }    
  });

  scrollUpBtn.click( () => {
    $('html').animate({scrollTop : 0}, 900);
});

//initialize swiper when document ready
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');
var bullets = $('.swiper-pagination');

next.css('left', prev.width() + 20 + bullets.width() + 20);
bullets.css('left', prev.width() + 20);


});