
$(".card-body").hide();

$(".card-header").on("click",function(){
  $(this).nextAll().slideToggle();
})
