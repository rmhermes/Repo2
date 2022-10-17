
const cuadrado = document.getElementsByClassName('caja')[0];
const rojo = document.getElementById('color');
const borde = document.getElementById('border');
const reset = document.getElementById('reset');

rojo.addEventListener('click', function(){
    cuadrado.classList.add('rojo')
    
})
border.addEventListener('click', function(){
    cuadrado.classList.add('border')
    
})
reset.addEventListener('click', function(){
    cuadrado.classList.remove('rojo', 'border')
    
})