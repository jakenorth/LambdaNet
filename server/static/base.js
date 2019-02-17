function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);

  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").value();
      func = $("#functionIN").value();
      alert(name);
      alert(func);
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});