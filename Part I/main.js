//  notes:
// .text("Words in a list! With MAGIC!!!")

$(document).ready(function() {
	$(".textButton").click(function() {
		$("body").append(" Nice!");
	})	
})

$(document).ready(function() {
	$(".h1Button").click(function() {
		$("body").append(
			$("<h1>Worked</h1>")
		);
	})
})

$(document).ready(function() {
	$(".ulButton").click(function() {
		$("body").append(
			$("<ul></ul>").append(
				$("<li>Words in a list!</li><li>With MAGIC!!!</li><li></li>")
			)
		)
	})
})