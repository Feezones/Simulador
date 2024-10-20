
loadJson()
var Combinations;

function loadJson() {
    // Usando fetch para carregar o arquivo JSON
    fetch('combinations.json')  // Especifique o caminho do arquivo JSON
        .then(response => {
            // Verificar se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON.');
            }

            return response.json(); // Converter a resposta em JSON
        })
        .then(data => {
            // Manipular os dados do JSON
            Combinations = data
            //alert(data)
        })
        .catch(error => {
            // Manipular erros
            console.error('Erro:', error);
        });
}


function filterByOptions(){

    var BaseUR = document.getElementById("baseUR")
    var Port = document.getElementById("Port")

    var isPortOrUr = BaseUR.checked && Port.checked ? true : false

    var qtdLinhas = parseInt(document.getElementById("linhas").value);

    var totalValue = sumValues()

    var filterCombo

    if (isPortOrUr) {
        filterCombo = Object.values(Combinations.Combinations).map((x) => {
            switch (x.InternetMovel) {
                case "28GB":
                    x.vlr_movel = 49.90;
                    x.vlr_total = x.vlr_movel + x.vlr_bl
                    break;
                case "100GB":
                    x.vlr_movel = 79.90;
                    x.vlr_total = x.vlr_movel + x.vlr_bl
                    break;
                case "200GB":
                    x.vlr_movel = 139.90;
                    x.vlr_total = x.vlr_movel + x.vlr_bl
                    break;
                case "300GB":
                    x.vlr_movel = 189.90;
                    x.vlr_total = x.vlr_movel + x.vlr_bl
                    break;
                default:
                    // Caso não seja 28GB ou 100GB, manter o valor original ou adicionar outro tratamento
                    break;
            }
            return x;
        });
    }else{
        filterCombo = Object.values(Combinations.Combinations)
    }

    if(qtdLinhas > 1){
        filterCombo = filterCombo.filter((x) => x.Linhas.includes(qtdLinhas))
    }

    filterCombo = filterCombo.sort((a, b) => {
        const diffA = Math.abs(a.vlr_total - totalValue); // Diferença absoluta para o item A
        const diffB = Math.abs(b.vlr_total - totalValue); // Diferença absoluta para o item B
        return diffA - diffB; // Ordena pelo mais próximo (menor diferença)
    });

    // Filtrar as combinações com vlr_total menor que totalValue
    const menores = filterCombo
    .filter((x) => x.vlr_total < totalValue)
    .sort((a, b) => totalValue - a.vlr_total); // Ordena do maior para o menor (mais próximo de totalValue)

    // Filtrar as combinações com vlr_total maior que totalValue
    const maiores = filterCombo
    .filter((x) => x.vlr_total > totalValue)
    .sort((a, b) => a.vlr_total - totalValue); // Ordena do menor para o maior (mais próximo de totalValue)

    // Combina os resultados, pegando 2 dos menores e 3 dos maiores
    filterCombo = [
    ...menores.slice(0, 2), // Pega os 2 primeiros menores
    ...maiores.slice(0, 3)  // Pega os 3 primeiros maiores
    ];

    // Ordena o array resultante por vlr_total em ordem crescente
    filterCombo.sort((a, b) => a.vlr_total - b.vlr_total);

    // filterCombo agora tem exatamente 5 combinações, com as 2 primeiras < totalValue e as 3 seguintes > totalValue, ordenadas por vlr_total

    showPlan(filterCombo)

}


function sumValues() {
    var vlrMovel = document.getElementById("vlrmovel").value;
    var vlrBl = document.getElementById("vlrbl").value;

    var result = parseFloat(vlrMovel) + parseFloat(vlrBl);

    document.getElementById("vfl").value = result;
    return result
    //showPlan()
}

function showPlan(filterCombo) {

    document.getElementById("faixaNome1").innerText = filterCombo[0].InternetMovel;
    document.getElementById("vlr_movel1").innerText = filterCombo[0].vlr_movel;
    document.getElementById("ibl1").innerText = filterCombo[0].InternetBandaLarga;
    document.getElementById("vlrBl1").innerText = filterCombo[0].vlr_bl;
    document.getElementById("totalFaixa1").innerText = filterCombo[0].vlr_total

    document.getElementById("faixaNome2").innerText = filterCombo[1].InternetMovel;
    document.getElementById("vlr_movel2").innerText = filterCombo[1].vlr_movel;
    document.getElementById("ibl2").innerText = filterCombo[1].InternetBandaLarga;
    document.getElementById("vlrBl2").innerText = filterCombo[1].vlr_bl;
    document.getElementById("totalFaixa2").innerText = filterCombo[1].vlr_total

    document.getElementById("faixaNome3").innerText = filterCombo[2].InternetMovel;
    document.getElementById("vlr_movel3").innerText = filterCombo[2].vlr_movel;
    document.getElementById("ibl3").innerText = filterCombo[2].InternetBandaLarga;
    document.getElementById("vlrBl3").innerText = filterCombo[2].vlr_bl;
    document.getElementById("totalFaixa3").innerText = filterCombo[2].vlr_total

    document.getElementById("faixaNome4").innerText = filterCombo[3].InternetMovel;
    document.getElementById("vlr_movel4").innerText = filterCombo[3].vlr_movel;
    document.getElementById("ibl4").innerText = filterCombo[3].InternetBandaLarga;
    document.getElementById("vlrBl4").innerText = filterCombo[3].vlr_bl;
    document.getElementById("totalFaixa4").innerText = filterCombo[3].vlr_total

    document.getElementById("faixaNome5").innerText = filterCombo[4].InternetMovel;
    document.getElementById("vlr_movel5").innerText = filterCombo[4].vlr_movel;
    document.getElementById("ibl5").innerText = filterCombo[4].InternetBandaLarga;
    document.getElementById("vlrBl5").innerText = filterCombo[4].vlr_bl;
    document.getElementById("totalFaixa5").innerText = filterCombo[4].vlr_total
}
