$(function(){

	$("#order-form").submit(function(event){
		event.preventDefault();
		$.ajax({
			url: "ajax.php",
			method: "post",
			data: {name: $("#name").val(), drink: $("#drink").val() },
			success: function(response){
				$("#msg").html(response);
			}
		});
	});
});