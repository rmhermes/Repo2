
const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
    
})



/* classList = representa lista de estilos de clases asignadas al elemento */
/* toggle / add / remove = cambia clase - agrega clase - remueve clase - */
