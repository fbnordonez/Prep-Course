// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Lo que quieras';

//*************************COMPLETADO*****************************

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 26;

//*************************COMPLETADO*****************************

// Crea una variable booleana:
const nuevoBool = true;

//*************************COMPLETADO*****************************

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

//*************************COMPLETADO*****************************

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

//*************************COMPLETADO*****************************

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

//*************************COMPLETADO*****************************


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var str;
  return str;

}
//*************************COMPLETADO*****************************

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  return suma;
}
//*************************COMPLETADO*****************************

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = x - y;
  return resta;
}
//*************************COMPLETADO*****************************

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplica = x * y;
  return multiplica;
}
//*************************COMPLETADO*****************************

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divide = x / y;
  return divide;
}
//*************************COMPLETADO*****************************

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var sonIguales = true;
  if (x === y) {
    return sonIguales;
  } else {
    sonIguales = false;
    return sonIguales;
  }
}
//*************************COMPLETADO*****************************

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var tienenMismaLogngitud = true;
  if (str1.length == str2.length){
    return tienenMismaLogngitud;
    }
    else {
      tienenMismaLogngitud = false;
      return tienenMismaLogngitud;
    }
  }
//*************************COMPLETADO*****************************

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var menosQueNoventa = true;

  if (num < 90){
    return menosQueNoventa;
  } else {
    menosQueNoventa = false;
    return menosQueNoventa;
  }
  
}
//*************************COMPLETADO*****************************

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayorQueCincuenta;
  if (num > 50) {
    mayorQueCincuenta = true;
  } else{
    mayorQueCincuenta = false;
  }
  return mayorQueCincuenta;
}
//*************************COMPLETADO*****************************

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var obtenerResto = x % y;
  return obtenerResto;
}
//*************************COMPLETADO*****************************

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var esPar;
  var veamosSiEsPar = num % 2;
  if (veamosSiEsPar === 0) {
    esPar = true;
  }else{
    esPar = false;
  }
  return esPar;
}
//*************************COMPLETADO*****************************

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var esImpar;
  var veamosSiEsImpar = num % 2;
  if (veamosSiEsImpar != 0) {
    esImpar = true;
  }else{
    esImpar = false;
  }
  return esImpar;
}
//*************************COMPLETADO*****************************

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let elevarAlCuadrado = Math.pow(num,2);
  /* Leí en la documentación de Mozilla que es preferible usar 
  'let' antes que 'var'. Comenzaré a usarla a partir de ahora.*/
  return elevarAlCuadrado;
}
//*************************COMPLETADO*****************************

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let elevarAlCubo = Math.pow(num,3);
  return elevarAlCubo;
}
//*************************COMPLETADO*****************************

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let elevar = Math.pow(num,exponent);
  return elevar;
}
//*************************COMPLETADO*****************************

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redondearNumero = Math.round(num);
  return redondearNumero;
}
//*************************COMPLETADO*****************************

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let redondearHaciaArriba = Math.ceil(num);
  return redondearHaciaArriba;
}
//*************************COMPLETADO*****************************

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
  let max = 1.1;
  let min = 0;
  return Math.random() * (max - min) + min;
}
//*************************COMPLETADO*****************************

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  let respuesta;
  if (numero > 0) {
    respuesta = "Es positivo";
    return respuesta;
  } else if (numero < 0) {
    respuesta = "Es negativo";
    return respuesta;
  } else (numero == 0)
    return false;
}
//*************************COMPLETADO*****************************

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  let agregarSimboloExclamacion = str + "!";
  return agregarSimboloExclamacion;
}
//*************************COMPLETADO*****************************

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combinarNombres = nombre + " " + apellido;
  return combinarNombres;
}
//*************************COMPLETADO*****************************

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let obtenerSaludo = "Hola " + nombre + "!";
  return obtenerSaludo;
}
//*************************COMPLETADO*****************************

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  let obtenerAreaRectangulo = alto*ancho;
  return obtenerAreaRectangulo;
  
}
//*************************COMPLETADO*****************************

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let retornarPerimetro = lado * 4;
  return retornarPerimetro;
}
//*************************COMPLETADO*****************************

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  let areaDelTriangulo = (base * altura)/2;
  return areaDelTriangulo;

}
//*************************COMPLETADO*****************************

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  let dolar = 1.20;
  let deEuroAdolar = euro * dolar;
  return deEuroAdolar;
}
//*************************COMPLETADO*****************************

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  let esVocal;
  let numeroDeCaracateres = letra.length;
  if (numeroDeCaracateres > 1){
    esVocal = "Dato incorrecto";
    return esVocal;
  } else if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    esVocal = "Es vocal";
    return esVocal;
  } else
  esVocal = "Dato incorrecto";
  return esVocal;
}
//*************************COMPLETADO*****************************



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
