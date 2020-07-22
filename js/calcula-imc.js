const validaPeso = peso =>{
  if( peso >= 0 && peso < 1000 ){
    return true
  } else {
    return false
  }
}
const validaAltura = altura =>{
  if( altura >= 0 && altura < 3.00 ){
    return true
  } else {
    return false
  }
}


// função que calcula o IMC
const calculaImc = (peso,altura) =>{
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2)
 };



// Valida e pega as informações do paciente
const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( paciente => {
  
  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;
  
  const tdImc = paciente.querySelector('.info-imc');
  
  
  let pesoEhInvalido = validaPeso(peso);
  let alturaEhInvalido = validaAltura(altura);


  if( !pesoEhInvalido ){
    // pesoEhInvalido = false;
    tdImc.textContent = "Peso é inválido";
    paciente.classList.add('paciente-invalido');
  }
  
  if( !alturaEhInvalido ){
    // alturaEhInvalido = false;
    tdImc.textContent = "Altura é inválida";
    paciente.classList.add('paciente-invalido');
  }
  
  if( pesoEhInvalido && alturaEhInvalido ){
    const imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }

});






