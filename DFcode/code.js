
function factorialN(){
    var N = prompt("ingrese N", 3)
    var i = 1
    var resp = 1
    if(N>= 0){
        if(N == 0){
            alert("el factorial de N es"+resp)
        }else{
            while(N >= i){
                resp = resp * i
                i = i + 1
            }
            alert("factorial de N es : " + resp)
        }
    }else{
        alert("no factorial de un negativo")
    }
}

function calcularfactorial(N){
    //var N = prompt("ingrese N", 3)
    var i = 1
    var resp = 1
    if(N>= 0){
        if(N == 0){
            //alert("el factorial de N es"+resp)
            return resp
        }else{
            while(N >= i){
                resp = resp * i
                i = i + 1
            }
            //alert("factorial de N es : " + resp)
            return resp
        }
    }else{
        alert("no factorial de un negativo")
    }
}

function obtenerDiv(){
    var A = parseInt(prompt("ingrese A" , 10))
    var B = parseInt(prompt("ingrese A" , 7))
    var resultado
    resultado = A / B
    alert(parseInt(resultado))
}

function obtenerMod(){
    var A = parseInt(prompt("ingrese A" , 10))
    var B = parseInt(prompt("ingrese A" , 7))
    var resultado
    resultado = A % B
    alert(parseInt(resultado))
}


function obtenerCantidadDigN() {
    var N = parsetInt(prompt("ingrese N", 10))
    var resp = 0
    var cantidad = 1
   
            while (N != 0){
                N =parsetInt(N/10)
                cantidad = cantidad +1
                alert(N)
            }
            alert("digitos: " + cantidad )
    
    }
    
    function mostrarDigN(){
    var N = parseInt(prompt("ingrese N", 9478324))
    var dig = 0
    while (N != 0){
        dig = parseInt(N % 10)
        alert(dig)
        N= parseInt(N / 10)
    
    }
}

function existeDig3enN(){
    var N = parseInt(prompt("ingrese N", 9478324))
    var dig = 0
    while (N != 0){
        dig = parseInt(N % 10)
        if(dig==3){
        
        alert("existe el dig 3")
        }
        N= parseInt(N / 10)
    }
}

function calcularTrapecio(){
    var h = parseInt(prompt("ingrese h",10))
    var b = parseInt(prompt("ingrese h",5))
    var B = parseInt(prompt("ingrese h",15))
    var a = parseInt(prompt("ingrese h",10))
    var c = parseInt(prompt("ingrese h",7))
    var area = 0
    var perimetro = 0
    area = ((b + B) / 2)+h
    perimetro = a+b+B+c
    alert("El area es: " + area)
    alert("El perimetro es:" + perimetro)
}

function determinarNesParImpar(){
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0) {
        alert(N + "es par.")
    }else{
        alert(N + "es impar")
    }
}
function ifNormal(){
    var N = parseInt(prompt("ingrese N"))
    if (N > 5){
        N = 10
    } else {
        N = 1
    }
}

function ifAbreviado(){
    var N = parseInt(prompt("ingrese N"))
    N = (N > 5) ? 10 : 1
    alert(N)
}
 /*
function obtenerCantidadDigN() {
    var N = parsetInt(prompt("ingrese N", 10))
    var resp = 0
    var cantidad = 1
   
            while (N != 0){
                N =parsetInt(N/10)
                cantidad = cantidad +1
                alert(N)
            }
            alert("digitos: " + cantidad )
    
    }
*/
function obtenercantidadDigN_FOR(){
    var N = parseInt(prompt("ingrese N ", 9478324))
    var cantidad = 0
    for (cantidad = 0; N != 0; cantidad++){
        N = parseInt(N / 10)
    }
    alert("digitos: " + cantidad)
}

//Practico segundo parcial
function mostrarSuma1_10(){
    sum = 0
    ini = 1
    lim = 10
    while (ini <= 10){
        sum = sum + ini
        ini = ini + 1
    }
    alert(" la sumatoria de los numeros del  1 a 10 : " + sum )
}
    
function NmultiploDeM(){
    var N = parseInt(prompt("ingrese N: ",10))
    var M = parseInt(prompt("ingrese N: ",3))
    if ((N % M) == 0){
        alert(N +" es multiplo de " + M)
    }else{
        alert(N +"no es multiplo de "+ M )
    }
}

function sumaDigMultiplos3deN(){
    var N = parseInt(prompt("ingrese N", 23462314))
    var sum = 0
    var dig = 0
    while ( N != 0){
        dig = parseInt(N % 10)
        alert(dig)
        if ((dig % 3) == 0){
            sum = sum + dig
        }else{
            
        }
        N = parseInt(N / 10)
    }
    alert(sum)
}

function sumarNrosEntreAyB(){
    var A = parseInt(prompt("ingrese A", 3))
    var B = parseInt(prompt("ingrese B", 9))
    var suma = 0
    while( B >= A){
        alert(A)
        suma = suma + A 
        A = A + 1
    
    }
    alert(suma)
}
    
function PromedioNdeNotas(){
    var N = parseInt(prompt("ingrese A", 15))
    var sumaNota = 0
    var i = 0
    while(N > i){
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota", 80))
        sumaNota = sumaNota + nota
    }
    alert(sumaNota/N)
}

var myVariableGlobal = "Hola Mundo"
function obtenerNombreCompleto(nombre, apellido){
    
    var nombreCompleto = nombre +" "+ apellido + " " + myVariableGlobal
    return nombreCompleto 
}
function obtenerEdad(edad){
edad = edad + 10
return edad 

}

function verificarMayorEdad(edad){
    if(edad >= 18){
        alert("puedes pasar" + myVariableGlobal)
    }else{
        alert("vuelve cuando tengas 18" + myVariableGlobal)
    }
}

function FuncionConReturn(){
    var myNombreCompleto = obtenerNombreCompleto("Alex", "Ferrufino")
    var myEdad = obtenerEdad (15)
    alert("nombre: " + myNombreCompleto)
    alert("edad: " + myEdad)
    alert(verificarMayorEdad(myEdad))
}

/* SECCION DE CODIGO PARA LA CALCULADORA*/
function darValor(valor){
    document.getElementById("resultado").value = valor
}

// obtener el valor actual del INPUT "resultado" en la pag HTML
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}
// Adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero){
    var actualnumero = obtenerValor()
    var juntarNumeros = actualnumero + "" + numero
    darValor(juntarNumeros)
}
 function factorial(){
    var N = obtenerValor()
    var resultadoFact = calcularfactorial(N)
    darValor(resultadoFact)
    //alert("soy factorial")

 }
 function potencia(){
    alert("soy potencia")
 }
 function Borrar(){
    var vacio = ""
    darValor(vacio)
    //alert("soy borrar")
    
 }
 function dividir(){
    alert("soy dividir")
    
 }
 function nro (dig){
    adjuntarValor(dig)
    //alert("soy numero " + dig)
    
 }
 function multiplicar(){
    alert("soy multiplicar")
    
 }
 function menos(){
    alert("soy menos")
    
 }
 function mas(){
    alert("soy mas")
    
 }
 function masmenos(){
    var valorResultado = obtenerValor()
    if(valorResultado == 0){
        //nada
    }else{
        if(valorResultado > 0){
        //positivo
        valorResultado = valorResultado * -1
    }else{
        //negativo
        valorResultado = valorResultado * -1
    }
    }
    darValor(valorResultado)
    //alert("soy mas menos" + valorResultado)
 
}
 function MOD(){
    alert("soy MOD")
 
 }
 function igual(){
    alert("soy igual")
    
 }