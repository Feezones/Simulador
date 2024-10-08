
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
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].MovelGB;
        document.getElementById("totalFaixa1").innerText = selectedlinhas[0].Total;

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].MovelGB;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].Total;
    }

    if(qtdLinhas == 2){
        var selectedlinhas = Object.values(Combinations.Combinations).filter(x => x.Linhas >= 2);
        //onsole.log(selectedlinhas)
        document.getElementById("faixaNome1").innerText = selectedlinhas[0].MovelGB;
        document.getElementById("totalFaixa1").innerText = (selectedlinhas[0].Total + 50);

        document.getElementById("faixaNome2").innerText = selectedlinhas[1].MovelGB;
        document.getElementById("totalFaixa2").innerText = selectedlinhas[1].Total + 50;
    }

}
