const notes = [
  {
    course: "Educación Fisica",
    note: 10,
    credit: 2
  },
  {
    course: "Programación",
    note: 8,
    credit: 5
  },
  {
    course: "Finanzas Personales",
    note: 7,
    credit: 5
  }
]
let sumatoriaA = 0;
let sumatoriaB = 0;
const promedioPonderado = (array) => {
  array.map(
    (elemento)=>{
      if(elemento){
      sumatoriaA += elemento.note * elemento.credit
      sumatoriaB += elemento.credit
    } 
    }
  )
  const PP = sumatoriaA / sumatoriaB;
  return parseFloat(PP.toFixed(2));
}