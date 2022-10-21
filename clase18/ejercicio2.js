
//JSON = ESTRUCTURA DE OBJETOS /LISTA DE.


const alumnos = [
    {
        nombre: 'Ramiro', edad: 2
    },
    {
        nombre: 'Fernando', edad: 29
    }, {
        nombre: 'Rodrigo', edad: 35
    }, {
        nombre: 'Juana', edad: 9
    }, {
        nombre: 'Mora', edad: 8
    }

]

const menores = alumnos.filter(
    alumno => alumno.edad <=18)

console.log(menores);

for(let i=0; i<menores.length; i++)
{
    document.write(`<p>Alumno: ${menores[i].nombre}, cuya edad es ${menores[i].edad}</p>`)
}