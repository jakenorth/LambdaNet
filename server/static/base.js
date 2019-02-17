function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $('.ui.modal').onApprove(function(){
  	alert("You approved it!")
  })
  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});