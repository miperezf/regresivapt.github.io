// const giftIds = [2, 1, 3, 5, 3, 2];
// const firstRepeatedId = findFirstRepeated(giftIds);
// console.log(firstRepeatedId); // 3

// const giftIds2 = [1, 2, 3, 4];
// const firstRepeatedId2 = findFirstRepeated(giftIds2);
// console.log(firstRepeatedId2); // -1

// const giftIds3 = [5, 1, 5, 1];
// const firstRepeatedId3 = findFirstRepeated(giftIds3);
// console.log(firstRepeatedId3); // 5

// function findFirstRepeated(gifts) {

//     const seen = {}

//     for(let i = 0; i < gifts.length; i++){
//         const currentGift = gifts[i]

//         if (seen [currentGift] !== undefined){
//             return currentGift
//         }
//         seen[currentGift] = true;
//     }
//     return -1
//   }

// function manufacture(gifts, materials) {
//     // Array para almacenar los regalos que se pueden fabricar
//     const manufacturableGifts = [];

//     // Función auxiliar para verificar si un regalo se puede fabricar
//     function canManufacture(gift, availableMaterials) {
//         for (const char of gift) {
//             // Verificar si cada caracter del regalo está presente en los materiales disponibles
//             if (!availableMaterials.includes(char)) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     // Iterar sobre cada regalo
//     for (const gift of gifts) {
//         // Verificar si el regalo se puede fabricar
//         if (canManufacture(gift, materials)) {
//             // Agregar el regalo al array de regalos fabricables
//             manufacturableGifts.push(gift);
//         }
//     }

//     // Devolver la lista de regalos fabricables
//     return manufacturableGifts;
// }

// // Ejemplos de uso
// const gifts1 = ['tren', 'oso', 'pelota'];
// const materials1 = 'tronesa';
// console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

// const gifts2 = ['juego', 'puzzle'];
// const materials2 = 'jlepuz';
// console.log(manufacture(gifts2, materials2)); // ["puzzle"]

// const gifts3 = ['libro', 'ps5'];
// const materials3 = 'psli';
// console.log(manufacture(gifts3, materials3)); // []

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''

// function findNaughtyStep(original, modified) {
//     const lenOriginal = original.length;
//     const lenModified = modified.length;

//     // Encuentra la longitud mínima entre las dos secuencias
//     const minLength = Math.min(lenOriginal, lenModified);

//     // Itera a través de los caracteres y encuentra el primer paso diferente
//     for (let i = 0; i < minLength; i++) {
//         if (original[i] !== modified[i]) {
//             return lenOriginal > lenModified ? original[i] : modified[i];
//         }
//     }

//     // Si las longitudes son diferentes, encuentra el paso extra
//     return lenOriginal > lenModified ? original.slice(minLength) : modified.slice(minLength);
// }

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// // Paso a paso:
// // 1. Invertimos el anidado -> sa(ualcatn)s
// // 2. Invertimos el que queda -> santaclaus

// function decode(message) {

//     return ''
//   }

// function cualEsMayor(a,b){
//   return ( a > b) ? a : b;
// }

// let mayor = cualEsMayor(10,5)

// console.log(mayor);

// function nombreResolucion (ancho, alto){
//   return  (ancho >= 1280 && ancho <= 1920  && alto >= 720 && alto <= 1080 ) ? 'HD' :
//           (ancho >= 1920 && ancho <= 2560  && alto >= 1080 && alto <= 1440 ) ? 'FHD' :
//           (ancho >= 2560 && ancho <= 3840  && alto >= 1440 && alto <= 2160 ) ? 'WQHD' :
//           (ancho >= 3840 && ancho <= 7680  && alto >= 2160 && alto <= 4320 ) ? '4K' :
//           (ancho >= 7680   && alto >= 4320 ) ? '8K' : false;

// }

// let nombre = nombreResolucion(3840, 4500);
// console.log(nombre);

// function getbyIdx(arr, idx){
//   if(idx < 0 || arr.length <= idx){
//     return 'Elemento no existe';
//   }

//     return arr[idx]
// }

// let resultado = getbyIdx([1,2], 0);
// console.log(resultado);

// let i = 0;
// while (i <=10){
//   if (i % 2 !==0){
//     console.log('impar', i);
//   }

//   i++
// }

// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr){
//   let menor = arr[0];
//   let mayor = arr[0];
//   for(numero of arr){
//     menor = menor < numero ?  menor : numero;
//     mayor = mayor > numero ?  mayor : numero;
//   }
//   return [menor, mayor]
// }

// let numeros = getMenorMayor(array)
//   console.log(numeros);

// let array = [2, 5, 7, 15, -5, -100, 55];

// function cuantosPositivos(arr){
//   let cantidad = 0;

//   for(elemento of arr){
//     if(elemento > 0){
//         cantidad++;
//     }
//   }
//   return cantidad;
// }

// let resultado = cuantosPositivos(array)
// console.log(resultado);

