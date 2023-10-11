var arrayImportes = [];

var arrayConceptos = []; //contar importe e imprimir su string

var contador = 0;

function gastos(importe) {
  //vaciar el marcador al pulsar gasto nuevo mes
  let gastototal = document.getElementById("gastototal");
  gastototal.innerHTML = "";

  arrayImportes.push(importe);
  console.log(arrayImportes);

  if (importe == 150) {
    arrayConceptos.push("Luz y gas");
    //añadirConcepto(); mal, imprime con cada gasto, no al final
    contador++;
  } else if (importe == 20) {
    arrayConceptos.push("Agua y basura");
    contador++;
  } else if (importe == 40) {
    arrayConceptos.push("Internet");
    contador++;
  } else if (importe == 65) {
    arrayConceptos.push("Telefono");
    contador++;
  } else if (importe == 800) {
    arrayConceptos.push("Hipoteca");
    contador++;
  } else if (importe == 15) {
    arrayConceptos.push("Seguros");
    contador++;
  } else if (importe == 100) {
    arrayConceptos.push("Comida");
    contador++;
  } else if (importe == 70) {
    arrayConceptos.push("Gasolina");
    contador++;
  } else if (importe == 365) {
    arrayConceptos.push("Colegio");
    contador++;
  } else if (importe == 35) {
    arrayConceptos.push("Ocio");
    contador++;
  }

  console.log(arrayConceptos);
}

/*function añadirConcepto(params) {
  let listaNombres = document.getElementById("listaNombres");
  listaNombres.innerHTML = ""; // Limpiar la lista

  for (let i = 0; i < arrayConceptos.length; i++) {
    let conceptolista = document.createElement("li");
    conceptolista.textContent = arrayConceptos[i];
    listaNombres.appendChild(conceptolista);
  }
}*/

function cierreMes() {

 /*   let conceptos;
    for(let i=0;i<arrayConceptos.length;i++){
        conceptos+= arrayConceptos[i];
    }

    let listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML=listaNombres;*/
    

  let sumaGastos = 0;
  for (let i = 0; i < arrayImportes.length; i++) {
    sumaGastos += arrayImportes[i];
  }
  console.log(sumaGastos);

  let gastototal = document.getElementById("gastototal");
  gastototal.innerHTML = "Gasto final: " + sumaGastos;

  /*el ultimo paso es que el array quede vacio*/
  arrayImportes.splice(0, arrayImportes.length);
  console.log(arrayImportes);

  arrayConceptos.splice(0, arrayConceptos.length);
  console.log(arrayConceptos);
}
