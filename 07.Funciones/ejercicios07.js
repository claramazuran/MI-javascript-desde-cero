/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
/**
 * 
 * @param {*} nombre 
 * @param {*} apellido 
 * @returns 
 */
    const bienvenida = (nombre, apellido) =>`Bienvenido ${nombre} ${apellido}`
        
    


/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
/**
 * 
 */
    const calc = (num1, operador, num2) => {

        switch (operador) {
            case "+":
                return num1 + num2
            break;

            case "/": 
                return num1 / num2
            break;

            case "-":
                return num1 - num2
            break;

            case "*":
                return num1 * num2
            break;

            case "**":
                return num1 ** num2
            break;

            default:
                break;
        }


    }



/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
    let mayorPorcentaje = "recomendable un paraguas"
    const temp = (maxima, min, porcentaje) => {

        switch (maxima, min) {
            case min > 25:
                if (porcentaje > 50) return `El día estará caluroso, ${mayorPorcentaje}` 

                return "El día estará caluroso"

                break;
            
            case maxima < 15:
                if (porcentaje > 50) return `Es recomendable salir con abrigo, ${mayorPorcentaje}` 
                
                return "El día estará caluroso"
                break;
            
            case maxima < 26 && min > 17:

                if (porcentaje > 50) return `El día está lindo, ${mayorPorcentaje}` 
            
                
                return "El día está lindo"
                break;

            default:
                break;
        }
    }


/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor o igual a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:

    const arrayDeStrings = (array) => {

        let nuevoArreglo = [];

        for (let i =0; i<array.length; i++) {
            
            if (array[i].length >= 5) {
                nuevoArreglo.push(array[i])
            }

        }

    return nuevoArreglo
    }


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

    const stringInverso = (palabra) => palabra.split("").reverse().join("")

/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:
let personaMasJoven;
let edadDeLaPersonaMasJoven;

    const personaMásJoven = (arrayDeObjetos) => {
        personaMasJoven = arrayDeObjetos[0]
        edadDeLaPersonaMasJoven = arrayDeObjetos[0].edad

            for (let i = 1; i<arrayDeObjetos.length; i++) {
            
                if (arrayDeObjetos[i].edad < edadDeLaPersonaMasJoven ) {
                    personaMasJoven = arrayDeObjetos[i]
                    edadDeLaPersonaMasJoven = arrayDeObjetos[i].edad
                }
        }

        return personaMasJoven.nombre
    }


/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:

    const contadorDeLetras = (cadena) => {

        let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z","?", "¿"]
        let cadenaSeparada;
            for (let i =0; i< cadena.length; i++) {

                for (let j = 0; j<letras.length; j++) {
                    if (cadenaSeparada[i] == letras[j]) {
                        let
                    }
            }
    return objeto1
    }
}



/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
let personaMayorSueldo;
let sueldoMayor;
    const sueldoMasAlto = (args) => {
        personaMayorSueldo = args[0]
        sueldoMayor = args[0].sueldo

            for (let i = 1; i<args.length; i++) {
            
                if (args[i].sueldo < sueldoMayor ) {
                    personaMayorSueldo = args[i]
                    sueldoMayor = args[i].sueldo
                }
        }

        return personaMayorSueldo
    }
    }


/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:

    const aprobados = () => {}


/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}