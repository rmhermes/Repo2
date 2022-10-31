const lista=[];   //genera funcion ingresar numero hasta 5 veces
    for(let i=0; i<5; i++){
        const num = parseInt(prompt('Ingrese un numero',''))
        lista[i]=num;
    }
let mayor = 0;

  for(i=0;i<lista.length;i++){ //recorre lista de numeros y compara mayor
      if(lista[i] > mayor)
          mayor=lista[i];
  }

console.log(mayor);



