loadJson()
var combinacoes;

function loadJson() {
    // Usando fetch para carregar o arquivo JSON
    fetch('newjson.json')  // Especifique o caminho do arquivo JSON
        .then(response => {
            // Verificar se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON.');
            }

            return response.json(); // Converter a resposta em JSON
        })
        .then(data => {
            // Manipular os dados do JSON
            combinacoes = data
            //alert(data)
        })
        .catch(error => {
            // Manipular erros
            console.error('Erro:', error);
        });
}



function filterByOptions(){

  loadJson()
  clearHTML()

  combinacoes = Object.values(combinacoes.combinacoes)

  var BaseUR = document.getElementById("baseUR")
  var Port = document.getElementById("Port")

  var isPortAndUr = BaseUR.checked && Port.checked ? true : false

  var qtdLinhas = parseInt(document.getElementById("linhas").value);

  var totalValue = sumValues()

  combinacoes = filtrarPorLinhas(qtdLinhas)

  buildCombo(combinacoes, totalValue,isPortAndUr)
  
}

function buildCombo(combinacoes, valor, isPortAndUr) {
  const op1 = opcao1(combinacoes, valor);
  const op2 = opcao2(combinacoes, valor, op1);
  const op3 = opcao3(combinacoes, valor, op1, op2);
  const op4 = opcao4(combinacoes, valor, op1, op2, op3);
  const op5 = opcao5(combinacoes, valor, op1, op2, op3, op4);
  
  showPlan(isPortAndUr,op1,op2,op3,op4,op5)
}

function opcao1(combinacoes, valor) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;


    combinacoes.forEach(combinacao => {
      const diferencaAtual = Math.abs(combinacao.vlr_total_portin - valor); // Calcula a diferença absoluta
  
      // Verifica se a diferença atual é menor que a menor diferença registrada
      if (diferencaAtual < menorDiferenca) {
          menorDiferenca = diferencaAtual; // Atualiza a menor diferença
          melhorCombinacao = combinacao; // Atualiza a melhor combinação
      }
    });
  return melhorCombinacao;
}

function opcao2(combinacoes, valor, op1) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  // Converte o valor de internetMovel de op1 para número
  const internetMovelOp1 = parseInt(op1.internetMovel.replace(' GB', ''));

  // Itera sobre as combinações
  combinacoes.forEach(combinacao => {
    let diferencaAtual;
    
    // Verifica qual campo de valor usar dependendo do isPortAndUr
    diferencaAtual = Math.abs(combinacao.vlr_total - valor);

    // Converte o valor de internetMovel da combinação atual para número
    const internetMovelAtual = parseInt(combinacao.internetMovel.replace(' GB', ''));

    // Verifica se a diferença é menor e o internetMovel é maior que o da op1
    if (diferencaAtual < menorDiferenca && internetMovelAtual > internetMovelOp1 && combinacao.id != op1.id) {
      menorDiferenca = diferencaAtual; // Atualiza a menor diferença
      melhorCombinacao = combinacao;   // Atualiza a melhor combinação
    }
  });

  return melhorCombinacao;
}

function opcao3(combinacoes, valor, op1, op2) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  // Função para converter internetBandaLarga para Megas
  function converterInternetBandaLarga(velocidade) {
    if (velocidade.includes("Giga")) {
      return parseInt(velocidade) * 1000; // 1 Giga = 1000 Megas
    } else if (velocidade.includes("Megas")) {
      return parseInt(velocidade);
    } else {
      return 0; // Caso algum formato inesperado apareça
    }
  }

  // Converte o valor de internetBandaLarga de op1 para Megas
  const bandaLargaOp1 = converterInternetBandaLarga(op2.internetBandaLarga);

  // Converte o valor de internetMovel da combinação atual para número
   //const internetMovelop1 = parseInt(op1.internetMovel.replace(' GB', ''));

  // Itera sobre as combinações
  combinacoes.forEach(combinacao => {
    let diferencaAtual;

    // Verifica qual campo de valor usar dependendo do isPortAndUr
    diferencaAtual = Math.abs(combinacao.vlr_total - valor); // Normal

    // Converte o valor de internetBandaLarga da combinação atual para Megas
    const bandaLargaAtual = converterInternetBandaLarga(combinacao.internetBandaLarga);

    // Converte o valor de internetMovel da combinação atual para número
   const internetMovelAtual = parseInt(combinacao.internetMovel.replace(' GB', ''));

    // Verifica se a diferença é menor e internetBandaLarga é maior que a de op1
    if (diferencaAtual < menorDiferenca && bandaLargaAtual > bandaLargaOp1 && combinacao.id != op1.id && combinacao.id != op2.id ) {
      menorDiferenca = diferencaAtual; // Atualiza a menor diferença
      melhorCombinacao = combinacao;   // Atualiza a melhor combinação
    }
  });

  return melhorCombinacao;
}

