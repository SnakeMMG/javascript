//arreglos


const comidas = ['pozole', 'quesadillas', 'tacos'];

/*
length
*/
console.log(comidas);

/*
push-agrega al final
pop-quita al final 
unshift agrega al inicio
shift quita un elemento del inicio
*/
comidas.push('torta');
console.log(comidas);

comidas.unshift('pancita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);
/*forEach - nos puede ayudar a realizar una 
accion dentro de nuestr arreglo de forma automatica */

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
comidas.forEach(function(elementos){
    console.log(elementos)
});

const numeros = [1, 4, 7, 8];
console.log(numeros);
numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
});

/*ejercisio */
const arr = [];

function suma(num){

    let sumNum = num + 1
    return arr.unshift(sumNum);
};
suma(3);
suma(5);
suma(4);
suma(6);
suma(2);

console.log(arr);

