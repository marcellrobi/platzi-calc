// Helpers
const esPar = (numero) => {
  return (numero%2 === 0)
}
const mediaAritmetica = (lista) =>{
  const sumaLista = lista.reduce(
    (a=0,b)=>{
      return a + b; 
    }
  )
  const promedioLista = sumaLista / lista.length
  return promedioLista
}
// Calculadora de Mediana
const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);
  if(esPar(lista.length)){
    const mediana1 = mediaAritmetica([lista[mitad], lista[mitad - 1]])
    return mediana1
  }else{
    mediana2 = lista[mitad];
    return mediana2
  }
}

// Mediana General

const salariosCol = colombia.map(
  (elemento)=> {
    return elemento.salary;
  }
);
salariosColSorted = salariosCol.sort(
  (a, b) => {
    return a - b;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90 / 100);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log(medianaGeneralCol, medianaTop10Col);