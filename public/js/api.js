const Lista = require("../../model/Lista");
function api() {
  fetch(
    "https://api.integrazap.com.br/api.php?key=1332103979844&date=this_year&format=json"
  )
    .then((retorno) => retorno.json())
    .then((dado) => {
      var api = dado.contatos;
      api.map((pessoa) => {
        data = pessoa.data;
        nome = pessoa.nome;
        telefone = pessoa.telefone;
        mensagem = pessoa.mensagem;        
        Lista.create({
          data: data,
          nome: nome,
          telefone: telefone,
          mensagem: mensagem,
        })
          .then(() => {
            console.log("Salvo com sucesso");
          })
          .catch((error) => {
            console.log(`Erro ao salvar: ${error}`);
          });
      });
    });
}
module.exports = api;
