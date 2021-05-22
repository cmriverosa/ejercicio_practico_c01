class SerVivo {
    constructor(nombre){
        this.nombre = nombre;
    }
    caminar (nombre) {
        console.log(`Ahora esta caminando ${this.nombre}`);
    }
}

class Persona extends SerVivo{
    moverse(){
        this.caminar();
    }
}
const juanito = new Persona('Juanito');
juanito.moverse();