// function precioCompleto (precio, impuesto){
//   return (precio * impuesto) + precio
// }

// let resultado = precioCompleto(19.90, 0.15);
// console.log(resultado);

//

// function toPairs(arr) {
//   let pairs = [];
//   for(idx in arr){
//     let elemento = arr[idx]
//     pairs[idx] = [elemento.id, elemento]
//   }

//   return pairs;
// }

// let resultado = toPairs(array);
// console.log(resultado);

// let pairs = [
//   [1, {name: 'Nicolas'}],
//   [2, {name: 'Felipe'}],
//   [3, {name: 'Chanchito'}],
// ];

// let array = [{
//   id: 1,
//   name: 'Nicolas',
// },
// {
// id: 2,
// name: 'Felipe',
// },
// {
// id: 3,
// name: 'Chanchito',
// }]

// function toCollection (arr){
//   let collection = [];
//   for(idx in arr){
//     let elemento = arr[idx];
//     collection[idx] = elemento[1];
//     collection[idx].id = elemento[0]
//   }
//   return collection;
// }

// let resultado = toCollection(pairs);
// console.log(resultado);

// let longitud = 7;

// function crearArray (n){
//   if (n <= 0){
//     return [];
//   }

//   let arr = [];
//   for(let i = 0; i < n ; i++){
//     arr[i] = i + 1;
//   }
//   return arr;
// }

// let resultado = crearArray(longitud);
// console.log(resultado);

// susecion de fibonacci

// function fibonacci(num){
//   const fib = [0, 1]

//   for(let i =2; i<= num; i++) {

//     fib[i] = fib[i -1] + fib[i - 2]
//   }
//   return fib[num]
// }

// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(10));

// function sumaNumerosPares(num) {
//   if (num <= 0 || !Number.isInteger(num)) {
//     return "Error: Ingresa un número entero positivo.";
//   }

//   let suma = 0;

//   for (let i = 2; i <= num; i += 2) {
//     suma += i
//   }
//   return suma;
// }

// let resultado = sumaNumerosPares(10);

// console.log(resultado);

// const esPrimo = (num) =>{
//   if (num <= 0 || !Number.isInteger(num)) {
//         return "Error: Ingresa un número entero positivo.";
//       }

//   for(let i = 2; i< num; i++){
//     if(num % i === 0){
//       return false
//     }
//   }
//   return num !== 1;
// }

// console.log(esPrimo(-5));

// const contarVocales = (texto) =>{
//   const vocales = "aeiou"

//   let cantidadVocales = 0;
//   for( const vocal of texto){
//     if(vocales.includes(vocal.toLowerCase())){
//       cantidadVocales++
//     }
//   }
//   return cantidadVocales;
// }

// console.log(contarVocales('Miguel'));

// function calculadora(num1, num2, op) {
//   const resultado = 
//   (op === "suma") ? num1 + num2 : 
//   (op === "resta") ? num1 - num2 : 
//   (op === "multiplicar") ? num1 * num2 : 
//   (op === "dividir") ? num1 / num2 : "no es una operacion valida"

//   return resultado;
// }

// console.log(calculadora(2, 2, "cocinar"));

// function esPalindromo(cadena){

//   const cadenaProcesada = cadena.replace(/\s/g, '').toLowerCase();

//   const cadenaReversa = cadenaProcesada.split('').reverse().join('')

//  console.log(cadenaProcesada);
//  console.log(cadenaReversa);

//   return cadenaProcesada === cadenaReversa;
  
// }

// console.log(esPalindromo('anita lava la tina'));

// const anioNacimiento = 2006;
// const anioActual = new Date().getFullYear()

// function calcularEdad (){
//   return anioActual - anioNacimiento
// }

// const edad = calcularEdad()
// console.log(`la persona tiene ${edad} años`);

// function verificarEdad(edad1){

// const mayorEdad = 18;

//   const verficado = edad1 >= mayorEdad ? 'Es mayor de edad' : 'No es mayor de edad';

//   return verficado;
// } 

// const mensaje = verificarEdad(edad);
// console.log(mensaje);

function calcularFechaCumple(fechaFutura){
  const ahora = new Date()
  const tiempoRestante = fechaFutura -ahora

  const segundos = Math.floor(tiempoRestante / 1000) % 60;
  const minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
  const horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
 
  return{
    dias,
    horas,
    minutos,
    segundos
  };
}

const fechaCumple = new Date('2024-03-29 11:59:59')
const tiempoRestante = calcularFechaCumple(fechaCumple)

console.log(`Faltan ${tiempoRestante.dias} días, ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos y ${tiempoRestante.segundos} segundos para mi cumple`);


const elementoPorClase = document.getElementById('cumple')

const svgBanderaPortugal = '<img src = "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/portugal-flag-icon.png" heigth = 50  width = 50>'





elementoPorClase.innerHTML = `Faltan ${tiempoRestante.dias} días, ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos y ${tiempoRestante.segundos} segundos para Portugal ${svgBanderaPortugal}`



