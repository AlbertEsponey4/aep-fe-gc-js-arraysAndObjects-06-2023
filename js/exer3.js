let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
console.log(javascript1);

javascript1.splice(0, 1); //elimina a partir del elemento 0, 1 elemento.
console.log(javascript1);

javascript1.splice(0, 0, "Objetos"); // si el segundo argumento esta en 0, no elimina, 
                                    //solo añade los items que le pongoas a partir del tercer argumento seguido del elemento 0(primer argumento)
console.log(javascript1);

javascript1.splice(3, 1, "Arrays difíciles"); //elimina 1 elemento a partir de la posicion 3 y añado Array difíciles en la posición 3
console.log(javascript1);

let javascript2 = javascript1.slice(-2); //devuelve una nueva matriz solo con los elementos que queremos.
console.log(javascript2);                //Un solo numero negativo -> los ultimos X elementos. Un solo numero positivo -> los primeros X elementos
                                         //Dos elementos -> inicio y fin de la posiciones que se van a copiar.

let indiceFunciones = javascript1.indexOf("Funciones");
console.log(`Funciones está en la posición ${indiceFunciones} (en el primer array)`); 