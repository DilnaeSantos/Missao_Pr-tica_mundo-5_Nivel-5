import { verify } from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_secreta';

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  try {
    const payload = verify(token, SECRET_KEY);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
}

export default authMiddleware;
