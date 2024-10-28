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
  const op1 = opcao1(combinacoes, valor, isPortAndUr);
  const op2 = opcao2(combinacoes, valor, isPortAndUr, op1);
  
  return { op1 };
}

function opcao1(combinacoes, valor, isPortAndUr) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  if(!isPortAndUr){
    combinacoes.forEach(combinacao => {
      const diferencaAtual = Math.abs(combinacao.vlr_total - valor); // Calcula a diferença absoluta
  
      // Verifica se a diferença atual é menor que a menor diferença registrada
      if (diferencaAtual < menorDiferenca) {
          menorDiferenca = diferencaAtual; // Atualiza a menor diferença
          melhorCombinacao = combinacao; // Atualiza a melhor combinação
      }
    });
  }

  if(isPortAndUr){
    combinacoes.forEach(combinacao => {
      const diferencaAtual = Math.abs(combinacao.vlr_total_portin - valor); // Calcula a diferença absoluta
  
      // Verifica se a diferença atual é menor que a menor diferença registrada
      if (diferencaAtual < menorDiferenca) {
          menorDiferenca = diferencaAtual; // Atualiza a menor diferença
          melhorCombinacao = combinacao; // Atualiza a melhor combinação
      }
    });
  }

  return melhorCombinacao;
}

function opcao2(combinacoes, valor, isPortAndUr, op1) {
  let menorDiferenca = Infinity;
  let melhorCombinacao = null;

  // Converte o valor de internetMovel de op1 para número
  const internetMovelOp1 = parseInt(op1.internetMovel.replace(' GB', ''));

  // Itera sobre as combinações
  combinacoes.forEach(combinacao => {
    let diferencaAtual;
    
    // Verifica qual campo de valor usar dependendo do isPortAndUr
    if (isPortAndUr) {
      diferencaAtual = Math.abs(combinacao.vlr_total_portin - valor); // Para portabilidade
    } else {
      diferencaAtual = Math.abs(combinacao.vlr_total - valor); // Normal
    }

    // Converte o valor de internetMovel da combinação atual para número
    const internetMovelAtual = parseInt(combinacao.internetMovel.replace(' GB', ''));

    // Verifica se a diferença é menor e o internetMovel é maior que o da op1
    if (diferencaAtual < menorDiferenca && internetMovelAtual > internetMovelOp1) {
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

    if (numLinhas === 2 && x.linhas > 0) {
      resultado.push(x);
    }else 
    if (numLinhas === 3 && x.linhas > 1) {
      resultado.push(x);
    }else 
    if (numLinhas > 3 && x.linhas === 6) {
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