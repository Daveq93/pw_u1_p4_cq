var numA;
var numB;
var operacion;

function init(){
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("c");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var cero=document.getElementById("cero");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");

    //Eventos
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }

    //reset
    reset.onclick=function(e){
        resetear();
    }

    //operaciones
    suma.onclick=function(e){
        numA = resultado.textContent;
        operacion ="+";
        limpiar();

    }
    resta.onclick=function(e){
        numA = resultado.textContent;
        operacion ="-";
        limpiar();
        
    }
    multiplicacion.onclick=function(e){
        numA = resultado.textContent;
        operacion ="*";
        limpiar();
        
    }
    division.onclick=function(e){
        numA = resultado.textContent;
        operacion ="/";
        limpiar();
        
    }

    //Respuesta
    igual.onclick=function(e){
        numB = resultado.textContent;
        resolver();
    }


    //funciones extra
    function limpiar(){
        resultado.textContent="";
        
    }

    function resetear(){
        resultado.textContent="";
        numA=0;
        numB=0;
        operacion="";
    }

    function resolver(){
        var res =0;
        switch(operacion){
            case "+":
                res = sumarNumeros(parseInt(numA),parseInt(numB));
                break;
                case "-":
                res = restarNumeros(parseInt(numA),parseInt(numB));
            case "*":
            res = multiplicarNumeros(parseInt(numA),parseInt(numB));
            break;
            case "/":
                res = dividirNumeros(parseInt(numA),parseInt(numB));
            }
            resetear();
            resultado.textContent=res;
    }

    const sumarNumeros = (num1, num2) => num1 + num2;
    const restarNumeros = (num1, num2) => num1 - num2;
    const multiplicarNumeros = (num1, num2) => num1 * num2;
    const dividirNumeros = (num1, num2) => {
        if(num2==0){
            window.alert("No se puede realizar division por 0 (cero)")
            resetear();
        }else{
            return num1/num2;
        }
    };

}

