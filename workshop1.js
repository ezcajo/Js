function Jugador(nombre){
	this.nombre =nombre;
	this.puntoVida = 100;
	this.poder = 100;
	
	this.curarJugador = function(jugadorAyudado){
		if (this.puntoVida>=40) {
		this.puntoVida-=40;
		jugadorAyudado.puntoVida += 20;
			
		}else{
		console.log('Puntos de Vida insuficiente');
		}
		this.imprimirEstado(jugadorAyudado);
		}

		this.tirarFecha = function(jugadorApuntado){
			if(jugadorApuntado.puntoVida>=40){
			jugadorApuntado.puntoVida-=40;
				
			}else{
				jugadorApuntado.puntoVida=0;
			}
			
		}

	this.imprimirEstado=function(jugadorAyudado){
		console.log(this);
		console.log(jugadorAyudado);
	}

	

};
var gandalf = new Jugador('gandalf');
var legola = new Jugador('legola');
console.log(gandalf);
console.log(legola);

legola.tirarFecha(gandalf);
legola.tirarFecha(gandalf);
legola.tirarFecha(gandalf);
//legola.curarJugador(gandalf);
console.log('total de vida ' + gandalf.nombre +' '+gandalf.puntoVida);
console.log('total de vida ' + legola.nombre +' '+legola.puntoVida);