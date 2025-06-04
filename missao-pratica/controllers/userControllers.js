import { sign } from 'jsonwebtoken';
import { findUserByCredentials, findUserById, getAllUsers as _getAllUsers } from '../models/userModel';
const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_secreta';

function login(req, res) {
  const { username, password } = req.body;
  const user = findUserByCredentials(username, password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  const token = sign({ id: user.id, perfil: user.perfil }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ token });
}

function getProfile(req, res) {
  const user = findUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }
  res.status(200).json({ user });
}

function getAllUsers(req, res) {
  const users = _getAllUsers();
  res.status(200).json({ users });
}

export default {
  login,
  getProfile,
  getAllUsers
};
