

function todoslosParrafos(){
    const allparrafos=document.querySelectorAll("p")
alert('la suma de los p es ' + allparrafos.length);
}
/* const num = allparrafos.length;
alert(`Hay ${num} elementos <p> dentro de este documento.`); */



function parrafosCaja1(){

    const caja1 =document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName('p');
    const num = caja1parrafos.length;

alert(`hay ${num} elementos p en la caja 1`)

}

function parrafosCaja2(){

    const caja2 = document.querySelectorAll('#caja2 p');
    const num = caja2.length;
    alert(`hay ${num} elementos p en la caja 2`);

}

