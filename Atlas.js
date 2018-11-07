
$('.message a').click(function() {
$('form').animate({height:"toggle", opacity:"toggle"},"slow")
});

function Redirect() {
	var username = document.querySelector("#Username").value
	var pass = document.querySelector("#pass").value

	if(pass == "Atokad4795"){
        window.location="Home.html";
	}
			
}
