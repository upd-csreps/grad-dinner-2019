const scr = "https://script.google.com/macros/s/AKfycbxdHA0DTJQZB8DZDoEMbK3uJaiINW1CMgqO7XlzLDQixIRwEuoC/exec";

function gdinnerResponse() {
    
	let name = $("#full-name").val();
	let studentno = $("#student-no").val();
	let contactno = $("#contact-no").val();
	let email = $("#email").val();
	let gradmsg = $("#grad-msg").val();
	let volcmsg = $("#volc-msg").val();
	
	var url = scr+"?callback=callback_func&name="+name+"&studentno="+studentno+"&contactno="+contactno+"&email="+email+"&gradmsg="+gradmsg+"&volcmsg="+volcmsg+"&action=i";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

}

function callback_func(e){

	console.log(e);
	if (e.result == "true"){
		$(".form-inputs").html("Your response has been recorded.");
		$(".alert").addClass("d-none");
	}
	else{
		$(".alert").removeClass("d-none");
	}

	$("html, body").animate({ scrollTop: $(".grad-dinner-bg").outerHeight() }, 600);
}

$('.reg-button').click(function(){
    $("html, body").animate({ scrollTop: $(".grad-dinner-bg").outerHeight() }, 600);
    return false;
});

$('.submit-btn').click(function(){
    gdinnerResponse();
});