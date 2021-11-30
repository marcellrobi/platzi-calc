const calculoSinImpuesto = (salario, impuesto=0, emergencia) => {
  const calculo = salario * (100 - (impuesto + emergencia)) / 100;
  return calculo;
}
const calcularAhorro = () => {  
  const salario = parseInt(document.getElementById("salario").value);
  const impuesto = parseInt(document.getElementById("impuesto").value);
  const deudas = parseInt(document.getElementById("deudas").value);
  const gastosFijos = parseInt(document.getElementById("gastosFijos").value);
  const porcentajeDeEmergencia = 10;
  const ingresoSinImpuesto = calculoSinImpuesto(salario, impuesto, porcentajeDeEmergencia);

  const resultado = document.getElementById("ahorro")
  const ahorro = ingresoSinImpuesto - (deudas + gastosFijos);
  const ahorroPorcentaje = (ahorro * 100) / salario;
  const absolutoEmergencia = salario - (salario * (100 - porcentajeDeEmergencia) / 100);
  resultado.innerText = `Este mes puedes ahorrar: ${ahorro.toFixed(1)}$ lo cual representa el ${ahorroPorcentaje.toFixed(1)}% de tu salario y cuentas con ${absolutoEmergencia.toFixed(1)}$ para emergencias`;
  resultado.style.cssText = 'background-color: #000000; font-size: 2.0rem; color: #e8e8e8; width:100%; height: 25%; border-block-start: 2px solid #30475E; text-align: center; padding-block-start: 15px; margin-block-start: 20px; border-radius: 0 0px 20px 20px;';
}