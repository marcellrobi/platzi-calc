const triangulo = document.getElementById("triangulo");
const cuadrado = document.getElementById("cuadrado");
const circulo = document.getElementById("circulo");
const resultado_cuadrado = document.getElementById("resultado_cuadrado")
const squareButton = () => {
  cuadrado.style.display = 'flex';
  triangulo.style.display = 'none';
  circulo.style.display = 'none';
  
}
const triangleButton = () => {
  triangulo.style.display = 'flex';
  cuadrado.style.display = 'none';
  circulo.style.display = 'none';

}

const circleButton = () => {
  circulo.style.display = 'flex';
  cuadrado.style.display = 'none';
  triangulo.style.display = 'none';

}





//Cuadrado

const perimetroCuadrado = (lado) => {
  return lado * 4;
}

const areaCuadrado = (lado) => {
  return lado ** 2;
}


const calcularPerimetroCuadrado = () => {
  lados = document.getElementById("InputCuadrado");
  const value = lados.value;
  const perimetro = perimetroCuadrado(value)
  resultado_cuadrado.innerText = `El perimetro de tu cuadrado es: ${perimetro}cm`
  resultado_cuadrado.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;" 
}
const calcularAreaCuadrado = () => {
  lados = document.getElementById("InputCuadrado");
  const value = lados.value;
  const area = areaCuadrado(value)
  resultado_cuadrado.innerText = `El area de tu cuadrado es: ${area}cm`
  resultado_cuadrado.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;"
}


// triangulo

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
}

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

const calcularPerimetroTriangulo = () => {
  lado1 = document.getElementById("InputLado1");
  lado2 = document.getElementById("InputLado2");
  Base = document.getElementById("InputBase");
  const valueLado1 = parseInt(lado1.value);
  const valueLado2 = parseInt(lado2.value);
  const valueBase = parseInt(Base.value);
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
  
  resultado_triangulo.innerText = `El perimetro de tu triangulo es: ${perimetro}cm`
  resultado_triangulo.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;"
}
const calcularAreaTriangulo = () => {
  lado1 = document.getElementById("InputLado1");
  lado2 = document.getElementById("InputLado2");
  Base = document.getElementById("InputBase");
  const valueLado1 = parseInt(lado1.value);
  const valueLado2 = parseInt(lado2.value);
  const valueBase = parseInt(Base.value);
  const altura = alturaTriangulo(valueLado1, valueLado2, valueBase)
  const area = areaTriangulo(valueBase, altura)
  resultado_triangulo.innerText = `El area de tu triangulo es: ${area.toFixed(2)}cm`
  resultado_triangulo.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;"

}
//circunferencia
const radio = parseInt(document.getElementById("radio").value)
const resultado_circunferencia  = document.getElementById("resultado_circunferencia")
const diametroCirculo = () => {
  return diametro = radio*2;
}

const perimetroCirculo = () =>{ 
  const diametro = diametroCirculo(radio)
  const perimetro = diametro * Math.PI;
  resultado_circunferencia.innerText = `El perimetro de tu circunferencia es de ${perimetro}$`
  resultado_triangulo.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;"
}

const areaCirculo = () => {
  const area = (radio ** 2) * Math.PI;
  resultado_circunferencia.innerText = `El area de tu circunferencia es de ${area}$`
  resultado_triangulo.style.cssText = "font-size: 1.6rem; color: red; margin-block-start: 10px;"
}





