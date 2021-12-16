/*CIclos - bucles - loops

while 
permi hacer tareas repetivas

do while 
for

*/

//while
 /*
let condicion = 1; - valor inicial
while(condicion){
    tu codigo 
    modificacion a nuestro valor inicial
}
*/

//imprimir todos los numeros del 1 - 10
let condicion = 1;

while (condicion <=10){
    console.log(condicion);
    //condicion = condicion + 1;
condicion++;
};

let = numero = 1;

numero++;//2 es lo mismo que: numero = numero + 1
numero++;//3
numero++;//4
numero--;//3
numero--;//2
numero--;//1
console.log(numero);

/*
do while: se ejecuta por lo menos una ves,
si la condicion se cumple, se vuelve a ejecutar


let numero = 1;

do {
    console.log(numero);
    numero++;
}while(numero <= 10);
*/
/*
for: utiliza un contador


for (let control = 1;control <=10; control++) {
    console.log(control);
    
}*/

const comidas = ['pozole', 'tacos', 'tamales', 'tortas'];

for(let i = 0; i <= comidas.length; i++) {
    console.log(comidas[i]);
}