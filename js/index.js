$(document).ready(function(){
  $('.buttonhome button').click(function(e){
    //zatrzymuje dzialanie buttona jako link
    e.preventDefault();
    location.href='#products';
  });
  
  $('.box-product').click(function(e){
    let target = e.target;
    $(target).children('div.box-description').removeClass('hidden');
    // $(target).css("transform", "none");
  });
  $('.box-description').click(function(e){
    let target = e.target;
    $(target).addClass('hidden');
  });
});
