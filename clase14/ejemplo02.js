

mes = parseInt(prompt('Ingrese mes en número',''));

if(mes == 1 || mes == 2  || mes == 3){
    document.write('Corresponde al primer trimestre');
} else if(mes == 4 || mes == 5  || mes == 6){
    document.write('Corresponde al segundo trimestre');
} else if(mes == 7 || mes == 8  || mes == 9){
    document.write('Corresponde al tercer trimestre');
} else if (mes == 10 || mes == 11  || mes == 12){
    document.write('Corresponde al cuarto trimestre');
}
else{
    document.write('El valor no corresponde a un mes')
}

