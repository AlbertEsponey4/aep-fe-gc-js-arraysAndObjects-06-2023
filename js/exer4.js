
let string = "Hola";
let array = Array.from(string); //convertir a array
let arrayInv = array.reverse(); //copia del array invertido
let stringInv = arrayInv.join(""); //de string a array

console.log(`de: ${string}`);
console.log(`to: ${stringInv}`);