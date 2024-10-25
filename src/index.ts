import express from 'express';
import './producer';
import './consumer';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Sistema de Mensageria com BullMQ!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
