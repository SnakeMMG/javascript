/*
[],  Array.of
arreglos: coleccion de elementos 
cuentan con metodos o funciones que nos permiten 
ordenar o manipular loddatos que nosotros almazenemos 
la posicion de los datos se cuanta desde el 0
*/
//manera 1
const arreglo1 = [4, 'HOLA', true, [1,2,6]];
console.log(arreglo1);

//manera 2
const arreglo2 = Array.of(1, 'hola', true);
console.log(arreglo2);
//manera 3
const arreglo3 = new Array(3, true, 'hadios');
console.log(arreglo3)
const frutas = ['manzanas', 'naranjas', 
'uvas','sandias', [1,2,3,4,5, ['A', 'B','C']]];
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);

frutas[4][5].push('D');

//metodos 
/* .length = longirud */
const letras = ['a','b','c','d'];
console.log(letras.length); 

/*.push = añade un elemento al final de nuestro
arreglo*/
letras.push('E');
console.log(letras);

/*.pop = elimina el ultimo elemento que temgamos
en nuestro arreglo*/

letras.pop();
console.log(letras);

/*.unshift agrega un elemento al iniciop
*/
letras.unshift(1);
console.log(letras)
/*.shift = elimina el primer elemento
*/
letras.shift();
console.log(letras);

