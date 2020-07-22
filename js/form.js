const botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', event =>{
  event.preventDefault();
  

  // form do paciente
  const form = document.querySelector('#form-adiciona');

  // extrai os valores do form do paciente
  const paciente = obtemPacienteDoFormulario( form );

  // Cria a tr e a td do form do paciente
  const pacienteTr = montaTr(paciente);
  

  const erros = validaPaciente(paciente)

  if(erros.length > 0){
    exibeMensagensDeErro(erros);

    return
  }

  // Adiciona paciente na tabela 
  const tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
  form.reset();
  document.querySelector("#mensagem-erro").innerHTML = '';

});



// ------------PEGA INFOS DO PACIENTE E TRANFORMA ELE EM OBJETO----------------------

const obtemPacienteDoFormulario = form =>{

  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc( form.peso.value, form.altura.value)
  }

  return paciente;
};

// ------------FUNÇÃO MONTA TR----------------------
const montaTr = paciente =>{
  const pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr
};

// ------------FUNÇÃO MONTA TD----------------------
const montaTd = (dado, classe) =>{
  const td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td
}

const validaPaciente = paciente => {
  let erros = [];

  if(paciente.nome.length == 0){ erros.push('Nome é obrigatório!')  }

  if(!validaPeso(paciente.peso)){ erros.push('Peso é inválido!')  }

  if(!validaAltura(paciente.altura)){ erros.push('Altura é inválida!') }

  if(paciente.gordura.length == 0){ erros.push('Gordura é obrigatório!')  }

  if(paciente.peso.length == 0){ erros.push('Peso é obrigatório!')  }

  if(paciente.altura.length == 0){ erros.push('Altura é obrigatório!')  }

  return erros
}

const exibeMensagensDeErro = (erros) =>{
  const ul = document.querySelector('#mensagem-erro');
  ul.innerHTML = '';

  erros.forEach( erro => {
      const li = document.createElement('li');
      li.textContent = erro;
      ul.appendChild(li);
  });
}