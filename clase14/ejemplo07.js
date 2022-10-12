

let x = 1;   /* valor inicial */
const cuantos = 5;   /* tope cantidad */
let suma = 0;  /* el valor se va a sumar con los datos ingresados */

while ( x <= cuantos){
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`, ''));
    suma += valor;
    x++
}

document.write(`La suma de los valores es ${suma}`)