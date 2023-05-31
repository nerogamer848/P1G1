
function VerPersonas(){
    var persona1 = new persona()//creando mi clase
    
    persona1.SetNombre("Bryan")
    persona1.SetEdad("15")
    persona1.GetNombre(1000)

    var materia1 = new materia()
    materia1.SetCapacidad(21)
    materia1.SetAula("B206")
    
    
    alert(persona1.toString())
    alert(materia1.toString())
}