$("h2").append("!")

$(document).ready(function(){
	$("a").click(function(){
		return confirm("Some things, once seen, can not be unseen. \nProceed?")
	})
})