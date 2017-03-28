// Exercice 1

$("#removeDiv").click(function() {
	$("#remove").hide(2000); 
});


// Exercice 2

$("#setText").change(function() {
	$("#needText").append($("#setText").val());
});

// Exercice 3

$("#setColor").click(function() {
	$(".yellow").css("background-color", "red");
});
