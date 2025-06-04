import { sign } from 'jsonwebtoken';
import { find } from '../data/users';
const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_secreta';

function login(req, res) {
  const { username, password } = req.body;

  const user = find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  const token = sign(
    { id: user.id, email: user.email, perfil: user.perfil },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  return res.json({ token });
}

function getPerfilUsuario(req, res) {
  return res.json({ usuario: req.user });
}

export default {
  login,
  getPerfilUsuario
};
