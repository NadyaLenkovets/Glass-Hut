

 // При нажатии кнопки идти вверх;

document.getElementById('button-up').onclick = function scrollUpFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
}
   
   
// Кнопка появляется, когда проскролили 500px
   
window.onscroll = function() {scrollFunction()}
   
function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById('button-up').style.opacity = "1";
            
   } else {
            document.getElementById('button-up').style.opacity = "0";
   }
}      



$(document).ready(function(event) {
   $('.accordion__header').click(function(event) {
      if($('.accordion__inner').hasClass('one-open')) {
         $('.accordion__header').not($(this)).removeClass('active');
         $('.accordion__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});   

$(document).ready(function(event) {
   $('.book-accordion__header').click(function(event) {
      if($('.book-accordion__inner').hasClass('one-open')) {
         $('.book-accordion__header').not($(this)).removeClass('active');
         $('.book-accordion__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });

   $('.book-accordion__plus').click(function(event) {
      $(this).toggleClass('active');
   });
});  




$(function () {
   
/* Slider slick  #itestimonials-slider
      =============================*/

   $('#outside-slider, #inside-slider, #practicalities-slider, #vesterborg-slider, #activities-slider, #nature-slider, #town-slider').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      
      // adaptiveHeight: true,
      fade: true,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               arrows: false,
            }
         }
      ]
   }); 

   $('#outside-slider, #inside-slider, #practicalities-slider, #vesterborg-slider, #activities-slider, #nature-slider, #town-slider').on('afterChange', function (event, slick, currentSlide) {
      $(".current-slide").text('0' + (currentSlide + 1));
   });


   // burger-menu

   $('.header__burger').click(function (event) {
      $('.header__burger,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
      if ($('.header__nav').hasClass('active')) {
         $('.header__link').click(function (event) {
            $('.header__burger,.header__nav').removeClass('active');
            $('body').removeClass('lock');
         });   
      };
   });
});




// addGuests

let guestPlus = document.querySelector('.check-menu__plus');
let guestMinus = document.querySelector('.check-menu__minus');
let guests = document.querySelector('.check-in-guests');
function checkGuests() {
   if (+guests.innerHTML <= 1) {
      guestMinus.disabled = true;
   } else {
      guestMinus.disabled = false;
   }
};
checkGuests();
guestPlus.addEventListener('click', function plusGuest() {
   guests.innerHTML = +guests.innerHTML + 1;
   checkGuests();
   checkDefaultPrice();
});
guestMinus.addEventListener('click', function minusGuest() {
   
   guests.innerHTML = +guests.innerHTML - 1;
   checkGuests();
   checkDefaultPrice();
});

// calcPrice

let defaultPrice = document.querySelector('.default-price');
let nights = document.querySelector('.nights').innerHTML;
let additionalPrice = document.querySelector('.price-additional__price');

function checkDefaultPrice() {
   defaultPriceChecked = (3.200 * guests.innerHTML).toFixed(3);
   defaultPrice.innerHTML = defaultPriceChecked;
}
checkDefaultPrice();

function calcAdditionalPrice() {
   let defaultNightsPrice = (defaultPrice.innerHTML * nights).toFixed(3);
   additionalPrice.innerHTML = defaultNightsPrice + 'kr';
}
calcAdditionalPrice();


