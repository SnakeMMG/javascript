const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
console.log(numeros);

let resultados = []

for (let i = 0; i < numeros.length; i++){
    const multi = numeros[i]*2;

    resultados.push(multi);
    console.log(resultados[i]);
}



/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/