const recetas = [
    {
        nombre: "Arroz a la cubana",
        tiempo: "15 minutos",
        ingredientes: ["arroz", "tomate", "huevos"]
    },
    {
        nombre: "Galletas",
        tiempo: "35 minutos",
        ingredientes: ["harina", "azucar", "xocolate"]
    },
    {
        nombre: "sepia a la plancha",
        tiempo: "20 minutos",
        ingredientes: ["sepia", "sal", "pimienta"]
    },
];

const informacionReceta = (receta) => {
    console.log(receta.nombre);
    console.log(receta.tiempo);
    for(let ingrediente of receta.ingredientes){
        console.log(ingrediente);
    }
}

for(let receta of recetas){
    informacionReceta(receta);
    console.log("_________________");
}
