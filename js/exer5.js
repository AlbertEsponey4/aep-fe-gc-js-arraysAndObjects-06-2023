let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const intercalarArrays = (array1, array2) => {
    let arrayResultado = [];
    while (array1.length > 0 || array2.length > 0) {        //Mientras quede algun elemento en alguno de los arrays
        if (array1.length > 0) {
            arrayResultado.push(array1.shift());            //array shift elimina y devuelve el primer elemento de un array
        }                                                   //Por lo tanto cada vez el array tendra una posicion menos y devolvera el primero

        if (array2.length > 0) {
            arrayResultado.push(array2.shift());
        }
    }
    return arrayResultado;
}

let arrayResultadoFinal = intercalarArrays(arrayUno, arrayDos);

console.log(resultadoFinal);
console.log(arrayUno);
console.log(arrayDos);