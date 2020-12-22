$(function(){

  $('.social__dropdown').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('social__dropdown--active');
  });

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.header__info').slideToggle();
  });

});