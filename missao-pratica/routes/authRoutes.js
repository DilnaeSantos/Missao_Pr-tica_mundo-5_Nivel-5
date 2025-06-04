import { Router } from 'express';
const router = Router();
import authMiddleware from '../middleware/authMiddleware';
import { login, getPerfilUsuario } from '../controllers/authController';

router.post('/login', login);
router.get('/me', authMiddleware, getPerfilUsuario);

export default router;
