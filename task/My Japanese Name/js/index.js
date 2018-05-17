//slick
$('.slider_main').slick({
  autoplay: true,
  dots: true,
  dotsClass: 'slick-dots',
  draggable: false
});
$(".slider_main button").remove();
var slider = $('.slider_steps');
var navi = $('.slider_navi ul');
var navi_li = $('.slider_navi ul li');

//steps-slick
//index番号を付与
$('.slider_navi ul li').each(function () {
  slideIndex = $(this).index();
  $(this).attr('slideIndex', slideIndex);
});
//スライダー本体
$('.slider_steps').slick({
  autoplay: true,
  draggable: false
});
//現在のスライドのindexを取得
var length = $('.slider_navi ul li').length;
var current_slide;

//スライド移動の直前に発火
$(slider).on('beforeChange', function () {
  var slideIndex = slider.slick('slickCurrentSlide') + 1;
  var current_slide;
  if (slideIndex < length) {
    current_slide = slideIndex;
  } else {
    current_slide = 0;
  }
  for (i = 0; i <= length; i++) {
    var navi_index = $(navi_li).eq(i).attr('slideIndex');
    var navieq = $(navi_li).eq(i);
    //スライドのindexとサムネイルのindexが同じ場合にクラスactiveを追加する。
    if (navi_index == current_slide) {
      $(navieq).addClass('active')
    } else {
      $(navieq).removeClass('active')
    };
  };

  //クリックで該当スライドへ移動
  $(navi_li).on("click", function clickNavi() {
    $(navi_li).removeClass("active");
    $(this).addClass("active");
    var currentIndex = $(this).attr("slideIndex");
    $(slider).slick('slickGoTo', currentIndex);
    return false;
  });

});


//英語版⇔日本語版画像切り替え
$('header ul li').each(function () {
  $(this).on('click', function () {
    var Lang = $(this).attr('class');
    //英語に切り替え
    if (Lang == 'EN') {
      //あなたの漢字どんな
      for (i = 1; i <= 3; i++) {
        var slick_index = $(".slider_main .slick-slide .img_trans img[src='images/LP"+i+".jpg']");
        $(slick_index).attr('src', 'images/LP' + i + 'en.jpg');
      };
      //myjapanesenameとは
      $('#about .img_trans img').attr('src', 'images/MyJapaneseNameeng.png');
      //steps
      for (i = 1; i <= 3; i++) {
        var t = i - 1;
        $('#steps .grid .img_trans:eq(' + t + ') img').attr('src', 'images/step' + i + 'en.png');
      };
      //ポップアップストアがオープン
      $("#open ul li img[alt='text']").attr('src', 'images/text1en.png');
    }
    //日本語に切り替え
    else{
      //あなたの漢字どんな
      for (i = 1; i <= 3; i++) {
        var slick_index = $(".slider_main .slick-slide .img_trans img[src='images/LP"+i+"en.jpg']");
        $(slick_index).attr('src', 'images/LP' + i + '.jpg');
      };
      //myjapanesenameとは
      $('#about .img_trans img').attr('src', 'images/MyJapaneseName.png');
      //steps
      for (i = 1; i <= 3; i++) {
        var t = i - 1;
        $('#steps .grid .img_trans:eq(' + t + ') img').attr('src', 'images/step' + i + '.png');
      };
      //ポップアップストアがオープン
      $("#open ul li img[alt='text']").attr('src', 'images/text1.png');
    };
  });
});
