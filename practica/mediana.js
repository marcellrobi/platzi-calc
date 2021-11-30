const lista1 = [
  100, 900, 500, 800, 750, 200
];
const esPar = (numero) => {
  if(numero%2 === 0){
    return true
  } else{
    return false
  }
}
const fc = function(a, b) {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
};
const calcularMediana = (listap) => {
  
  let lista = listap.sort(fc);
  const mitadLista1 = parseInt(lista.length/2);
  let mediana;
  
  if(esPar(lista.length)){
    mediana = (lista[mitadLista1] + lista[mitadLista1 - 1]) / 2
  } else {
    mediana = lista[mitadLista1]
  }
  return mediana
}
