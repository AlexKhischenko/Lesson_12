$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');
  let scrollUpBtn = $('.scrollup');

  let closeSuccessBtn = $('.modal-success__close');
  let modalSuccess = $('.modal-success');
  let modalTitle = $('.modal__title');
  let modalForm = $('.modal__form');
  let modalSuccessMessage = $('.modal__success-message');

  // Lazy load для картинок
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
    img.removeAttribute('data-src');
    };
  });

  //Подключение библиотеки анимации
  new WOW().init();
  
  // Плавная прокрутка к якорю
  const navbar = $('.header');
  $('.nav__item').click(function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').animate({scrollTop: $(anchor.attr('href')).position().top - navbar.outerHeight()}, 1000);
  });

  // Плавная прокрутка к якорю по нажатию на "Листайте вниз"
  const scrollDown = $('.hero__scroll-down');
  scrollDown.click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $(scrollDown.attr('href')).position().top - navbar.outerHeight()}, 1000);
  });

  // Плавная прокрутка к якорю по нажатию на "Логотип"
  const getHome = $('.logo');
  getHome.click(function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').animate({scrollTop: $(anchor.attr('href')).position().top - navbar.outerHeight()}, 1000);
  });

  // Вызов модального окна любой из кнопок
  modalBtn.click( function () {
    modal.toggleClass('modal--visible');
  });

  // Сброс полей модального окна после закрытия
  function resetModalFormInputs () {
    $('.modal__form')[0].reset();
    if (modalSuccessMessage.hasClass('modal__success-message--visible')) {
      modalSuccessMessage.removeClass('modal__success-message--visible');
    };
    if (modalTitle.hasClass('modal__title--hidden')) {
      modalTitle.removeClass('modal__title--hidden');
    };
    if (modalForm.hasClass('modal__form--hidden')) {
      modalForm.removeClass('modal__form--hidden');
    };
    modal.toggleClass('modal--visible');
  };

  // Закрытие модального окна крестиком
  closeBtn.click( function () {
    resetModalFormInputs();
  });

  // Закрытие модального окна об успешной отправке крестиком
  closeSuccessBtn.click( function () {       
    modalSuccess.removeClass('modal-success--visible');      
  });
  
  // Закрытие модального окна клавишей Esc
  $(document).keydown( function(event) {
    if (modal.hasClass('modal--visible')) {
      if (event.which == 27) {
        resetModalFormInputs();
      };
    };
  });

  // Закрытие модального окна кликом вне модального окна
  modal.click( function(e) {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
      resetModalFormInputs();
    };
  });

  // Кнопка возврата в начало страницы
  $(window).scroll( function () {
    if (window.matchMedia("(max-width: 992px)").matches) {
      scrollUpBtn.removeClass('scrollup--visible');
    }
    else {
      if ($(this).scrollTop() > 150) {
        scrollUpBtn.addClass('scrollup--visible');
        scrollUpBtn.fadeIn();
      } else {
        scrollUpBtn.fadeOut();
        scrollUpBtn.removeClass('scrollup--visible');
      }
    }        
  });
  scrollUpBtn.click( function () {
    $('html').animate({scrollTop : 0}, 900);
  });


  // Маска для номера телефона модального окна
  $(function() {
    $('#modal-user-phone').data('holder', $('#modal-user-phone').attr('placeholder'));    
    $('#modal-user-phone').focusin(function(){
      $('#modal-user-phone').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
      $(this).attr('placeholder','+7 (___) ___-__-__');
    });
    $('#modal-user-phone').focusout(function(){
      $(this).attr('placeholder', $(this).data('holder'));
      $('#modal-user-phone').cleanVal();
    });    
  });   
  // Маска для номера телефона секции "Онлайн контроль"
  $(function() {
    $('#control-user-phone').data('holder', $('#control-user-phone').attr('placeholder'));    
    $('#control-user-phone').focusin(function(){
      $('#control-user-phone').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
      $(this).attr('placeholder','+7 (___) ___-__-__');
    });
    $('#control-user-phone').focusout(function(){
      $(this).attr('placeholder', $(this).data('holder'));
      $('#control-user-phone').cleanVal();
    });    
  });   
  // Маска для номера телефона секции "Вызов замерщика"
  $(function() {
    $('#sample-user-phone').data('holder', $('#sample-user-phone').attr('placeholder'));    
    $('#sample-user-phone').focusin(function(){
      $('#sample-user-phone').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
      $(this).attr('placeholder','+7 (___) ___-__-__');
    });
    $('#sample-user-phone').focusout(function(){
      $(this).attr('placeholder', $(this).data('holder'));
      $('#sample-user-phone').cleanVal();
    });    
  });   
  // Маска для номера телефона секции "Остались вопросы"
  $(function() {
    $('#footer-user-phone').data('holder', $('#footer-user-phone').attr('placeholder'));    
    $('#footer-user-phone').focusin(function(){
      $('#footer-user-phone').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
      $(this).attr('placeholder','+7 (___) ___-__-__');
    });
    $('#footer-user-phone').focusout(function(){
      $(this).attr('placeholder', $(this).data('holder'));
      $('#footer-user-phone').cleanVal();
    });    
  });   


  // Инициализация слайдера "Завершенные проекты"
  var mySwiper1 = new Swiper ('.swiper1', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper1__next',
      prevEl: '.swiper1__prev',
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
      nextEl: '.swiper2-next',
      prevEl: '.swiper2-prev',
    },
  });
  var mySwiper4 = new Swiper ('.swiper4', {
    fadeEffect: {
      crossFade: true
    },
    effect: 'fade',  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper4__next',
      prevEl: '.swiper4__prev',
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

  // Переключение активного раздела по кнопке вперед
  getNextClick.click( function () {
    getAllSteps.each(function (index, element) {
      $(element).removeClass('active');    
    });
    for (i = 1; i < 7; i++) {
      if (mySwiper3.activeIndex === i) {
        let b = mySwiper3.activeIndex + 1;
        $('.steps-content__step--' + b ).addClass('active');
      }
    };
  });
  // Переключение активного разеда по кнопке назад
  getPrevClick.click( function () {
    getAllSteps.each(function (index, element) {
      $(element).removeClass('active');    
    });
    for (i = 0; i < 6; i++) {
      if (mySwiper3.activeIndex === i) {
        let b = mySwiper3.activeIndex + 1;
        $('.steps-content__step--' + b ).addClass('active');
      }
    };
  });

   // Переключение слайдеров нажатием на раздел
  $('.steps-content__step--1').click( function () {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--1').addClass('active');
    mySwiper3.slideTo(0, 700); 
  });

  $('.steps-content__step--2').click( function () {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--2').addClass('active');
    mySwiper3.slideTo(1, 700); 
  });
  $('.steps-content__step--3').click( function () {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--3').addClass('active');
    mySwiper3.slideTo(2, 700); 
  });
  $('.steps-content__step--4').click( function () {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--4').addClass('active');
    mySwiper3.slideTo(3, 700); 
  });
  $('.steps-content__step--5').click( function () {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--5').addClass('active');
    mySwiper3.slideTo(4, 700); 
  });
  $('.steps-content__step--6').click( function () {
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
      controlUserPhone: {
        required: true,
        minlength: 17,
      },    
      controlCheckbox: {
        required: true,
      },  
    },
    messages: {
      controlUserName: {
        required: "Заполните поле",
        minlength: "Введите не менее 2 символов",
      },
      controlUserPhone: {
        required: "Заполните поле",
        minlength: "Введите не менее 10 цифр"
      },
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
          modalSuccess.addClass('modal-success--visible');
          ym('61237666', 'reachGoal', 'broadcast'); return true;
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
      modalUserPhone: {
        required: true,
        minlength: 17,
      },
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
        minlength: "Введите не менее 2 символов",
      },
      modalUserPhone: {
        required: "Заполните поле",
        minlength: "Введите не менее 10 цифр"
      },
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
          ym('61237666', 'reachGoal', 'callback'); return true;
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
      sampleUserPhone: {
        required: true,
        minlength: 17,
      },
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
        minlength: "Введите не менее 2 символов",
      },
      sampleUserPhone: {
        required: "Заполните поле",
        minlength: "Введите не менее 10 цифр"
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
          modalSuccess.addClass('modal-success--visible');
          // sampleTitle.addClass('sample__title--hidden');
          // sampleForm.addClass('sample__form--hidden');
          // sampleSuccessMessage.addClass('sample__success-message--visible');
          ym('61237666', 'reachGoal', 'request'); return true;
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
      footerUserPhone: {
        required: true,
        minlength: 17,
      },
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
        minlength: "Введите не менее 2 символов",
      },
      footerUserPhone: {
        required: "Заполните поле",
        minlength: "Введите не менее 10 цифр"
      },
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
          modalSuccess.addClass('modal-success--visible');
          // footerTitle.addClass('footer__title--hidden');
          // footerForm.addClass('footer__form--hidden');
          // footerSuccessMessage.addClass('footer__success-message--visible');
          ym('61237666', 'reachGoal', 'questions'); return true;
        }
      });
    }
  });  

  // Перелистывание галереи с картинками
  let gallary = $('.gallary');
  let implementListItem = $('.implement__list-item');
  implementListItem.click(function () {
    implementListItem.removeClass('implement__list-item--active');
    $(this).addClass('implement__list-item--active');
    gallary.fadeOut(500);
    gallary.addClass('gallary--hidden');
    // gallary.fadeIn(500);
    for (i = 1; i < 12; i++) {
      if ($(this).hasClass('item-' + i)) {
        $('.gallary-' + i).fadeIn(500);
        $('.gallary-' + i).removeClass('gallary--hidden');
      }
    };  
  })

  // Встраивание видео
  var player;
  $('.video__play').click( function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'cu_l1JNB5ds',
      events: {
        'onReady': videoPlay
      }
    });
  });
  function videoPlay (event) {
    event.target.playVideo();
  };

  // Загрузка большой карты при клике
  let mapBig = $('.footer__map--big');
  mapBig.click( function() {
    mapBig.html('<iframe class="testmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.621762225179!2d39.72301357360925!3d47.24468603957375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2sde!4v1584657018474!5m2!1sru!2sde" width="100%" height="465"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
  });

  // Загрузка малой карты при клике
  let mapSmall = $('.footer__map--small');
  mapSmall.click( function() {
    mapSmall.html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.621762225179!2d39.72301357360925!3d47.24468603957375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2sde!4v1584657018474!5m2!1sru!2sde" width="100%" height="255"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
  });
  
});