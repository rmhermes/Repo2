
//JSON = ESTRUCTURA DE OBJETOS /LISTA DE.

const empleados = [
    {
        nombre: 'Ramiro', trabajo:'desarrollador'
    },
    {
        nombre: 'Roberto', trabajo:'administrativo'
    },
    {
        nombre: 'Luis', trabajo:'administrativo'
    },
    {
        nombre: 'Javier', trabajo:'desarrollador'
    },
    {
        nombre: 'Martín', trabajo:'bombero'
    },
    {
        nombre: 'Juan', trabajo:'maestro'
    }
]

const profesion = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador' // = :asigna // == :busca el que ya está establecido
)
console.log(profesion)

/* for(let i=0; i<profesion.length; i++)
{
    document.write(`Empleado:${profesion[i].nombre}`)
} */

const noDesa = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)
console.log(noDesa)