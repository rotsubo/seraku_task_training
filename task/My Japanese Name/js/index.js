//slick
$('.slider_main').slick({
  autoplay:true,
  dots:true,
  dotsClass:'slick-dots'
});
$(".slider_main button").remove();
var slider = $('.slider_steps');
var navi = $('.slider_navi ul');
var navi_li = $('.slider_navi ul li');
//steps-slick
  //index番号を付与
  $('.slider_navi ul li').each(function(){
     slideIndex = $(this).index();
     $(this).attr('slideIndex',slideIndex);
    });
//スライダー本体
  $('.slider_steps').slick({
    autoplay:true
  });
//現在のスライドのindexを取得
var length = $('.slider_navi ul li').length;
var current_slide ;
//スライド移動の直前に発火
$(slider).on('beforeChange',function(){
  var slideIndex = slider.slick('slickCurrentSlide') + 1;
  var current_slide ;
  if(slideIndex < length){
    current_slide = slideIndex ;
  }else{
    current_slide = 0 ;
  }
  for(i=0 ; i<=length ; i++){
    var navi_index = $(navi_li).eq(i).attr('slideIndex');
    var navieq = $(navi_li).eq(i);
    //スライドのindexとサムネイルのindexが同じ場合にクラスactiveを追加する。
  if(navi_index == current_slide){
      $(navieq).addClass('active')
  }else{
    $(navieq).removeClass('active')
  };
    };
});
