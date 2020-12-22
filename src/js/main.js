$(function(){

  $('.social__dropdown').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('social__dropdown--active');
  });

});