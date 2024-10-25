import { Worker } from 'bullmq';

const worker = new Worker('minha-fila', async job => {
  console.log(`Processando tarefa: ${job.id}, Mensagem: ${job.data.mensagem}`);
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Tarefa ${job.id} concluída.`);
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});
