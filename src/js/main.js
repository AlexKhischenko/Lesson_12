$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');
  let scrollUpBtn = $('.scrollup');
  
  let controlSuccessMessage = $('.control__success-message');
  let controlForm = $('.control__form');

  let sampleSuccessMessage = $('.sample__success-message');
  let sampleForm = $('.sample__form');
  let sampleTitle = $('.sample__title');

  let footerSuccessMessage = $('.footer__success-message');
  let footerForm = $('.footer__form');
  let footerTitle = $('.footer__title');

  let closeSuccessBtn = $('.modal-success__close');
  let modalSuccess = $('.modal-success');
  let modalTitle = $('.modal__title');
  let modalForm = $('.modal__form');
  let modalSuccessMessage = $('.modal__success-message');

  //Подключение библиотеки анимации
  new WOW().init();

  // Плавная прокрутка к якорю
  const navbar = $('.header');
  $(".nav__item").click(function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').animate({scrollTop: $(anchor.attr('href')).position().top - navbar.outerHeight()}, 1000);
  });

  // Вызов модального окна любой из кнопок
  modalBtn.click( () => {
    modal.toggleClass('modal--visible');
  });

  // Закрытие модального окна крестиком
  closeBtn.click( () => {       
    modal.toggleClass('modal--visible');   
    if (modalSuccessMessage.hasClass('modal__success-message--visible')) {
      modalSuccessMessage.removeClass('modal__success-message--visible');
    };
    if (modalTitle.hasClass('modal__title--hidden')) {
      modalTitle.removeClass('modal__title--hidden');
    };
    if (modalForm.hasClass('modal__form--hidden')) {
      modalForm.removeClass('modal__form--hidden');
    };  
  });

  // Закрытие модального окна об успешной отправке крестиком
  closeSuccessBtn.click( () => {       
    modalSuccess.removeClass('modal-success--visible');      
  });
  
  // Закрытие модального окна клавишей Esc
  $(document).keydown((event) => {
    if (modal.hasClass('modal--visible')) {
      if (event.which == 27) {        
        modal.toggleClass('modal--visible');        
      };
    };
  });

  // Закрытие модального окна кликом вне модального окна
  modal.click((e) => {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
      modal.toggleClass('modal--visible');
    };
  });

  // Кнопка возврата в начало страницы
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



// Инициализация слайдера "Завершенные проекты"
var mySwiper1 = new Swiper ('.swiper1', {  
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

// Инициализация слайдеров "6 шагов до цели"
var mySwiper2 = new Swiper ('.swiper2', {  
  fadeEffect: {
    crossFade: true
  },
  effect: 'fade',
  pagination: {
      el: '.pagination-top',
      type: 'fraction',
    },
  });
var mySwiper3 = new Swiper ('.swiper3', {
  controller: {
    control: [mySwiper2],
  },
  fadeEffect: {
    crossFade: true
  },
  effect: 'fade',
  pagination: {
    el: '.pagination-bottom',
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');
next.css('left', prev.width() + 20 + bullets.width() + 20);
bullets.css('left', prev.width() + 20);


var nextSteps = $('.swiper2-next');
var prevSteps = $('.swiper2-prev');
var bulletsSteps = $('.pagination-bottom');
nextSteps.css('left', prevSteps.width() + 20 + bulletsSteps.width() + 20);
bulletsSteps.css('left', prevSteps.width() + 20);

getAllSteps = $('.steps-content__step');
getAllSwipers = $('.swiper2__item');
getPrevClick = $('.swiper2-prev');
getNextClick = $('.swiper2-next');

// Переключение активного разеда по кнопке вперед
getNextClick.click( () => {
  if (mySwiper3.activeIndex === 0) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--1').addClass('active');
  }
  if (mySwiper3.activeIndex === 1) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--2').addClass('active');
  }
  if (mySwiper3.activeIndex === 2) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--3').addClass('active');
  }
  if (mySwiper3.activeIndex === 3) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--4').addClass('active');
  }
  if (mySwiper3.activeIndex === 4) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--5').addClass('active');
  }
  if (mySwiper3.activeIndex === 5) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--6').addClass('active');
  }
});

// Переключение активного разеда по кнопке назад
getPrevClick.click( () => {
  if (mySwiper3.activeIndex === 0) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--1').addClass('active');
  }
  if (mySwiper3.activeIndex === 1) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--2').addClass('active');
  }
  if (mySwiper3.activeIndex === 2) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--3').addClass('active');
  }
  if (mySwiper3.activeIndex === 3) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--4').addClass('active');
  }
  if (mySwiper3.activeIndex === 4) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--5').addClass('active');
  }
  if (mySwiper3.activeIndex === 5) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--6').addClass('active');
  }
});

