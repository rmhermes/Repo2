const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if(e.currentTarget.nombre.value == ''){
        alert('El campo Nombre es requerido');
        return;
    }

    if(e.currentTarget.mensaje.value == ''){
        alert('El campo mensaje es requerido');
        return;
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos ${e.currentTarget.mensaje.value}`)

    
})  
