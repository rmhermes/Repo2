/* ADEVENTLISTENER - PREVENTDEFAULT - E */

const link = document.getElementById('link');

link.addEventListener('click', function(e){
    e.preventDefault();   /* FRENA LA ACCIÓN DEL LINK */
    alert('quisiste ir a : ' + e.currentTarget.href)  /*  */
})