// Переключение слайдеров нажатием на раздел
$('.steps-content__step--1').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--1').addClass('active');
  mySwiper3.slideTo(0, 700); 
});

$('.steps-content__step--2').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--2').addClass('active');
  mySwiper3.slideTo(1, 700); 
});
$('.steps-content__step--3').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--3').addClass('active');
  mySwiper3.slideTo(2, 700); 
});
$('.steps-content__step--4').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--4').addClass('active');
  mySwiper3.slideTo(3, 700); 
});
$('.steps-content__step--5').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--5').addClass('active');
  mySwiper3.slideTo(4, 700); 
});
$('.steps-content__step--6').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--6').addClass('active');
  mySwiper3.slideTo(5, 700); 
});

// Валидация форм
// Control Form
$('.control__form').validate({
  errorElement: "div",
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    controlUserName: {
      required: true,
      minlength: 2,
    },
    controlUserPhone: "required",    
    controlCheckbox: {
      required: true,
    },  
  },
  messages: {
    controlUserName: {
      required: "Заполните поле",
      minlength: "Имя должно содержать не менее двух символов",
    },
    controlUserPhone: "Заполните поле",
    controlCheckbox: "Подтвердите соглашение на обработку Ваших данных",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "controlSend.php",
      data: $(form).serialize(),
      // dataType: "dataType",
      success: function (response) {
        $(form)[0].reset();
        controlForm.addClass('control__form--hidden');
        controlSuccessMessage.addClass('control__success-message--visible');
      }
    });
  }
});

// Modal Form
$('.modal__form').validate({
  errorElement: "div",
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    modalUserName: {
      required: true,
      minlength: 2,
    },
    modalUserPhone: "required",
    // compound rule
    modalUserEmail: {
      required: true,
      email: true
    },
    modalCheckbox: {
      required: true,
    },
  },
  messages: {
    modalUserName: {
      required: "Заполните поле",
      minlength: "Имя должно содержать не менее двух символов",
    },
    modalUserPhone: "Заполните поле",
    modalUserEmail: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    modalCheckbox: "Подтвердите соглашение на обработку Ваших данных",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "modalSend.php",
      data: $(form).serialize(),
      // dataType: "dataType",
      success: function (response) {
        $(form)[0].reset();
        modalTitle.addClass('modal__title--hidden');
        modalForm.addClass('modal__form--hidden');
        modalSuccessMessage.addClass('modal__success-message--visible');
      }
    });
  }
});

// Sample Form
$('.sample__form').validate({
  errorElement: "div",
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    sampleUserName: {
      required: true,
      minlength: 2,
    },
    sampleUserPhone: "required",
    // compound rule
    sampleUserEmail: {
      required: true,
      email: true
    },
    sampleCheckbox: {
      required: true,
    },
  },
  messages: {
    sampleUserName: {
      required: "Заполните поле",
      minlength: "Имя должно содержать не менее двух символов",
    },
    sampleUserPhone: {
      required: "Заполните поле",
    },
    sampleUserEmail: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    sampleCheckbox: "Подтвердите соглашение на обработку Ваших данных",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "sampleSend.php",
      data: $(form).serialize(),
      // dataType: "dataType",
      success: function (response) {
        $(form)[0].reset();
        sampleTitle.addClass('sample__title--hidden');
        sampleForm.addClass('sample__form--hidden');
        sampleSuccessMessage.addClass('sample__success-message--visible');
      }
    });
  }
});

// Footer Form
$('.footer__form').validate({
  errorElement: "div",
  errorClass: "invalid",
ignore: ":disabled",
  rules: {
      // simple rule, converted to {required:true}
    footerUserName: {
      required: true,
      minlength: 2,
    },
    footerUserPhone: "required",
      // compound rule
      footerUserText: {
      required: true,
    },
    footerCheckbox: {
      required: true,
    },
  },
  messages: {
    footerUserName: {
      required: "Заполните поле",
      minlength: "Имя должно содержать не менее двух символов",
    },
    footerUserPhone: "Заполните поле",
    footerUserText: {
      required: "Заполните поле",
    },
    footerCheckbox: "Подтвердите соглашение на обработку Ваших данных",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "footerSend.php",
      data: $(form).serialize(),
      // dataType: "dataType",
      success: function (response) {
        // console.log('Ajax сработал. Ответ сервера: ' + response);
        // alert('Форма отправлена, ждите звонка!');
        $(form)[0].reset();
        footerTitle.addClass('footer__title--hidden');
        footerForm.addClass('footer__form--hidden');
        footerSuccessMessage.addClass('footer__success-message--visible');
      }
    });
  }
});

// Маска для номера телефона
$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

});