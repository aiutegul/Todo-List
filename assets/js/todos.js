//Check off specific todos by clicking
$("ul").on("click", "li", function() { //add event listener to parent since it exists when page is loaded, we don't have all li's yet
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove(); //removes the li, not span
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //clear out the text input
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#plus-icon").click(function() {
	$("input[type='text']").fadeToggle();
})
