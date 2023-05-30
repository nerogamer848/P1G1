
function VerPersonas(){
    var persona1 = new persona()//creando mi clase
    
    persona1.SetNombre("Bryan")
    persona1.SetEdad("15")
    var name = persona1.GetNombre()
    
    if(persona1.GetEdad() > 18){
     
        alert("Usted es mayor de edad")
    
    }else{
     
        alert("vuelva pronto")
    }


alert(name)

}