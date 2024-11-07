import express from 'express';
import './producer';
import './consumer';
import { app } from 'c:/Users/gusta/Desktop/mensageria/src/routes';

const port = 3001;

app.get('/', (req, res) => {
  res.send('Sistema de Mensageria com BullMQ!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
