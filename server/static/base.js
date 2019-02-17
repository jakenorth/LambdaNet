function count(){
  $(".counter .value").load("/api/count");
}

function log(x){
	$("#metaout").append("\n"+x);
}

$( document ).ready(function(){
  count();
  $(".counter").click(count);
  $('select.dropdown').dropdown();
  $("#runBTN").click(function(){
  	$("#metaout").html("");
  	log("Fetching lambda function from distribution server");
  	funcName = $("#funcIN").val();
  	args = $("#argsIN").val();

  	$.get("/api/nametofunc/"+funcName, function(payload){
  		log("Retrieved lambda function");
  		log("API Endpoint for remote execution: /api/run/"+payload+"/"+args)
  		log("Sending to host 1 of " + $(".counter .value").html());
  		if (args == ""){ 
  			log("- no arguments");
	  		$.get("/api/run/"+encodeURIComponent(payload), function(result){
	  			$("#out").html(result);
	  		});
	  	}
	  	else {
	  		log("- with arguments");
	  		$.get("/api/run/"+encodeURIComponent(payload)+"/"+encodeURIComponent(args), function(result){
	  			$("#out").html(result);
	  	})
	  	}
  	});

  });
  $('.ui.modal')
  .modal({
    onApprove : function() {
      name = $("#nameIN").val();
      func = $("#functionIN").val();
      $.get("/api/func/"+name+"/"+encodeURIComponent(func), function(){window.open("http://l.landin.ml/functions", "_self");});
      
    }
  });


  $("#newfunc").click(function(){
  	$('.ui.modal')
  		.modal('show');
  })
});