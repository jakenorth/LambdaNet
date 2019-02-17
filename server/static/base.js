function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $('select.dropdown').dropdown();
  $("#runBTN").click(function(){
  	funcName = $("#funcIN").val();
  	args = $("#argsIN").val();
  	$.get("/api/nametofunc/"+funcName, function(payload){
  		if (args == ""){
	  		$.get("/api/run/"+payload, function(result){
	  			$("#out").html(result);
	  		});
	  	}
	  	else {
	  		$.get("/api/run/"+payload+"/"+args, function(result){
	  			$("#out").html(result);	  		
	  	}
	  }
  	});

  });
  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").val();
      func = $("#functionIN").val();
      $.get("/api/func/"+name+"/"+encodeURIComponent(func));
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});