function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $('select.dropdown').dropdown();
  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").val();
      func = $("#functionIN").val();
      $.ajax*
      $.get("/api/func/"+name+"/"+func)
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});