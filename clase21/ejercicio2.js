const distancia = parseInt(prompt('Ingrese los metros a recorrer', ''));


function transporteIndicado() {
    if(distancia > 0  && distancia <=1000){
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a pie.`)
    } else if(distancia >1000 && distancia <=10000){
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a bicicleta.`)
    }else if(distancia >10000 && distancia <=30000){
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a colectivo.`)
    } else if (distancia >30000 && distancia <=100000){
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a auto.`)
    }else if (distancia>100000){
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a avión.`)
    }
    else if(distancia<0){
        document.write('No es posible usar distancia negativa.')
    }
    }



transporteIndicado();



