

const nombre= 'Ramiro';
const edad= 28;

console.log(`Hola ! ${nombre}, tenés ${edad} años`);

const edad1= prompt('Ingrese su edad');
const edad2 = prompt('Ingrese su edad');

const mensaje1 = `la cuota para personas de ${edad1} es de ${edad1 >=21 ?500: 300}`   //operador ternario 
const mensaje2 = `la cuota para personas de ${edad2} es de ${edad2 <=6 ?100:400}`

 document.write(mensaje1 + '<br>');

document.write(mensaje2)