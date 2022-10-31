const nombre = prompt('Ingrese su nombre', '');
const edad = parseInt(prompt('Ingrese su edad(en número)', ''));


function conducir() {
if(Number.isNaN(edad)){
        document.write('La edad ingresada no es válida') 
    }else if (edad >= 18) {
        document.write(`Hola ${nombre}, tienes edad suficiente para conducir.`)
    } else {
        document.write(`Hola ${nombre}, no tienes edad suficiente para conducir.`)
    }
}

conducir();


