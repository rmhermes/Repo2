
const valor = parseInt(prompt('ingrese un valor comprendido entre 1 y 5', ''));


switch (valor) {
    case 1:
        document.write('Soy el número 1')
        break;
    case 2:
        document.write('Soy el número 2')
        break;
    case 3:
        document.write('Soy el número 3')
        break;
    case 4:
        document.write('Soy el número 4')
        break;
    case 5:
        document.write('Soy el número 5')
        break;
    default:
        document.write('Debe ingresar un número')
        break;
    }

    const veces = 0;

    if(veces< 4){
        alert ("Mensaje")
        veces++
    }

