

const nombre = prompt('Ingrese nombre del alumno', ' ');
const nota = parseInt(prompt('Ingrese su nota', ' '));


console.log(nombre);
console.log(nota);


if(Number.isNaN(nota)){
    document.write('La nota ingresada no es válida')
}
else if(nota >= 4){
    document.write(`${nombre} estás aprobado con ${nota}`)
}                   /* ${} concatenar string */
else {
    document.write(`${nombre} estás desaprobado con ${nota}`)
}