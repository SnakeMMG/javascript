/*variable var se utilizaba anteriormente,
son variables globales.
 
variable let es una variable de contexto, 
solovive en un bloque de codigo.*/

var number = 40;
console.log(number); // 40

if (true) {
    var number = 50
    console.log(number);//50

}

console.log(number);//50

var texto = 'bootcamp java';
console.log(texto);// bootcamp java

if(true) {
       let texto = ' cohorte 8'; // cohorte 8
       console.log(texto);
       let numerofavorito  = 79;
}

console.log(texto);// bootcamp java 