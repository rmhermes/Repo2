
//JSON = ESTRUCTURA DE OBJETOS /LISTA DE.
const datosUsuario = [
    {
        nombre: 'Ramiro', password: 'hola123'
    },
    {
        nombre: 'Juana', password: 'asdjur!'
     },
    {
        nombre: 'Fernando', password: 'Farguito01'
    }, 
    {
        nombre: 'Rodrigo', password: 'lkjdlkgfs'
    }
    
]
const soloPassword = datosUsuario.map(function(e){
    return e.password;
})              //recibir varios valores e imprimir seleccionados

document.write(soloPassword);

