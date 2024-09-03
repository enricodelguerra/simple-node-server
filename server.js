const http = require('http');

const dadosPessoais = {
    nome: "Enrico Figueiredo Del Guerra",
    idade: 18,
    descrição: "Sou uma pessoa que gosta de aprender com os outros e ensinar quando possivel, sou comunicativo. ",
    gênero: "Masculino",
    país: "Brasil"
} 

// Criando o servidor
const server = http.createServer((req, res) => {
  // Definindo cabeçalhos de resposta
  res.writeHead(200, { 'Content-Type': 'text/json' });

  // Enviando uma resposta HTML
  res.end(
    JSON.stringify(dadosPessoais)
  );
});

// Fazendo o servidor ouvir na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando em <http://localhost:3000/>');
});
