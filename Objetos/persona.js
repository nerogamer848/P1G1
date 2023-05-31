//1.- NOMBRE DE LA CLASE
class persona{
        //2.-PROPIEDAD
        carnet = 0
        nombre = ""
        edad = 0
        
        //3.- CONTRUCTOR, ASIGNAR VALORES POR DEFECTO
        constructor(){
            this.carnet = 1234567
            this.nombre = "MyNombre"
            this.edad = 100
        }

        //4.- SETTERS AND GETTERS - DAR Y OBTENER UN VALOR
        GetCarnet(){
            return this.carnet
        }

        GetNombre(){
            return this.nombre
        }

        GetEdad(){
            return this.edad
        }

        SetCarnet(valor){
            return this.carnet = valor
        }

        SetNombre(valor){
            return this.nombre = valor
        }

        SetEdad(valor){
            return this.edad = valor
        }

    //5.- LOS METODOS DE LA CLASE , 0.......N
        toString(){
            return this.GetCarnet()
            +" "
            +this.GetNombre()
            +" "
            +this.GetEdad()
        }
    ContarVocales (){
        var cadena = THIS.Getnombre()
        var longitudCad = cadena.length
        var i = 0
        var contar = 0
        while (longitudCad > i) {
            var caracter = cadena^[i]
            i++
            if (caracter == "a"
            || caracter == "e"
            || caracter == "i"
            || caracter == "o"
            || caracter == "u"){
                contar = contar + 1
            }
            //alert(caracter)
        }
        //alert("La frecuencia de "a, e, i" es : "+ contar)
        return contar
    }

}