function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
//Hola
    let vocales = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    let contador = 0;
    
    for (let j=0; j<vocales.length; j++) {//cuando tengo un vector o un array y quiero obtener el tamaño que tiene tengo que poner length
    
        for (let i=0; i<phrase.length; i++) {

            
            if (phrase[i] == vocales[j]) {
                contador++//esto lo que hace es lo mismo que hacer contador = contador + 1 o contador++
            }
        }
    }
    return contador
}
    


function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
   

    while ( divisor <= dividendo) {
        if (dividendo % divisor === 0) {
        return divisor
        }
        divisor++
    }
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    for (let i=0; i<100; i++) {
        if (i == x) {
            return "El numero X es: " + i
            break;
        }
    }
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let suma = 0; 
    for (let i=0; i <= num; i++ ) {
        suma = suma + i
    }
    return suma
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a decimal
// tu código:👇
//10110
//existe una funcion que se llama reverse() que puedo dar vuelta un numero o string
    let suma = 0;
    let potenciaDeDos = num.length - 1;//potencia de dos empieza desde en este caso 4 porque como recorro la string desde la izquiera y en la izquierda la potencia es mas grande tengo que empezar la potencia en grande tmb

    for (let i= 0; i < num.length ; i++) {

        suma += num[i] * 2**potenciaDeDos
        potenciaDeDos -= 1 
    }
    return suma
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇
//3
let fibonacci = 0;
    if (n=0) {
        fibonacci = n
    }
    while (n > 0) {
        
        fibonacci = Fibonacci(n-1) + Fibonacci(n-2)
        
    }
    return fibonacci
    
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
for (let i = 2; i<numero; i++){
    if (numero % i == 0) {
    return numero +" no es primo."
    }
}
return numero + " es primo."
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
return cadena.split("").reverse().join("")
}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}
