/* console.log imprime en consola // document.write imprime en pantalla */
/* parseInt convierte string en valor entero */ /* prompt ingresar contenido */
const num1 = parseInt(prompt('Ingrese el primer número', ''));
const num2 = parseInt(prompt('Ingrese el segundo número', ''));
const num3 = parseInt(prompt('Ingrese el tercer número', ''));

if(num1>num2 && num1>num3){
    document.write(`el número mayor es ${num1}`)
}
else if(num2>num3){
    document.write(`El número mayor es ${num2} `)
}
else {
    document.write(`El número mayor es ${num3} `)
}
/* SE VA DESCARTANDO POSIBILIDADES IF 3 OPC - ELSE IF 2 OPC -  ELSE 1 OPC- */

