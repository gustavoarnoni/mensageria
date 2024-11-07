import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());  // Middleware para ler JSON

// 1. Criar tarefa (Create)
app.post('/tasks', async (req: Request, res: Response) => {
  const { mensagem } = req.body;
  try {
    // Lógica para adicionar uma nova tarefa
    res.status(201).json({ mensagem });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a tarefa' });
  }
});

// 2. Listar todas as tarefas (Read)
app.get('/tasks', async (req: Request, res: Response) => {
  // Lógica para listar tarefas
  res.json({ tasks: [] });
});

// 3. Atualizar tarefa (Update)
app.put('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { mensagem } = req.body;
  try {
    // Lógica para atualizar uma tarefa
    res.json({ jobId: id, mensagem });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
  }
});

// 4. Excluir tarefa (Delete)
app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // Lógica para excluir uma tarefa
    res.json({ message: `Tarefa ${id} removida com sucesso` });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a tarefa' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export { app };