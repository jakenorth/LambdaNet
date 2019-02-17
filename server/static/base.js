function count(){
  $(".counter .value").load("/api/count");
}

$( document ).ready(function(){
	$("#sendingLoader").hide();
  count();
  $(".counter").click(count);
  $('select.dropdown').dropdown();
  $("#runBTN").click(function(){
  	funcName = $("#funcIN").val();
  	args = $("#argsIN").val();
  	$("#waitingLoader").hide();
  	$("#sendingLoader").show();
  	$.get("/api/nametofunc/"+funcName, function(payload){
  		
  		if (args == ""){
	  		$.get("/api/run/"+encodeURIComponent(payload), function(result){
	  			$("#sendingLoader").hide();
	  			$("#out").html(result);
	  		});
	  	}
	  	else {
	  		$.get("/api/run/"+encodeURIComponent(payload)+"/"+encodeURIComponent(args), function(result){
	  			$("#out").html(result);
	  			$("#sendingLoader").hide();	  		
	  	})
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