function opcao4(combinacoes, valor, op1, op2, op3) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  // Converte o valor de internetMovel de op1 para número
  const internetMovelOp2 = parseInt(op2.internetMovel.replace(' GB', ''));

  // Itera sobre as combinações
  combinacoes.forEach(combinacao => {
    let diferencaAtual;
    
    // Verifica qual campo de valor usar dependendo do isPortAndUr
    diferencaAtual = Math.abs(combinacao.vlr_total - valor);

    // Converte o valor de internetMovel da combinação atual para número
    const internetMovelAtual = parseInt(combinacao.internetMovel.replace(' GB', ''));

    // Verifica se a diferença é menor e o internetMovel é maior que o da op1
    if (diferencaAtual < menorDiferenca && internetMovelAtual == internetMovelOp2 && combinacao.internetBandaLarga > op2.internetBandaLarga && combinacao.id != op1.id && combinacao.id != op2.id && combinacao.id != op3.id) {
      menorDiferenca = diferencaAtual; // Atualiza a menor diferença
      melhorCombinacao = combinacao;   // Atualiza a melhor combinação
    }
  });

  return melhorCombinacao;
}

function opcao5(combinacoes, valor, op1, op2, op3, op4) {
  if(op4 == null)
    return null;

  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  // Função para converter internetBandaLarga para Megas
  function converterInternetBandaLarga(velocidade) {
    if (velocidade.includes("Giga")) {
      return parseInt(velocidade) * 1000; // 1 Giga = 1000 Megas
    } else if (velocidade.includes("Megas")) {
      return parseInt(velocidade);
    } else {
      return 0; // Caso algum formato inesperado apareça
    }
  }

  // Converte o valor de internetBandaLarga de op1 para Megas
  const bandaLargaOp3 = converterInternetBandaLarga(op3.internetBandaLarga);

  // Converte o valor de internetMovel da combinação atual para número
  const internetMovelop3 = parseInt(op3.internetMovel.replace(' GB', ''));

  // Itera sobre as combinações
  combinacoes.forEach(combinacao => {
    let diferencaAtual;

    // Verifica qual campo de valor usar dependendo do isPortAndUr
    diferencaAtual = Math.abs(combinacao.vlr_total - valor); // Normal

    // Converte o valor de internetBandaLarga da combinação atual para Megas
    const bandaLargaAtual = converterInternetBandaLarga(combinacao.internetBandaLarga);

    // Converte o valor de internetMovel da combinação atual para número
   const internetMovelAtual = parseInt(combinacao.internetMovel.replace(' GB', ''));

    // Verifica se a diferença é menor e internetBandaLarga é maior que a de op1
    if (diferencaAtual < menorDiferenca && bandaLargaAtual < bandaLargaOp3  && internetMovelAtual == internetMovelop3 && combinacao.id != op1.id && combinacao.id != op2.id && combinacao.id != op3.id && combinacao.id != op4.id) {
      menorDiferenca = diferencaAtual; // Atualiza a menor diferença
      melhorCombinacao = combinacao;   // Atualiza a melhor combinação
    }
  });

  return melhorCombinacao;
}


function filtrarPorLinhas(numLinhas) {
  const resultado = [];

  combinacoes.forEach(x => {
    if (numLinhas === 1) {
      resultado.push(x);
    }

    if (numLinhas === 2 && x.linhas >= 2) {
      resultado.push(x);
    }else 
    if (numLinhas === 3 && x.linhas >= 3) {
      resultado.push(x);
    }else 
    if (numLinhas >3 && x.linhas >= 3) {
      resultado.push(x);
    }
  });

  return resultado;
}


