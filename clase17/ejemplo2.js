
/* 
const items = document.getElementsByClassName('item');

function cambiarVisibilidad(){
    const item = items[2];
    if(item.style.visibility == 0){
        item.style.visibility = 'hidden';
    } else {
        item.style.visibility = '';
    }
}

setInterval(cambiarVisibilidad, 500); // determina el intervalo de la function - (funcion , tiempo de funcion)
 */

const mensaje = document.getElementById('mensaje');

function cambiarVisibilidad(){
    if(mensaje.style.visibility == 0){
        mensaje.style.visibility = 'hidden';
    } else {
        mensaje.style.visibility = '';
    }
}
function ocultarMensaje(){
   
    mensaje.style.display = 'none';

}

setInterval(cambiarVisibilidad, 500); //determina intermitencia de la propiedad
setTimeout(ocultarMensaje, 5000);  //determina en cuanto tiempo desaparece 