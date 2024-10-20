function maiorDeIdade(idade) {
    let maioridade;
  
    if (idade >= 18) {
      maioridade = true;
    } else {
      maioridade = false;
    }
  
    if (maioridade === true) {
      return true;
    } else if (maioridade === false) {
      return false;
    } else {
      return "Erro!";
    }
  }