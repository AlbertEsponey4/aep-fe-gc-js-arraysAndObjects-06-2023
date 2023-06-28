const receta = {
    nombre: "Arroz a la cubana",
    tiempo: "15 minutos",
    ingredientes: ["arroz", "tomate", "huevos"]
};

const informacionReceta = (receta) => {
    console.log(receta.nombre);
    console.log(receta.tiempo);
    for(let ingrediente of receta.ingredientes){
        console.log(ingrediente);
    }
}

informacionReceta(receta);