class Asistencia {
    fecha ="01/01/1999"
    asistencia = ""
    estudiante = new persona()
    materia = new materia()

    constructor(){
            this.fecha = "30/05/2023"
            this.asistencia = "si"
            this.estudiante.SetNombre("Bryan")
            this.materia.SetNombre("103")
    }

    GetFecha() {return this.fecha}
    GetAsistencia() { return this.asistencia}
    GetEstudiante() {return this. estudiante}
    GetMateria() { return this.materia}
        
    SetFecha(valor) {this.fecha = valor}
    SetAsistencia(valor) {this.aula = valor}
    SetEstudiante(valor) {this.estudiante = valor}
    SetMateria(valor) {this.materia = valor}


    toString(){
        return this.GetFecha()
        +" "
        +this.GetAsistencia()
        +" "
        +this.GetEstudiante()
        +" "
        +this.GetMateria()
    }
}
