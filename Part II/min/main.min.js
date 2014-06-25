$("h2").append("!")

$(document).ready(function(){
	$("a").click(function(){
		console.log($(this))
		if(!(confirm("Some things, once seen, can not be unseen. \nProceed?"))){
			$(this).contents().unwrap()
			return false;
		}
	})
})