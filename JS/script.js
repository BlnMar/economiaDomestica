
var arrayGastos = [];

var arrayContador = [];//contar importe e imprimir su string

var contador = 0;

function gastos(importe) {

    //vaciar el marcador al pulsar gasto nuevo mes
    let gastototal = document.getElementById("gastototal");
    gastototal.innerHTML = "";

    arrayGastos.push(importe);
    console.log(arrayGastos);

     /*falta contador de gastos
    if (importe = 150){
        arrayContador.push("luzgas");
        contador ++;
    }
    if (importe = 20){
        arrayContador.push("aguabasura");
        contador ++;
    }
    if (importe = 40){
        arrayContador.push("internet");
        contador ++;
    }*/
    
    arrayContador.sort(); //ordena alfabeticamente
    console.log(arrayContador);
}


function cierreMes() {

    let sumaGastos = 0;

    for (let i = 0; i < arrayGastos.length; i++) {
      sumaGastos += arrayGastos[i];
    }
     
    console.log(sumaGastos);

    let gastototal = document.getElementById("gastototal");
    gastototal.innerHTML = "Gasto final: " + sumaGastos;


   
     

    /*el ultimo paso es que el array quede vacio*/ 
    arrayGastos.splice(0, arrayGastos.length);
    console.log(arrayGastos);  
    
    arrayContador.splice(0,arrayContador.length); 
    console.log(arrayContador);
}

 