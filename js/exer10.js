const persona = {
    nombre: "Albert",
    apellidos: "Esponey Pique",
    edad: 22,
    direccion: "P Prim Reus",
    ciudad: "Reus",
    pais: "Puerto Rico",
    hobbie: "futbol"
};

const nombreCompleto = (persona) => {
    console.log(`${persona.nombre} ${persona.apellidos}`);
}

nombreCompleto(persona);