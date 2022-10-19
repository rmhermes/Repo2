/* 
const frutas = ['palta', 'zanahoria', 'naranjas', 'peras', 'bananas', 'manzanas', 'uvas', 'anana'];

console.log(frutas.sort()); //ordena alfabeticamente los datos del array


const numeros = [78, 10, 7, 1, 43, 5];
console.log(numeros.sort());  //ordena los números como texto

const num =numeros.sort(function(a,b){
    return a-b;             //ordena los números por valor
})
console.log(num)



console.log(numeros.sort(function(a,b){
    return b-a
}))
 */



const palabras = ['flavia', 'ramiro','abeja', 'casa', 'perro']

console.log(palabras.sort().reverse());  //posible solución

console.log(palabras.sort(function(b,a){
    if(b>a) return -1;
    return 0;
}))
