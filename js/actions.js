$("#entrada").click(function(){
	if ($("#Usuario").val() == "victor" && $("#Contraseña").val() == 'jish'){
		window.location = "./pages/inicio.html"
	}
	else{
		swal.fire('Usuario o Contraseña incorrecta');
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});
