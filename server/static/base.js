function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});