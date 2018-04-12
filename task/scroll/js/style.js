//スクロール//
$("a[href^='#']").on("click",function(){
  var speed = 400;
  var href = $(this).attr("href");

  var position = $(href).offset().top;
  $("html,body").animate({scrollTop:position},speed,"swing");
});

//topへ戻る//
$("#p1,#p2,#p3,#p4,#p5").on("click",function(){
  var speed =600;
  $("html,body").animate({scrollTop:0},speed,"swing");
});
