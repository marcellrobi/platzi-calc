const lista1 = [100, 200, 300, 500];

let  sumaLista1 = 0
for(let i=0; i<lista1.length; i++){
  sumaLista1 += lista1[i];
}

const promedioLista1 = sumaLista1/lista1.length

const calcularMedia = (lista) => {
//  let  sumaLista = 0
//  for(let i=0; i<lista.length; i++){
//    sumaLista += lista[i];
//  }
  const sumaLista = lista.reduce(
    (valorAcumulado=0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento

    }
  )
  const promedioLista = sumaLista/lista1.length;
  return promedioLista;
}