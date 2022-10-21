

const nombre = prompt('Ingrese su nombre','');
const today= new Date(); //objeto que trabaja fechas en js
const hrs = today.getHours();


if(hrs>=05 && hrs<12){
    document.write('Buenos días')
} else if(hrs>=12 && hrs<=19){
    document.write('Buenas tardes')
}else{
    document.write('Buenas noches')
}
