var arrayImportes = [];
var arrayConceptos = []; 
var arrayContador = [0,0,0,0,0,0,0,0,0,0];

function gastos(importe) {

  //vaciar el marcador al pulsar gasto nuevo mes
  gastoTotal.innerHTML = "";
  listaNombres.innerHTML = "";

  arrayImportes.push(importe); // para rellenar el arrayImportes

  // en cada condicional añade el concepto en el arrayConceptos
  //y la pulsacion en el arrayContador en la posicion correspondiente
  if (importe == 150) {
    arrayConceptos.push("Luz y gas");
    arrayContador[0]++;
  } else if (importe == 20) {
    arrayConceptos.push("Agua y basura");
    arrayContador[1]++;
  } else if (importe == 40) {
    arrayConceptos.push("Internet");
    arrayContador[2]++;
  } else if (importe == 65) {
    arrayConceptos.push("Telefono");
    arrayContador[3]++;
  } else if (importe == 800) {
    arrayConceptos.push("Hipoteca");
    arrayContador[4]++;
  } else if (importe == 15) {
    arrayConceptos.push("Seguros");
    arrayContador[5]++;
  } else if (importe == 100) {
    arrayConceptos.push("Comida");
    arrayContador[6]++;
  } else if (importe == 70) {
    arrayConceptos.push("Gasolina");
    arrayContador[7]++;
  } else if (importe == 365) {
    arrayConceptos.push("Colegio");
    arrayContador[8]++;
  } else if (importe == 35) {
    arrayConceptos.push("Ocio");
    arrayContador[9]++;
  }
  console.log(arrayImportes);
  console.log(arrayConceptos);
  console.log(arrayContador);
}

function cierreMes() {
  
  let lista = document.getElementById("listaNombres"); //en esta variable guardamos el elemento

  for (let i = 0; i < arrayContador.length; i++) {
    let contador = arrayContador[i];

    if (contador !== 0) {
      let concepto = arrayConceptos[i];
      let elementoLi = document.createElement("li");
      elementoLi.textContent = concepto + "--- " + contador;
      lista.appendChild(elementoLi);
    }
  }

  let sumaGastos = 0;
  for (let i = 0; i < arrayImportes.length; i++) {
    sumaGastos += arrayImportes[i];
  }
  let gastoTotal = document.getElementById("gastoTotal");
  gastoTotal.innerHTML = "Gasto final: " + sumaGastos;


  //dividir sumaGastos entre numero de pulsaciones del array contador  
  let calculoMedia = 0;
  let cont = 0;
  for (let i = 0; i < arrayContador.length; i++) {
    if (arrayContador[i] == 1) {
      cont++;
    }
    calculoMedia = sumaGastos / cont;
  } 
  let gastoMedio = document.getElementById("gastoMedio");
  gastoMedio.innerHTML = "Gasto medio: " + calculoMedia;

  //el ultimo paso es que los arrays queden vacios
  arrayImportes.splice(0, arrayImportes.length);
  arrayConceptos.splice(0, arrayConceptos.length);
  // arrayContador.splice(0, arrayContador.length); no valido xq elimina TODO

  function vaciarArray(arrayContador) {
    // mantiene posiciones, pero vacias
    for (let i = 0; i < arrayContador.length; i++) {
      arrayContador[i] = 0;
    }
  }
  vaciarArray(arrayContador);

  console.log(arrayConceptos);
  console.log(arrayImportes);
  console.log(arrayContador);
}
