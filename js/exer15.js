class receta{
    nombre;
    tiempo;
    ingredientes;

    constructor(nombre, timepo, ingredientes){
        this.tiempo = timepo;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
}

let receta1 = new receta("Arroz a la cubana", "15 minutos", ["arroz", "tomate", "huevos"])
let receta2 = new receta("sepia a la plancha", "20 minutos", ["sepia", "sal", "pimienta"])
let receta3 = new receta("Galletas", "35 minutos", ["harina", "azucar", "xocolate"])

let recetas = [receta1, receta2, receta3]

const informacionReceta = (receta) => {
    console.log(receta.nombre);
    console.log(receta.tiempo);
    for(let ingrediente of receta.ingredientes){
        console.log(ingrediente);
    }
}

for (let receta of recetas){
    informacionReceta(receta);
    console.log("________________");
}