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

  buildCombo(combinacoes, totalValue)
  
}

function buildCombo(combinacoes, valor) {
  const op1 = opcao1(combinacoes, valor);
  //const op2 = opcao2(planos, valor, op1);
  
  return { op1 };
}

function opcao1(combinacoes, valor) {
  let menorDiferenca = Infinity;
let melhorCombinacao = null;

  combinacoes.forEach(combinacao => {
    const diferencaAtual = Math.abs(combinacao.vlr_total - valor); // Calcula a diferença absoluta

    // Verifica se a diferença atual é menor que a menor diferença registrada
    if (diferencaAtual < menorDiferenca) {
        menorDiferenca = diferencaAtual; // Atualiza a menor diferença
        melhorCombinacao = combinacao; // Atualiza a melhor combinação
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