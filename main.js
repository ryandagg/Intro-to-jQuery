$(document).ready(function() {
	$(".textButton").click(function() {
		$("body").append(" Nice!");
	})	
})

$(document).ready(function() {
	$(".h1Button").click(function() {
		$("body").append(
			$("<h1></h1").text("Worked?")
		);
	})
})

$(document).ready(function() {
	$(".ulButton").click(function() {
		$("body").append(
			$("<ul></ul>").append(
				$("<li></li><li></li><li></li>")
			)
		)
	})
})