$(function(){
  $("#m1,#m2,#m3,#m4,#m5").hide();

  $(".megamenu-list").mouseover(function(){
    $(this).children("ul").show()
  }
);
  $(".megamenu-list").mouseout(function(){
    $(this).children("ul").hide()
  }
);
});//function


