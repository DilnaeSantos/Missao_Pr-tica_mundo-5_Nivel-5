const express = require('express');
const app = express();
const PORT = 3000;

// Middleware fictício de autenticação por token
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  // Verifica se existe o header "Authorization" e se o token é válido
  if (authHeader && authHeader === 'Bearer meu-token-seguro') {
    next(); // Continua para o endpoint
  } else {
    res.status(401).json({ message: 'Não autorizado' });
  }
}

// Endpoint protegido
app.get('/confidential-data', authenticate, (req, res) => {
  // Simula chamada a um serviço
  const jsonData = { segredo: 'dados confidenciais' };

  res.json(jsonData);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
