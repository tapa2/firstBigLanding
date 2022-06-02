$(document).ready(function(){
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 1000,
      autoplay:true,
      autoplaySpeed:3500,
      easing:'ease'
   });
});














//-------BURGER---------------
   $(document).ready(function(){
      $('.header__burger').click(function(event) {
         $('.header__burger,.header__menu,.header__link,.header__list').toggleClass('active')
         $('body').toggleClass('lock');
      });
   });
//----------------------------



//-------SPOILERS---------------
//$(document).ready(function() {
//	$('.block__title').click(function(event) {
//      if ($('.block').hasClass('one')) {
//         $('.block__title').not($(this)).removeClass('active');
//         $('.block__text').not($(this).next()).slideUp(300);         
//      }
//		$(this).toggleClass('active').next().slideToggle(300);
//	});
//});
//----------------------------


//-------IBG------------------
function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();
//----------------------------

