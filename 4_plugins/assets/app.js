$(function(){
  $(".pictures").slick({
    dots: true
  });

    $("#material").rippleria();
    $("#material").click(function(){
      return false;
    })
  
});
