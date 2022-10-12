
function suma(a,b) {
    
    return a+b;
}
 
const num1= 15;
const num2= 30;
const num3=20;
const num4=50;

const resultado1 =suma(num1,num2);
const resultado2 =suma(num3,num4);

document.write(resultado1 + '<br>');
document.write(resultado2 + '<br>');
document.write(suma(num1,num4));

alert(`El primer resultado es ${resultado1}`);   /* alert() cartel de mensaje */
alert(`El segundo resultado es ${resultado2}`);
alert(`El tercer resultado es ${suma(num1,num4)}`);


