const persona = [
    {
        nombre: "Albert",
        apellidos: "Esponey Pique",
        ciudad: "Reus",
    },
    {
        nombre: "Paco",
        apellidos: "Gomez Gomez",
        ciudad: "Tarragona",
    },
    {
        nombre: "Paca",
        apellidos: "Martinez Martinez",
        ciudad: "Barcelona",
    }
];

const mostrarPropiedad = (persona, propiedad) => {
    for(let per of persona){
        console.log(per[propiedad])
    }
}

mostrarPropiedad(persona, "ciudad");