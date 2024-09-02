const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {
  // Definindo cabeçalhos de resposta
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Enviando uma resposta HTML
  res.end(
    
  );
});

// Fazendo o servidor ouvir na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando em <http://localhost:3000/>');
});
