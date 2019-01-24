//EVENTOS
function evento(arg){
	console.log('Hola soy un evento de click');
	console.log(arg.screenX);

}

//RECOMENDADO
var foco =document.getElementById('focus');
foco.addEventListener('click',evento, false);

//BLOQUEAR EL MENU CONTEXTUAL Y EMITIR UN ALERT

document.onmousedown= function(arg){
	if (arg.buttons === 2) {
	alert('Accion no Disponible');
		
	} else {
	console.log(arg);
		
	}


}
window.location.