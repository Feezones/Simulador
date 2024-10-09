
loadJson()
var Combinations;

function loadJson(){
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





function sumValues(){
    var vlrMovel = document.getElementById("vlrmovel").value;
    var vlrBl = document.getElementById("vlrbl").value;

    var result = parseFloat(vlrMovel) + parseFloat(vlrBl);

    document.getElementById("vfl").value = result;
    showPlan(result)
}

function showPlan(result){
    var qtdLinhas = document.getElementById("linhas").value;
    
    if(qtdLinhas == 1){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas >= 1);
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total;
    }

    if(qtdLinhas == 2){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas.includes(2));
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total + 50;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total + 50;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total + 50;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total + 50;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total + 50;
    }

    if(qtdLinhas == 3){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas.includes(3));
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total + 100;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total + 100;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total + 100;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total + 100;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total + 100;
    }

    if(qtdLinhas == 4){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas.includes(4));
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total + 150;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total + 150;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total + 150;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total + 150;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total + 150;
    }

    if(qtdLinhas == 5){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas.includes(4));
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total + 200;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total + 200;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total + 200;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total + 200;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total + 200;
    }

    if(qtdLinhas == 6){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas.includes(4));
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].InternetMovel;
        document.getElementById("vlr_movel1").innerText = selectedlinhas[0].vlr_movel;
        document.getElementById("ibl1").innerText = selectedlinhas[0].InternetBandaLarga;
        document.getElementById("vlrBl1").innerText = selectedlinhas[0].vlr_bl;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].vlr_total + 250;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].InternetMovel;
        document.getElementById("vlr_movel2").innerText = selectedlinhas[1].vlr_movel;
        document.getElementById("ibl2").innerText = selectedlinhas[1].InternetBandaLarga;
        document.getElementById("vlrBl2").innerText = selectedlinhas[1].vlr_bl;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].vlr_total + 250;

        document.getElementById("faixaNome3").innerText = selectedlinhas[2].InternetMovel;
        document.getElementById("vlr_movel3").innerText = selectedlinhas[2].vlr_movel;
        document.getElementById("ibl3").innerText = selectedlinhas[2].InternetBandaLarga;
        document.getElementById("vlrBl3").innerText = selectedlinhas[2].vlr_bl;
        document.getElementById("totalFaixa3").innerText = selectedlinhas[2].vlr_total + 250;

        document.getElementById("faixaNome4").innerText = selectedlinhas[3].InternetMovel;
        document.getElementById("vlr_movel4").innerText = selectedlinhas[3].vlr_movel;
        document.getElementById("ibl4").innerText = selectedlinhas[3].InternetBandaLarga;
        document.getElementById("vlrBl4").innerText = selectedlinhas[3].vlr_bl;
        document.getElementById("totalFaixa4").innerText = selectedlinhas[3].vlr_total + 250;

        document.getElementById("faixaNome5").innerText = selectedlinhas[4].InternetMovel;
        document.getElementById("vlr_movel5").innerText = selectedlinhas[4].vlr_movel;
        document.getElementById("ibl5").innerText = selectedlinhas[4].InternetBandaLarga;
        document.getElementById("vlrBl5").innerText = selectedlinhas[4].vlr_bl;
        document.getElementById("totalFaixa5").innerText = selectedlinhas[4].vlr_total + 250;
    }

}
