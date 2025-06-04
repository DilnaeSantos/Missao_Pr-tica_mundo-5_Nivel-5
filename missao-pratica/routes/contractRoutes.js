import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { param, validationResult } from 'express-validator';

const router = Router();

// Simulação de repositório/fonte de dados
class Repository {
  execute(query) {
    // Retorna dados simulados
    return [{ id: 1, empresa: 'empresaX', data_inicio: '2024-01-01' }];
  }
}

// Rota para buscar contratos
router.get(
  '/contracts/:empresa/:inicio',
  authMiddleware,
  [
    param('empresa').trim().escape().isAlphanumeric().withMessage('Empresa inválida.'),
    param('inicio').isISO8601().withMessage('Data inválida. Use formato AAAA-MM-DD.'),
  ],
  (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() });
    }

    const { empresa, inicio } = req.params;
    const repository = new Repository();
    const query = `SELECT * FROM contracts WHERE empresa = '${empresa}' AND data_inicio = '${inicio}'`;

    const result = repository.execute(query);

    if (result.length > 0) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ data: 'Dados não encontrados.' });
    }
  }
);

export default router;
