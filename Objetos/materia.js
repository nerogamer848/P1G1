class materia{
    nombre = ""
    aula = ""
    capacidad = 0

    constructor(){
        this.nombre ="programacion 1"
        this.aula = "103"
        this.capacidad = 1
    }
    GetNombre() {return this.nombre}
    GetAula() { return this.aula}
    GetCapacidad() {return this. capacidad}

    SetNombre(valor) {this.nombre = valor}
    SetAula(valor) {this.aula = valor}
    SetCapacidad(valor) {this.capacidad = valor}

    toString(){
        return this.GetNombre()
        +" "
        +this.GetAula()
        +" "
        +this.GetCapacidad()
    }
}