let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const arrayLength = (array) => {
    console.log(`Longitud: ${array.length}`);
}

const randomElement = (array) =>{
    console.log(`Valor aleatorio: ${array[Math.floor(Math.random()*array.length)]}`);
}

arrayLength(array);
randomElement(array);