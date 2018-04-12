
$(function(){
  var slideNum = 0 ;
  var slideWidth = $(".image").outerWidth();
  var slides = $(".image").length;

  //imageにインデックス番号を付与
  $(".image").each(function(){
    var slideIndex = $(this).index();
    $(this).attr("slideindex",slideIndex);
  })

  $(".slider").css("width",slideWidth*slides)

  //アニメーション(スライド)
  var slideShow = function(){
    $(".slider").animate({"left":slideNum*(-slideWidth)},"slow");
    slideNum++;

    //activeclass追加
    if(slideNum >=2){
    $(".active+.image").addClass("active");
    $(".active:eq(0)").removeClass("active");
    }
    else{
    $(".image:eq(0)").addClass("active");
    $(".active:eq(1)").removeClass("active");
    }

    //スライドが最後までいったら最初に戻る
    if(slideNum >= slides){
       var slideBack = $(".slider").css("left",0);
      var promise = Promise.resolve(slideBack)
       promise.then(function(){
        slideNum = 0
      }
      );
    }

  };
  //3秒ごとにスライドが切り替わる
 var interval = setInterval(slideShow,3000);

        //戻るボタン
  $(function(){
  $(".reverse").on("click",function(){
    var activeIndex = $("li[class*='active']").attr("slideindex")
        if(slideNum >= 2){
          //スライドショーのタイミングをリセット
       clearInterval(interval);

  $(".slider").animate({"left":(activeIndex-1)*(-slideWidth)},"normal");
    slideNum--;
          var preIndex = activeIndex-1
    $(".image[slideindex="+ preIndex +"]").addClass("active");
    $(".active:eq(1)").removeClass("active");
          //スライド再開

              }
  });
});

          //すすむボタン
  $(function(){
  $(".next").on("click",function(){
    var activeIndex = $("li[class*='active']").attr("slideindex")
        if(slideNum < slides){
  $(".slider").animate({"left":slideNum*(-slideWidth)},"normal");
    slideNum++;
    $(".active+.image").addClass("active");
    $(".active:eq(0)").removeClass("active");
              }
  });
});

    }
  );



