
let arrayGastos = [];

function gastos(importe) {

    arrayGastos.push(importe);
    console.log(arrayGastos);

}

function cierreMes() {

    let sumaGastos = 0;

    for (let i = 0; i < arrayGastos.length; i++) {
      sumaGastos += arrayGastos[i];
    }
     
    console.log(sumaGastos);

    let gastototal = document.getElementById("gastototal");
    gastototal.innerHTML = "Gasto final: " + sumaGastos;


/*falta contador de gastos
se puede sacar con una li?? */
     

    /*el ultimo paso es que el array quede vacio*/ 
    arrayGastos.splice(0, arrayGastos.length);
    console.log(arrayGastos);
}

 