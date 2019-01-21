// CLOSURE
    /*Un closure o clausura es la combinación de una función y el ámbito léxico
     en el que se declaró dicha función. 
     Es decir los closures o clausuras son funciones que manejan variables independientes. 
     En otras palabras, la función definida en el closure "recuerda" el ámbito en el que se ha creado.*/
    //EJEMPLO 1
     function funcion1(){
        var nombre = 'Marcelo';
       
        function interna(){
            console.log(nombre);
        }
        interna();
     }
    funcion1();

    //EJEMPLO 2
    function funcion2() {
        var nombre = "Bautista";
        function muestraNombre() {
          console.log(nombre);
        }
        return muestraNombre;
      }
      
      var miFuncion = funcion2();
      miFuncion(); 

    //EJEMPLO 3
    function sumar(x) {
        return function(y) {
          return x + y;
        };
      }
      
      var suma5 = sumar(5);
      var suma10 = sumar(10);
      
      console.log(suma5(2));  // muestra 7
      console.log(suma10(2)); // muestra 12 

      //EJEMPLO4
        for (let index = 0; index <=5; index++) {
            setTimeout(function(){
                console.log(index);
            }, index *2000);
       
            
        }
        console.log('Fin de procedimiento');