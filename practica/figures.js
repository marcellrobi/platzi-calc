// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => {
  return lado * 4;
}
//console.log("El perimetro de un cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = (lado) => {
  return lado ** 2;
}

//console.log("El area de un cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();
// Código del triangulo
console.group("Triangulo");

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2
}
const alturaTriangulo = (lado1, lado2, base) => {
  if(lado1 === lado2 && lado1 != base){
    altura = Math.sqrt(lado1**2 - ((base/2)**2))
    return(altura)
  }
  else{
    alert("No es un triangulo isoceles")
  }
}
//console.log("El area del triangulo mide: " + areaTriangulo + "cm2");
console.groupEnd();

//Código de la circunferencia
console.group("Circunferencia");
const diametroCirculo = (radio) => {
  return radio*2;
}
//console.log(`La circunferencia tiene un radio de: ${circulo.radio}cm y un diametro de: ${circulo.diametro}cm`)
const perimetroCirculo = (radio) =>{ 
  diametro = diametroCirculo(radio)
  return diametro * Math.PI;
}
//console.log("El perimetro de la circunferencia es de: " + perimetroCirculo);
const areaCirculo = (radio) => {
  return (radio ** 2) * Math.PI;
}
//console.log("El area de la circunferencia es de: " + areaCirculo)
console.groupEnd();

//Interactuando con el HTML

const calcularPerimetroCuadrado = () => {
  lados = document.getElementById("InputCuadrado");
  const value = lados.value;
  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}
const calcularAreaCuadrado = () => {
  lados = document.getElementById("InputCuadrado");
  const value = lados.value;
  const area = areaCuadrado(value)
  alert(area)
}

const calcularPerimetroTriangulo = () => {
  lado1 = document.getElementById("InputLado1");
  lado2 = document.getElementById("InputLado2");
  Base = document.getElementById("InputBase");
  const valueLado1 = parseInt(lado1.value);
  const valueLado2 = parseInt(lado2.value);
  const valueBase = parseInt(Base.value);
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
  alert(perimetro)
}
const calcularAreaTriangulo = () => {
  lado1 = document.getElementById("InputLado1");
  lado2 = document.getElementById("InputLado2");
  Base = document.getElementById("InputBase");
  const valueLado1 = parseInt(lado1.value);
  const valueLado2 = parseInt(lado2.value);
  const valueBase = parseInt(Base.value);
  const altura = alturaTriangulo(valueLado1, valueLado2, valueBase)
  const area = Math.round10(areaTriangulo(valueBase, altura), -2)
  alert(area)
}