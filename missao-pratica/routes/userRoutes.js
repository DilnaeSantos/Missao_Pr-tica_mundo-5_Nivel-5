import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Mock de usuários (poderia vir de um controller ou serviço)
const users = [
  { id: 123, username: 'user', perfil: 'user' },
  { id: 124, username: 'admin', perfil: 'admin' },
  { id: 125, username: 'colab', perfil: 'user' },
];

// Rota protegida - apenas admin
router.get('/users', authMiddleware, (req, res) => {
  if (req.user.perfil !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado. Admins apenas.' });
  }

  res.status(200).json({ data: users });
});

export default router;
