function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);

  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").val();
      func = $("#functionIN").val();
      $.ajax*
      alert(func);
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});