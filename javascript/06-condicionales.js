/* condiconales se utilizan para tomar decisiones dentro 
de nuestro programa*/ 


/*
if(condicion) 

codigo
codigo
codigo
codigo

}
*/

let edad = parseInt (prompt('ingresa tu edad '));

if(edad >= 18 && edad < 30 ) {
     document.write('eres un joven');   
}else if (edad >=30 && edad < 60) {
    document.write('eres un adulto');
}else if ( edad >= 60) {
document.write('eres un adulto mayor');
} else {
document.write('eres un niño');
}