function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $('select.dropdown').dropdown();
  $("#runBTN").click(function(){
  	alert("You clicked it!");
  	funcName = $("#funcIN").val();
  	args = $("#argsIN").val();
  	$.get("/api/nametofunc/"+funcName, function(payload){
  		$.get("/api/run/"+payload+"/"+args, function(result){
  			alert(result);
  		});
  	});

  });
  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").val();
      func = $("#functionIN").val();
      $.get("/api/func/"+name+"/"+func);
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});