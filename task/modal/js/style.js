$('.modal-content').hide();

$(function(){
  $('.btn-info').on("click",function(){
    $(".modal-content").fadeIn("slow");
    $(".modal-content").scrollTop(0);
  });
  //backボタン//
  $(".btn-warning").on("click",function(){
    $(".modal-content").fadeOut("slow");
  })
});//function



