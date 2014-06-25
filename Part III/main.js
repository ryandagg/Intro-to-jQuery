$(document).on('ready', function() {
	$(".BFButton").click(function(){
		// how to do this?
		// create an element and specifiy stuff, including css
		// first create the div, then worry about position: fixed, then close button
		$("body").append("<div class ='popup'>stuff</div>")
		$(".popup").css({'background-color': 'grey', 'position': 'fixed', "width": "90%", 
			"height": "90%", "top": "30px", "left": "30px"})
	});
})	