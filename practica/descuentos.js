const cupones = {
  robi_developer: 20,
  web_robi: 30,
  master_robi:50,
}
const descontar = (p, d) => {
  return p-(p*(d/100))
}
const cuponDescontar = (p, d, dc) => {
  if(d){
    descuento = d + dc
    return p-(p*(descuento/100))
  }else{
    return p-(p*(dc/100))
  }
}

const onClickButtonPriceDiscount = () => {
  const precioOriginal = document.getElementById("InputPrice");
  const priceValue = parseInt(precioOriginal.value);
  const descuento  = document.getElementById("InputDiscount");
  const descuentoValue = parseInt(descuento.value);
  const cupon = document.getElementById("InputCupon");
  const cuponValue = cupon.value;
  const resultP = document.getElementById("ResultP");
  if(cuponValue=="robi_developer"){
    precioConCupon = cuponDescontar(priceValue, descuentoValue, cupones.robi_developer);
    resultP.innerText = "El precio con descuento son: $" + precioConCupon;
  } else if(cuponValue=="web_robi"){
    precioConCupon = cuponDescontar(priceValue, descuentoValue, cupones.web_robi);
    resultP.innerText = "El precio con descuento son: $" + precioConCupon;
  } else if(cuponValue==="master_robi"){
    precioConCupon = cuponDescontar(priceValue, descuentoValue, cupones.master_robi);
    resultP.innerText = "El precio con descuento son: $" + precioConCupon;
  }
  else{
    const precioConDescueto = descontar(priceValue, descuentoValue);
    resultP.innerText = "El precio con descuento son: $" + precioConDescueto;
 }
}