function sumValues() {
  var vlrMovel = document.getElementById("vlrmovel").value;
  var vlrBl = document.getElementById("vlrbl").value;

  var result = parseFloat(vlrMovel) + parseFloat(vlrBl);

  document.getElementById("vfl").value = result;
  return result
}



function showPlan(isPortAndUr,op1,op2,op3,op4,op5) {

  document.getElementById("faixaNome1").innerText = op1.internetMovel;
  document.getElementById("vlr_movel1").innerText = op1.vlr_movel;
  document.getElementById("ibl1").innerText = op1.internetBandaLarga;
  document.getElementById("vlrBl1").innerText = op1.vlr_bl;
  document.getElementById("totalFaixa1").innerText = !isPortAndUr ? op1.vlr_total : op1.vlr_total_portin

  document.getElementById("faixaNome2").innerText = op2.internetMovel;
  document.getElementById("vlr_movel2").innerText = op2.vlr_movel;
  document.getElementById("ibl2").innerText = op2.internetBandaLarga;
  document.getElementById("vlrBl2").innerText = op2.vlr_bl;
  document.getElementById("totalFaixa2").innerText = !isPortAndUr ? op2.vlr_total : op2.vlr_total_portin

  document.getElementById("faixaNome3").innerText = op3.internetMovel;
  document.getElementById("vlr_movel3").innerText = op3.vlr_movel;
  document.getElementById("ibl3").innerText = op3.internetBandaLarga;
  document.getElementById("vlrBl3").innerText = op3.vlr_bl;
  document.getElementById("totalFaixa3").innerText = !isPortAndUr ? op3.vlr_total : op3.vlr_total_portin

  if(op4 != null){
    document.getElementById("faixaNome4").innerText = op4.internetMovel;
    document.getElementById("vlr_movel4").innerText = op4.vlr_movel;
    document.getElementById("ibl4").innerText = op4.internetBandaLarga;
    document.getElementById("vlrBl4").innerText = op4.vlr_bl;
    document.getElementById("totalFaixa4").innerText = !isPortAndUr ? op4.vlr_total : op4.vlr_total_portin
  }
  
  if(op5 != null){
    document.getElementById("faixaNome5").innerText = op5.internetMovel;
    document.getElementById("vlr_movel5").innerText = op5.vlr_movel;
    document.getElementById("ibl5").innerText = op5.internetBandaLarga;
    document.getElementById("vlrBl5").innerText = op5.vlr_bl;
    document.getElementById("totalFaixa5").innerText = !isPortAndUr ? op5.vlr_total : op5.vlr_total_portin
  }
}



function clearHTML(){
  document.getElementById("faixaNome1").innerText = "";
  document.getElementById("vlr_movel1").innerText = "";
  document.getElementById("ibl1").innerText = "";
  document.getElementById("vlrBl1").innerText = "";
  document.getElementById("totalFaixa1").innerText = "";

  document.getElementById("faixaNome2").innerText = "";
  document.getElementById("vlr_movel2").innerText = "";
  document.getElementById("ibl2").innerText = "";
  document.getElementById("vlrBl2").innerText = "";
  document.getElementById("totalFaixa2").innerText = "";

  document.getElementById("faixaNome3").innerText = "";
  document.getElementById("vlr_movel3").innerText = "";
  document.getElementById("ibl3").innerText = "";
  document.getElementById("vlrBl3").innerText = "";
  document.getElementById("totalFaixa3").innerText = "";

  document.getElementById("faixaNome4").innerText = "";
  document.getElementById("vlr_movel4").innerText = "";
  document.getElementById("ibl4").innerText = "";
  document.getElementById("vlrBl4").innerText = "";
  document.getElementById("totalFaixa4").innerText = "";

  document.getElementById("faixaNome5").innerText = "";
  document.getElementById("vlr_movel5").innerText = "";
  document.getElementById("ibl5").innerText = "";
  document.getElementById("vlrBl5").innerText = "";
  document.getElementById("totalFaixa5").innerText = "";
}