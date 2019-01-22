//OBJETO
    /*avaScript está diseñado en un paradigma basado en objetos. 
    Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor. 
    Un valor de propiedad puede ser una función, la cual es conocida entonces como un método del objeto. 
    Además de los objetos que están predefinidos en el navegador, tu puedes definir tus propios objetos.
    Este capítulo describe como usar objetos, propiedades, funciones, y métodos, y cómo crear tus propios
    objectos.*/

    //CREACION DE OBJETO PARTE I
       let opinion = 'Este es uno de los libros recomendados';
        let libro ={
            titulo : 'Javascript',
            autor: 'Marcelo Peralta',
            genero: 'tecnologia',
            puntuacion: 9,
            opinion: opinion,
            etiquetas: ['closure', 'objetos', 'variables', 'funciones',],
            imprimirDatos: function(){
                for (const propiedad in libro) {
                    console.log(propiedad + ' : ' + libro[propiedad]);
                                         
                }
            },
            funcionThis: function(){
                console.log(this);
            }

        }

        console.log(libro.autor);
        console.log(libro.opinion);
        console.log(libro.etiquetas[0]);
        libro.imprimirDatos();
        libro.funcionThis();
            //CREACION DE OBJETO PARTE II
            //creando objeto de esta forma estariamos utilizando la herencia

        var book = Object.create(libro);
        book['version']=1.1;
        book['autor'] = 'Jonathan';

        console.log(book.titulo + '\n'+
                    book.version);
        //CREACION DE OBJETOS PARTE III
        //creando objeto de esta forma estariamos instanciando objetos de la funcion Persona y cada objeto
        // tendria una copia de sus atributos y metodos.
        function Persona(nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        };

        var marcelo = new Persona('Lautaro', 'Peralta', 12);
        marcelo['Profesion'] = 'docente';
        console.log(marcelo.nombre + ' \n'+ marcelo.apellido + ' \n'+ marcelo.Profesion);