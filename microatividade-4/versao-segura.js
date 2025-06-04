import { createConnection } from 'mysql2';
import express from 'express';
const app = express();

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'seu_banco'
});

app.get('/app/userView', (req, res) => {
  const id = req.query.id;

  const query = "SELECT * FROM users WHERE userID = ?";
  
  db.execute(query, [id], (err, results) => {
    if (err) {
      console.error("Erro na consulta:", err);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }

    res.json(results);
  });
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
