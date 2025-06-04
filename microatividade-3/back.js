const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET_KEY = 'sua_chave_secreta';

// Gera token JWT com expiração de 5 minutos
function do_Login(req, res) {
  const payload = {
    username: req.body.username,
    exp: Math.floor(Date.now() / 1000) + (5 * 60) // 5 minutos
  };

  const token = jwt.sign(payload, SECRET_KEY);
  res.json({ jwt_token: token });
}

// Valida token e expiração
function do_SomeAction(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acesso não autorizado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verifica assinatura e expiração
    // Aqui a ação é executada
    res.json({ message: 'Ação executada com sucesso!' });
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
}

app.post('/auth', do_Login);
app.post('/do_SomeAction', do_SomeAction);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
